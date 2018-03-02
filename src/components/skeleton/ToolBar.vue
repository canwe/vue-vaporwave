<template>
  <div>
    <v-toolbar fixed dense class="pink accent-1">
      <v-toolbar-side-icon @click.stop="toggleDrawer" flat></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link class="hidden-xs-only" to="/" tag="span" style="cursor: pointer">
          <TextGlitch :text="title" fill="white" background="black"></TextGlitch>
        </router-link>
        <router-link class="hidden-sm-and-up" to="/" tag="span" style="cursor: pointer">
        Project Helios
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        
        <v-btn class="hidden-xs-only" flat router to="/catalogue">
          Song Library
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
        <v-btn class="hidden-sm-and-down" flat @click.stop="togglePlayer">
          {{showHide}}
        </v-btn>
        <v-btn class="hidden-sm-and-up" flat router to="/catalogue">
          <v-icon>queue_music</v-icon>
        </v-btn>
        <v-btn class="hidden-sm-and-down" flat @click.native.stop="aboutDialog = true">
          About
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-dialog v-model="aboutDialog" max-width="390">
      <v-card>
        <v-card-title class="headline" style="font-weight: bold">Author: Phi Nguyen</v-card-title>
        <v-card-media src="/static/nietzchehong.jpg" height="150px"></v-card-media>
        <v-card-text>
          <p>Disclaimer: I do not own any of the artistic content on the page.
          This website was created as a tribute to the Vaporwave movement
          and not for any commercial purpose whatsoever.</p>
          <p>Enjoy the ａｅｓｔｈｅｔｉｃ</p>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import { bus } from '../../main'
  import TextGlitch from 'vue-text-glitch'
  export default {
    components: { TextGlitch },
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
        volumeBar:      this.$store.state.volume * 100,
        aboutDialog:    false,
        drawer:         false,
        titleCounter:   0
      }
    },
    computed: {
      showHide () {
        return this.player ? 'Hide Player' : 'Show Player'
      },
     /* This gives the main title a cool rotating animation.
      * Take a look at the setInterval method on the mounted hook. In every 3 seconds,
      * the titleCounter variable will increment. This title computed property will watch
      * over titleCounter and changes itself based on what the counter is.
      */
      title () {
        switch (this.titleCounter % 5) {
          case 0: return 'v a p o r w a v e エステティック'
          case 1: return 'Project Helios'
          case 2: return 'IT\'S ALL IN YOUR HEAD ( ͡° ͜ʖ ( ͡° ͜ʖ ( ͡° ͜ʖ ͡°)ʖ ͡°)ʖ ͡°)'
          case 3: return '☐☐☐☐☐☐☐☐☐☐☐☐☐☐☐☐☐☐☐☐'
          default: return '~~ａｅｓｔｈｅｔｉｃ ｄｒｅａｍ~~'
        }
      },
      player () {
        return this.$store.state.player
      }
    },
    methods: {
      /* Toggle the drawer boolean, which is in another component (Drawer.vue) through
      a global event bus */
      toggleDrawer: function () {
        this.drawer = true
        bus.$emit('toggledDrawer', this.drawer)
      },
      togglePlayer: function () {
        this.$store.commit('togglePlayer')
      }
    },
    watch: {
      volumeBar: function (newVal, oldVal) {
        this.$store.commit('volumeChange', newVal / 100)
      }
    }
  }
</script>

