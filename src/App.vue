<template>
  <v-app style="
  font-family: 'Fira Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  " dark>
    <!-- Header | Static -->
    <app-toolbar></app-toolbar>
    <app-drawer></app-drawer>
    
    <!-- Main content | Dynamic Router -->
    <router-view></router-view>
    
    <!-- Footer | Static -->
    <app-footer></app-footer>

  </v-app>
</template>

<script>
  import ToolBar from './components/skeleton/ToolBar.vue'
  import Drawer from './components/skeleton/Drawer.vue'
  import Footer from './components/skeleton/Footer.vue'
  
  export default {
    components: {
      'app-toolbar': ToolBar,
      'app-drawer': Drawer,
      'app-footer': Footer
    },
    data () {
      return {
      }
    }
  }
</script>