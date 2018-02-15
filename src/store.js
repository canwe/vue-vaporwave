import Vue from 'vue'
import Vuex from 'vuex'
import MusicBank from '../static/js/musicBank'
import { mod } from '../static/js/mathTool'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentSong: Math.floor(Math.random() * MusicBank.length),
    playing: false,
    volume: 0.5,
    player: true
  },
  mutations: {
    songChange (state, index) {
      state.currentSong = index
    },
    songIncr (state, { increment, threshold }) {
      if (increment) state.currentSong = mod(state.currentSong + 1, threshold)
      else state.currentSong = mod(state.currentSong - 1, threshold)
    },
    togglePlaying (state, bool) {
      if (bool) state.playing = bool
      else state.playing = !state.playing
    },
    volumeChange (state, volume) {
      state.volume = volume
    },
    togglePlayer (state) {
      state.player = !state.player
    }
  }
})
