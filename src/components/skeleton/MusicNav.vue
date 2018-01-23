<template>
  <v-bottom-nav style="height: 70px" value="true" v-model="player">
    <v-card style="width: 100%;" tile>
      <v-progress-linear 
      height="3" 
      :value="progress"
      class="my-0"></v-progress-linear>
      <v-list>
        <v-list-tile>
          <img class="hidden-xs-only"
          :src="pathToAudio + catalogue[currentSong].logo"
          style="height: 50px; width: auto; margin-right: 20px;" />
          <v-list-tile-content grid-list-md>
            <v-list-tile-title>
              <a style="text-decoration: none; color: #ffffff; font-weight: bold;" 
              :href="catalogue[currentSong].url" 
              target="_blank">
                <span>{{catalogue[currentSong].song}}</span>
              </a>
              
            </v-list-tile-title>
            <v-list-tile-sub-title>
              <a style="text-decoration: none; color: #ffffff;" 
              :href="catalogue[currentSong].url" 
              target="_blank">
                <span>{{catalogue[currentSong].artist}}</span> 
                <span class="hidden-xs-only"> - {{catalogue[currentSong].album}}</span>
              </a>
            </v-list-tile-sub-title>
          </v-list-tile-content>
          <v-spacer></v-spacer>
          <v-list-tile-action>
            <v-btn @click="skipSong(0)">
              <v-icon>skip_previous</v-icon>
            </v-btn>
          </v-list-tile-action>
          <v-list-tile-action class="hidden-xs-only">
            <v-btn>
              <v-icon @click="skipInterval(0)" color="white">fast_rewind</v-icon>
            </v-btn>
          </v-list-tile-action>
          <v-list-tile-action>
            <v-btn @click="playPause">
              <v-icon v-if="playing">pause</v-icon>
              <v-icon v-else>play_arrow</v-icon>
            </v-btn>
          </v-list-tile-action>
          <v-list-tile-action class="hidden-xs-only">
            <v-btn @click="skipInterval(1)">
              <v-icon>fast_forward</v-icon>
            </v-btn>
          </v-list-tile-action>
          <v-list-tile-action>
            <v-btn @click="skipSong(1)">
              <v-icon>skip_next</v-icon>
            </v-btn>
          </v-list-tile-action>
          <v-list-tile-action :class="{
            'mr-0': $vuetify.breakpoint.mdAndUp
          }">
            <v-btn @click="shuffleSong">
              <v-icon>shuffle</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-bottom-nav>
</template>

<script>
  import { bus } from '../../main'
  import musicBank from '../../../static/js/musicBank'

  export default {
    created () {
      this.audio.volume = 0.5
      bus.$emit('setDefaultVolume', this.audio.volume)
      bus.$on('toggledPlayer', (data) => {
        this.player = data
      })
      bus.$on('cataSongChange', (data) => {
        this.pauseBind()
        this.songCounter = data
        this.init()
        this.playBind()
        this.playing = true
      })
      bus.$on('getCurrentSong', (data) => {
        bus.$emit('globalCurrentSong', this.currentSong)
      })
      bus.$on('togglePlayingCata', (data) => {
        if (data) {
          this.playBind()
          this.playing = true
        } else {
          this.pauseBind()
          this.playing = false
        }
      })
      bus.$on('volumeChange', (data) => {
        this.audio.volume = data
      })
      this.songCounter = 1
      this.init()
      this.playBind()
      this.playing = true
    },
    mounted () {
      this.init()
    },
    beforeDestroy () {
      this.audio.pause()
      this.audio.removeEventListener('timeupdate')
    },
    data () {
      return {
        player: true,
        playing: false,
        pathToAudio: 'static/catalog/',
        progress: 0,
        songCounter: 0,
        catalogue: musicBank
      }
    },
    computed: {
      audio () {
        return new Audio(
          this.pathToAudio + this.catalogue[this.currentSong].path
        )
      },
      currentSong () {
        let mod = (n, m) => ((n % m) + m) % m
        bus.$emit('globalCurrentSong', mod(this.songCounter, this.catalogue.length))
        return mod(this.songCounter, this.catalogue.length)
      }
    },
    methods: {
      playPause () {
        if (!this.playing) this.playBind()
        else this.pauseBind()
        bus.$emit('globalCurrentSong', this.currentSong)
        this.playing = !this.playing
      },
      init () {
        this.audio.addEventListener('timeupdate', this._handleUI)
      },
      _handleUI () {
        let current = this.audio.currentTime
        let total = this.audio.duration
        this.progress = parseInt(current / total * 100)
        if (this.progress === 100) this.skipSong(1)
        /* Courtesy goes to https://github.com/shershen08/vuejs-sound-player
        For help with this bit of code */
      },
      skipSong (direction) {
        this.pauseBind()
        // 0 is backward and 1 is forward
        if (direction === 0) {
          if (this.audio.currentTime > 2) this.audio.currentTime = 0
          else this.songCounter--
        } else this.songCounter++
        this.init()
        this.playBind()
        this.playing = true
      },
      skipInterval (direction) {
        direction === 0 ? this.audio.currentTime -= 10 : this.audio.currentTime += 10
      },
      shuffleSong (songNum) {
        this.pauseBind()
        let randRange = (min, max) => {
          if (max == null) {
            max = min
            min = 0
          }
          return Math.floor(Math.random() * (max - min)) + min
        }
        this.songCounter = randRange(0, this.catalogue.length)
        this.init()
        this.playBind()
        this.playing = true
      },
      playBind () {
        this.audio.play()
        bus.$emit('togglePlayingButton', true)
      },
      pauseBind () {
        this.audio.pause()
        bus.$emit('togglePlayingButton', false)
      }
    }
  }
</script>

<style>
</style>
