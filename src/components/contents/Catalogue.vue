<template>
  <div>
    <section id="paragraph">
      <p>
        <input 
        type="text" 
        id="searchBar" 
        placeholder="Search.exe..."
        v-model="search">
      </p>
      <div id="nowPlaying">
        <div id="nowPlayingArtSect">
          <img style="height: 300px" :src="pathToAudio + catalogue[currentSong].logo">
        </div>
        <div id="nowPlayingInfoSect">
          <div id="infoSectContent">
            <p style="font-style: italic">now playing</p>
            <p><strong>{{catalogue[currentSong].song}}</strong></p>
            <p><strong>Artist:</strong> {{catalogue[currentSong].artist}}</p>
            <p><strong>Album:</strong> {{catalogue[currentSong].album}}</p>
            <div id="linkButton">
              <a
              :href="catalogue[currentSong].url" 
              target="_blank">
                >>> Visit {{catalogue[currentSong].artist}} on Bandcamp
              </a>
            </div> 
          </div>
        </div>
      </div>
      <div id="instruction">
        <p>
          Click on a song to play, click on it again to pause or use the 
          bottom panel music player to interact with the playlist.
        </p>
        <p>
          View per page:
          <button 
          @click="carouselViewButton = true"
          class="viewButton" 
          :class="{'viewButton active' : carouselViewButton}">{{viewPerPage}}</button>
          <button 
          @click="carouselViewButton = false"
          class="viewButton" 
          :class="{'viewButton active' : !carouselViewButton}">All</button>
        </p>
      </div>

      <div class="cataParent">
        <div 
        class="cataChild" 
        :class="{
          cataChildHighlight : highlightBool(song)
        }" 
        v-for="(song, x) in processedCatalogue" 
        :key="x"
        @click="playSong(song)"
        @mouseover="currentSongHover = song; mouseOver = true;" 
        @mouseleave="currentSongHover = -1; mouseOver = false;"
        v-show="searchBool(song)">
          <img 
          :src="pathToAudio + song.logo" 
          class="cataImage"
          />
          <p class="cataHeader">{{song.song}}</p>
          <p>{{song.artist}}</p>
          <p>{{song.album}}</p>
        </div>
      </div>

      <div id="carouselPagesButtonField">
        <button 
        v-for="i in pageNum" :key="i"
        class="carouselPageButton"
        :class="{'carouselPageButton active' : i === currentPage}" 
        @click="currentPage = i"
        v-show="carouselView">
          {{i}}
        </button>
      </div>

    </section>
  </div>
</template>

<script>
  import musicBank from '../../../static/js/musicBank'
  import { mapState } from 'vuex'

  export default {
    data () {
      return {
        pathToAudio:          'static/catalog/',
        catalogue:            musicBank,
        currentSongHover:     -1,
        mouseOver:            false,
        carouselViewButton:   true,
       /* If you want to change the number of songs viewed per page, simply change the
        * viewPerPage variable. Everything else in the component are programmed to change
        * along with it.
        * For example, if you want to display less songs per page on a mobile viewport,
        * simply do: if (window.innerWidth < 600) { this.viewPerPage = 10 } on a created()
        * lifecycle hook.
        */
        viewPerPage:          20,
        search:               '',
        currentPage:          1
      }
    },
    computed: {
      ...mapState(['currentSong', 'playing']),
      carouselView () {
        return this.search.length === 0 && this.carouselViewButton === true
      },
      pageNum () {
        return Math.ceil(this.catalogue.length / this.viewPerPage)
      },
     /* Returns the displaying array depends on what the current display mode is.
      * If not in carousel mode (display all songs in one page), this computed property
      * simply returns the full catalogue array.
      * If in carousel mode (divide songs into chunks of 18 per page) it will then return
      * a sliced array that only contains songs from the current page, thus dynamically
      * display both viewing mode in just one neat v-for loop.
      */
      processedCatalogue () {
        return this.carouselView ? this.catalogue.slice(
          (this.currentPage - 1) * this.viewPerPage, this.currentPage * this.viewPerPage
        ) : this.catalogue
      }
    },
    methods: {
      songChange (songIndex) {
        this.$store.commit('songChange', songIndex)
      },
      playingToggle (bool) {
        this.$store.commit('togglePlaying', bool)
      },
     /* Event handler for a click event on a song block.
      * If a song is clicked when it's not played, the music player will jump into
      * that song.
      * Else, if a song is playing and then get clicked, it will toggle the global playing
      * state to a temporary pause, and then can be pressed again to toggle into playing.
      * Parameter: song object instance from the v-for loop
      */
      playSong (song) {
        if (this.catalogue.indexOf(song) === this.currentSong && this.playing) {
          this.playingToggle(false)
        } else if (this.catalogue.indexOf(song) === this.currentSong && !this.playing) {
          this.playingToggle(true)
        } else {
          this.songChange(this.catalogue.indexOf(song))
          this.playingToggle(true)
        }
      },
     /* Straightforward search boolean for the search bar.
      * Parameter: song object instance from the v-for loop
      */
      searchBool (song) {
        return (
          song.song.toLowerCase().match(this.search.toLowerCase()) 
          ||
          song.album.toLowerCase().match(this.search.toLowerCase()) 
          ||
          song.artist.toLowerCase().match(this.search.toLowerCase())
        )
      },
     /* Returns a boolean on whether a block should be highlighted or not
      * Three cases can happen:
      * - The first two boolean sets implements that either when carousel view is off 
      * or on, the current playing song will highlight if its position matches the 
      * global current song from the state.
      * - In the third boolean set, mouseover returns true when any block of song is hovered 
      * on but only the song that matches the position of the cursor will highlight.
      * Parameter: song object instance from the v-for loop
      */
      highlightBool (song) {
        return (
          (!this.carouselView && this.processedCatalogue.indexOf(song) === this.currentSong)
          || 
          (this.carouselView 
          && 
          this.processedCatalogue.indexOf(song) === this.currentSong % this.viewPerPage
          &&
          this.catalogue[this.currentSong].song === song.song) 
          || 
          (this.mouseOver && song === this.currentSongHover)
        )
      }
    }
  }
