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
  import musicBank from '../../../static/js/musicBank'
  import { bus } from '../../main'
  import { mapState } from 'vuex'

  export default {
    created () {
      bus.$emit('toggledPlayer', (data) => {
        this.player = data
      })
      this.audio.volume = this.$store.state.volume
      this.audio = new Audio(this.pathToAudio + this.catalogue[this.currentSong].path)
      this.init()
      this.$store.commit('togglePlaying', true)
    },
    beforeDestroy () {
      this.$store.commit('togglePlaying', false)
      this.audio.removeEventListener('timeupdate', this.handleProgressBar)
    },
    data () {
      return {
        pathToAudio: 'static/catalog/',
        progress: 0,
        catalogue: musicBank,
        audio: new Audio()
      }
    },
    computed: mapState(['currentSong', 'playing', 'volume', 'player']),
    watch: {
      playing: function (newVal, oldVal) {
        if (newVal) this.audio.play()
        else this.audio.pause()
      },
      volume: function (newVal, oldVal) {
        this.audio.volume = newVal
      },
      currentSong: function (newVal, oldVal) {
        if (!this.playing) this.$store.commit('togglePlaying', true)
        this.audio.pause()
        this.audio = new Audio(
          this.pathToAudio + this.catalogue[newVal].path
        )
        this.init()
        this.audio.play()
      },
      audio: function (newVal, oldVal) {
        newVal.volume = this.volume
      }
    },
    methods: {
      playPause () {
        if (!this.playing) this.$store.commit('togglePlaying', true)
        else this.$store.commit('togglePlaying', false)
      },
      init () {
        this.audio.addEventListener('timeupdate', this.handleProgressBar)
      },
      handleProgressBar () {
        let current = this.audio.currentTime
        let total = this.audio.duration
        this.progress = parseInt(current / total * 100)
        if (this.progress === 100) this.skipSong(1)
      },
      skipSong (direction) {
        if (direction === 0) {
          if (this.audio.currentTime > 2) this.audio.currentTime = 0
          else this.$store.commit('songIncr', { increment: false, threshold: this.catalogue.length })
        } else this.$store.commit('songIncr', { increment: true, threshold: this.catalogue.length })
      },
      skipInterval (direction) {
        direction === 0 ? this.audio.currentTime -= 10 : this.audio.currentTime += 10
      },
      shuffleSong (songNum) {
        let randRange = (min, max) => {
          if (max == null) {
            max = min
            min = 0
          }
          return Math.floor(Math.random() * (max - min)) + min
        }
        this.$store.commit('songChange', randRange(0, this.catalogue.length))
      }
    }
  }
</script>

<style>
</style>
