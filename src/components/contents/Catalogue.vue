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
            <div id="linkButton"><a
            :href="catalogue[currentSong].url" 
            target="_blank">
              >>> Visit {{catalogue[currentSong].artist}} on Bandcamp
            </a></div> 
          </div>
        </div>
      </div>
      <div id="instruction">
        <p>
          Click on a song to play, click on it again to pause or use the 
          bottom panel music player to interact with the playlist.
        </p>
      </div>
      <div class="cataParent">
        <div 
        class="cataChild" 
        :class="{
          cataChildActive : (catalogue.indexOf(song) == currentSong)
        }" 
        v-for="(song, x) in catalogue" 
        :key="x"
        @click="
          if (catalogue.indexOf(song) == currentSong && playing) {
            playingToggle(false)
          } else if (catalogue.indexOf(song) == currentSong && !playing) {
            playingToggle(true)
          } else {
            songChange(catalogue.indexOf(song))
            playingToggle(true)
          } 
        "
        v-show="song.song.toLowerCase().match(search.toLowerCase()) || 
          song.album.toLowerCase().match(search.toLowerCase()) || 
          song.artist.toLowerCase().match(search.toLowerCase())">
          <img 
          :src="pathToAudio + song.logo" 
          class="cataImage"
          />
          <p class="cataHeader">{{song.song}}</p>
          <p>{{song.artist}}</p>
          <p>{{song.album}}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import musicBank from '../../../static/js/musicBank'
  import { bus } from '../../main'

  export default {
    created () {
      bus.$on('globalCurrentSong', (data) => {
        this.currentSong = data
      })
      bus.$on('togglePlayingButton', (data) => {
        this.playing = data
      })
      bus.$emit('getCurrentSong')
    },
    data () {
      return {
        pathToAudio: 'static/catalog/',
        catalogue: musicBank,
        currentSong: null,
        playing: false,
        search: ''
      }
    },
    methods: {
      songChange (songIndex) {
        bus.$emit('cataSongChange', songIndex)
      },
      playingToggle (bool) {
        bus.$emit('togglePlayingCata', bool)
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
    margin-bottom: 100px;
  }

  .cataChild {
    height: 320px;
    width: 182px;
    margin: 5px;
    text-align: center;
    border: 1px solid rgb(167, 175, 148);
    cursor: pointer;
    box-shadow: 3px 3px black;
  }

  .cataChildActive {
    height: 320px;
    width: 182px;
    margin: 5px;
    text-align: center;
    background: rgb(167, 175, 148);
    border: 1px solid rgb(167, 175, 148);
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

  @media (max-width: 600px) {
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

    .cataChildActive {
      width: 40%;
    }

    .cataImage {
      width: 100%;
      height: auto;
    }
  }

  @media (min-width: 600px) and (max-width: 1200px) {

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