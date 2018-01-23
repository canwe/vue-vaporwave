<template>
  <div>
    <v-toolbar class="pink accent-1">
      <v-toolbar-side-icon @click.stop="toggleDrawer" flat></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link class="hidden-xs-only" to="/" tag="span" style="cursor: pointer">
        {{title}}
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
        <v-menu :close-on-content-click="false">
          <v-btn class="hidden-xs-only" flat slot="activator">
          Volume ({{volumeBar}})
          </v-btn>
          <v-card style="width: 400px">
            <v-subheader>Media volume</v-subheader>
            <v-card-text>
              <v-slider prepend-icon="volume_up" v-model="volumeBar"></v-slider>
            </v-card-text>
          </v-card>
        </v-menu>
        <v-btn class="hidden-xs-only" flat @click.stop="togglePlayer">
          {{showHide}}
        </v-btn>
        <v-btn class="hidden-md-and-up" flat @click.stop="togglePlayer">
          <v-icon>queue_music</v-icon>
        </v-btn>
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
          <p>Long live Vaporwave~</p>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import { bus } from '../../main'
  export default {
    mounted () {
      this.interval = setInterval(() => {
        this.titleCounter++
      }, 3000)
    },
    beforeDestroy () {
      clearInterval(this.interval)
    },
    data () {
      return {
        volumeBar: 0,
        aboutDialog: false,
        drawer: false,
        player: true,
        titleCounter: 0
      }
    },
    created () {
      bus.$on('setDefaultVolume', (data) => {
        this.volumeBar = data * 100
      })
    },
    computed: {
      showHide () {
        if (this.player) return 'Hide Player'
        else return 'Show Player'
      },
      title () {
        if (this.titleCounter % 5 === 0) return 'v a p o r w a v e エステティック'
        else if (this.titleCounter % 5 === 1) return 'Project Helios'
        else if (this.titleCounter % 5 === 2) return 'IT\'S ALL IN YOUR HEAD ( ͡° ͜ʖ ( ͡° ͜ʖ ( ͡° ͜ʖ ( ͡° ͜ʖ ͡°) ͜ʖ ͡°)ʖ ͡°)ʖ ͡°)'
        else if (this.titleCounter % 5 === 3) return '☐☐☐☐☐☐☐☐☐☐☐☐☐☐☐☐☐☐☐☐'
        else return '~~ａｅｓｔｈｅｔｉｃ ｄｒｅａｍ~~'
      }
    },
    methods: {
      toggleDrawer: function () {
        this.drawer = true
        bus.$emit('toggledDrawer', this.drawer)
      },
      togglePlayer: function () {
        this.player = !this.player
        bus.$emit('toggledPlayer', this.player)
      }
    },
    watch: {
      volumeBar: function (newVol, oldVol) {
        bus.$emit('volumeChange', (newVol / 100))
      }
    }
  }
</script>

