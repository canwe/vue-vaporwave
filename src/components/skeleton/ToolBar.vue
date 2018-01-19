<template>
  <div>
    <v-toolbar class="pink accent-1">
      <v-toolbar-side-icon @click.stop="toggleDrawer" flat></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link class="hidden-xs-only" to="/" tag="span" style="cursor: pointer">
        v a p o r w a v e エステティック
        </router-link>
        <router-link class="hidden-md-and-up" to="/" tag="span" style="cursor: pointer">
        Project Helios
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn class="hidden-xs-only" flat @click.native.stop="aboutDialog = true">
          About
        </v-btn>
        <v-btn class="hidden-xs-only" flat @click.stop="togglePlayer">
          Show Player
        </v-btn>
        <v-btn class="hidden-md-and-up" flat @click.stop="togglePlayer">
          <v-icon>queue_music</v-icon>
        </v-btn>
        <m-button></m-button>
      </v-toolbar-items>
    </v-toolbar>

    <v-dialog v-model="aboutDialog" max-width="390">
      <v-card>
        <v-card-title class="headline" style="font-weight: bold">Author: Phi Hong</v-card-title>
        <v-card-media src="/static/nietzchehong.jpg" height="150px"></v-card-media>
        <v-card-text>
          <p>Disclaimer: I do not own any of the artistic content on the page.
          This website is created as a tribute to the Vaporwave movement
          and not for any commercial purpose whatsoever.</p> 
          <p>Enjoy the music and please don't sue me :)</p>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import { bus } from '../../main'
  import MusicButton from './MusicButton.vue'
  export default {
    components: {
      'm-button': MusicButton
    },
    data () {
      return {
        aboutDialog: false,
        drawer: false,
        player: false
      }
    },
    methods: {
      toggleDrawer: function () {
        this.drawer = true
        bus.$emit('toggledDrawer', this.drawer)
      },
      togglePlayer: function () {
        this.player = true
        bus.$emit('toggledPlayer', this.player)
      }
    }
  }
</script>