</script>


<style scoped>
  #searchBar {
    margin: auto;
    margin-top: 20px;
    font-family: 'Inconsolata';
    background: white;
    color: black;
    font-size: 30px;
    display: block;
    width: 60%;
    padding: 8px;
    align-self: center;
  }

  #nowPlaying {
    width: 60%;
    height: 300px;
    background: rgb(34, 75, 122);
    margin: 0 auto;
    display: flex;
    box-shadow: 3px 3px rgb(75, 68, 68);
  }

  #nowPlayingArtSect {
    width: 42%; 
    height: 300px;
  }

  #nowPlayingInfoSect {
    font-family: 'Inconsolata';
    font-size: 1.5em;
    width: 58%;
    height: 300px;
    display: flex;
    align-items: center;
  }

  #infoSectContent a {
    text-decoration: none; 
    color: #a5dae7; 
    font-weight: bold;
    font-style: italic;
  }

  #instruction {
    margin: 0 auto;
    width: 50%;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  #searchBar::placeholder {
    font-style: italic;
  }

  .cataParent {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .cataChild {
    height: 320px;
    width: 182px;
    margin: 5px;
    text-align: center;
    border: 1px solid rgb(114, 179, 184);
    cursor: pointer;
    box-shadow: 3px 3px black;
  }

  .cataChildHighlight {
    height: 320px;
    width: 182px;
    margin: 5px;
    text-align: center;
    background: rgb(114, 179, 184);
    border: 1px solid rgb(114, 179, 184);
  }

  .cataImage {
    height: 180px;
    width: auto;
  }

  .cataHeader {
    font-weight: bold;
    font-size: 1.2em;
  }

  #linkButton {
    width: 105%; 
    background: black; 
    box-shadow: 2px 2px grey;
  }

  .viewButton {
    background: grey;
    display: inline-block;
    padding: 5px 10px;
    font-size: 15px;
    cursor: pointer;
    text-align: right;
    text-decoration: none;
    outline: none;
    color: #fff;
    border: none;
    border-radius: 15px;
    box-shadow: 0 5px #999;
    margin: 5px 5px 10px 10px;
  }

  .viewButton.active {
    background: rgb(114, 179, 184);
  }

  #carouselPagesButtonField {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 90px;
  }

  .carouselPageButton {
    background: grey;
    display: inline-block;
    padding: 5px 10px;
    font-size: 15px;
    cursor: pointer;
    text-align: right;
    text-decoration: none;
    outline: none;
    color: #fff;
    border: none;
    border-radius: 15px;
    box-shadow: 0 5px #999;
    margin: 5px 5px 10px 10px;
  }

  .carouselPageButton.active {
    background: rgb(114, 179, 184);
  }

  @media (max-width: 450px) {
    #searchBar {
      width: 90%;
    }
    
    #instruction {
      width: 90%;
    }

    #nowPlaying {
      padding-top: 30px;
    }

    #nowPlayingArtSect {
      display: none;
    }

    #nowPlayingInfoSect {
      width: 100%;
      font-size: 1.25em;
      text-align: center;
      display: block;
      align-items: center;
    }

    .cataParent {
      width: 100%;
    }

    .cataChild {
      width: 40%;
    }

    .cataChildHighlight {
      width: 40%;
    }

    .cataImage {
      width: 100%;
      height: auto;
    }
  }

  @media (min-width: 450px) and (max-width: 1200px) {

    #nowPlaying {
      padding-top: 40px;
    }

    #nowPlayingArtSect {
      display: none;
    }

    #nowPlayingInfoSect {
      width: 100%;
      font-size: 1.45em;
      text-align: center;
      display: block;
    }
  }
</style>