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
  import { mapState } from 'vuex'

  export default {
    created () {
      this.audio.volume = this.$store.state.volume
      this.audio = new Audio(this.pathToAudio + this.catalogue[this.currentSong].path)
      this.init()
      // Auto play only on PC viewport due to several Vuex bugs on mobile browsers
      if (window.innerWidth > 800) this.playPause()
    },
    beforeDestroy () {
      this.$store.commit('togglePlaying', false)
      this.audio.removeEventListener('timeupdate', this.handleProgressBar)
    },
    data () {
      return {
        pathToAudio:    'static/catalog/',
        progress:       0,
        catalogue:      musicBank,
        audio:          new Audio()
      }
    },
   /* For folks who are unfamiliar with Vuex, the mapState method takes designated
    * states from the global store.js file and map them to local computed properties
    * of the same name.
    * For example:
    *   computed: mapstate(['foo'])
    * Would be the same as:
    *   computed: {
    *     foo () {
    *       return this.$state.store.foo
    *     }
    *   }
    * So just throw in 10 more states and you'll get how useful mapState is.
    */
    computed: mapState(['currentSong', 'playing', 'volume', 'player']),
   /* Since Vue's computed properties can't interact directly with the DOM elements 
    * (in which the Javascript Audio() is a part of), I have to use watchers instead
    * to observe changes in these elements.
    */
    watch: {
      playing: function (newVal, oldVal) {
        newVal ? this.audio.play() : this.audio.pause()
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
        this.$store.commit('togglePlaying', !this.playing)
        if (this.playing && !this.audio.playing) this.audio.play()
        else if (!this.playing && this.audio.playing) this.audio.pause()
      },
     /* Add a listener to the audio object on every frame where its playing time is 
      * updated. This will then make changes to the this.progress while the value of
      * this.progress will be watched by the progress bar on the music player, thus
      * gives the song a progressing animation.
      */
      init () {
        this.audio.addEventListener('timeupdate', this.handleProgressBar)
      },
      handleProgressBar () {
        let current = this.audio.currentTime
        let total = this.audio.duration
        this.progress = parseFloat(current / total * 100)
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
