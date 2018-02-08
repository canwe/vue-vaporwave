import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentSong: [0, 1, 4, 10, 13, 27, 28][Math.floor(Math.random() * 7)],
    playing: false,
    volume: 0.5,
    player: true
  },
  mutations: {
    songChange (state, index) {
      state.currentSong = index
    },
    songIncr (state, { increment, threshold }) {
      let mod = (n, m) => ((n % m) + m) % m
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
