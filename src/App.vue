<template>
  <v-app id="v-app" dark>
    <!-- Header | Static -->
    <app-toolbar></app-toolbar>
    <app-drawer></app-drawer>
    
    <!-- Main content | Dynamic Router -->
    <router-view style="margin-top: 45px;"></router-view>
    
    <!-- Footer | Static -->
    <app-footer></app-footer>
    <music-nav></music-nav>

  </v-app>
</template>

<script>
  import ToolBar from './components/skeleton/ToolBar.vue'
  import Drawer from './components/skeleton/Drawer.vue'
  import Footer from './components/skeleton/Footer.vue'
  import MusicNav from './components/skeleton/MusicNav.vue'
  
  export default {
    components: {
      'app-toolbar': ToolBar,
      'app-drawer': Drawer,
      'app-footer': Footer,
      'music-nav': MusicNav
    }
  }
</script>

<style lang="scss" scoped>
  @import "./assets/app.scss";
  #v-app {
    font-family: 'Fira Mono', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>