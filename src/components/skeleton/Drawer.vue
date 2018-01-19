<template>
  <div>
    <v-navigation-drawer 
    temporary v-model="drawer" 
    class="blue lighten-3"
    overflow absolute>
      <v-list>

        <v-list-tile 
        v-for="(tile, x) in tilesList" 
        v-bind:key="x"
        router :to="tile.link">
          
            <v-list-tile-action>
              <v-icon>{{tile.icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{tile.title}}</v-list-tile-title>
            </v-list-tile-content>
          
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
  import { bus } from '../../main'
  
  export default {
    created () {
      bus.$on('toggledDrawer', (data) => {
        this.drawer = data
      })
    },
    data () {
      return {
        drawer: false,
        tilesList: [
          {icon: 'library_music', title: 'Catalogue', link: '/catalogue'},
          {icon: 'people', title: 'Vaporwave Artists', link: '/artists'},
          {icon: 'translate', title: 'Vaporize Your Text', link: '/textgen'},
          {icon: 'info_outline', title: 'About Vaporwave', link: '/about'},
          {icon: 'contacts', title: 'Register', link: '/register'},
          {icon: 'account_circle', title: 'Sign In', link: '/signin'}
        ]
      }
    }
  }
</script>

<style>
  #drawer a {
    text-decoration: none;
  }
</style>
