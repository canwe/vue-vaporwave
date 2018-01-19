<template>
  <section id="paragraph">
         
      <div id="artistViewPhone" v-show="artistViewing">
        <div id="viewPhoneName">
          {{artists[currentArtist].name}}
        </div>
        <div id="viewPhoneContent">
          <img 
          style="width: 100%; height: auto;" 
          :src="'static/artists/' + artists[currentArtist].featImage"/>
          <div style="padding-left: 10px; padding-right: 10px;">
            <p>{{artists[currentArtist].description}}</p>
          </div>
          <div id="viewPhoneFeature">
            <div class="featAlbumPhone"
            v-for="(album, x) in artists[currentArtist].features"
            :key="x">
              <div class="albumArtPhone">
                <img 
                style="width: 125px; height: auto;" 
                :src="'static/catalog/' + album.logo">
              </div>
              <div class="albumNamePhone">
                <div>{{album.album}}</div>
              </div>
            </div>
          </div>
          <div class="visitBandcampButtonPhone">
            <a 
            style="text-decoration: none; color: white;"
            :href="artists[currentArtist].bandcamp" 
            target="_blank">
              >>>Visit {{artists[currentArtist].name}}'s Bandcamp here
            </a>
          </div>
          <button @click="artistViewing = false" class="artistViewBackButtonPhone">
            Back to Artists
          </button>
        </div>
      </div>
    
    <div id="artistView" v-show="artistViewing">

      <div id="artistViewMain">
        <div id="viewMainColumn1">
          <button @click="artistViewing = false" class="artistViewBackButton">
          Back to Artists
          </button>
        </div>
        <div id="viewMainColumn2">
          <div>
            <h1>{{artists[currentArtist].name}}</h1>
            <p v-if="artists[currentArtist].alias.length > 0">
              Aka.
              <span v-for="(alias, x) in artists[currentArtist].alias" :key="x">
                <span v-if="x == artists[currentArtist].alias.length - 1">
                  {{alias}}
                </span>
                <span v-else>
                  {{alias}}, 
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div id="artistViewContent">
        <div id="viewContentArt">
          <img style="height: 100%; width: auto" :src="'static/artists/' + artists[currentArtist].sideImage">
        </div>
        <div id="viewContentInfo">
          <div>
            <p>{{artists[currentArtist].description}}</p>
            <p>{{artists[currentArtist].name}}'s featured works:</p>
          </div>
          <div id="featuredAlbums">
            <div class="featAlbum"
            v-for="(album, x) in artists[currentArtist].features"
            :key="x">
              <a :href="album.link" target="_blank">
                <div class="albumArt">
                  <img 
                  style="width: 150px; height: auto;" 
                  :src="'static/catalog/' + album.logo">
                </div>
                <div class="albumName">
                  <div>{{album.album}}</div>
                </div>
              </a>
            </div>
          </div>
          <div 
          style="margin-top: 30px; background: black; width: 70%; box-shadow: 2px 2px grey;">
            <a :href="artists[currentArtist].bandcamp" target="_blank">
              >>>Visit {{artists[currentArtist].name}}'s Bandcamp here
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <div v-show="!artistViewing" id="artistShowcase">
      <div 
      
      class="showcaseItems" 
      v-for="(artist, x) in artists" 
      :key="x"
      @click="artistViewing = true; currentArtist = artists.indexOf(artist)">
        <div class="itemArt">
          <img 
          style="width: 350px; height: 150px" 
          :src="'static/artists/' + artist.featImage"/>
        </div>
        <div class="itemInfo">
          {{artist.name}}
        </div>
      </div>
    </div>
    
  </section>
</template>

<script>
  import artistBank from '../../../static/js/artistBank'
  export default {
    data () {
      return {
        artists: artistBank,
        artistViewing: false,
        currentArtist: 0
      }
    }
  }
</script>

<style>
  #artistShowcase {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 100px;
  }

  .showcaseItems {
    width: 350px;
    height: 300px;
    background: rgb(98, 98, 163);
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;
  }

  .itemArt {
    height: 150px;
    width: 100%;
    background: rgb(196, 196, 121);
  }

  .itemInfo {
    width: 100%;
    height: 150px;
    font-family: 'Inconsolata';
    font-weight: bold;
    font-size: 2.5em;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #artistView {
    width: 90%;
    height: 600px;
    margin: 30px auto;
    background: rgb(196, 196, 121);
    box-shadow: 2px 2px black;
    margin-bottom: 80px;
  }

  #artistViewMain {
    width: 100%;
    height: 20%;
    background: rgb(98, 98, 163);
    display: flex;
  }

  #viewMainColumn1 {
    width: 270px;
    padding: 10px;
    height: 100%;
    display: flex;
    align-items: center;
  }

  #viewMainColumn2 {
    padding-top: 10px;
    padding-left: 10px;
    height: 100%;
    font-size: 1.5em;  
    display: flex;
    align-items: center;
  }
  #artistViewContent {
    height: 80%;
    width: 100%;
    display: flex;
    align-items: center;
  }

  #viewContentArt {
    width: 280px;
    height: 100%;
  }

  #viewContentInfo {
    font-size: 1.25em;
    padding: 20px;
    height: 100%;
  }

  #viewContentInfo a {
    text-decoration: none; 
    color: #ffffff;
    font-style: italic;
  }

  .artistViewBackButton {
    height: 50px;
    width: 250px;
    background: black;
    font-size: 1.3em;
    font-style: italic;
    margin-bottom: 10px;
    box-shadow: 2px 2px grey;
  }

  #featuredAlbums {
    height: 200px;
    display: flex;
  }

  .featAlbum {
    height: 215px;
    width: 150px;
    background: rgb(98, 98, 163);
    margin-right: 25px;
    box-shadow: 3px 3px grey;
  }

  .albumArt {
    height: 150px;
    width: 150px;
  }

  .albumName {
    font-family: 'Inconsolata';
    height: 65px;
    width: 150px;
    display: flex;
    font-weight: bold;
    align-items: center;
  }

  #artistViewPhone {
    display: none;
  }

  @media (max-width: 600px) {
    #artistView {
      display: none;
    }

    #artistViewPhone {
      display: block;
      width: 90%;
      height: 1000px;
      margin: 0 auto;
      margin-top: 20px;
      margin-bottom: 80px;
      background: rgb(196, 196, 121);
    }

    #viewPhoneName {
      height: 100px;
      background: rgb(98, 98, 163);
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 2em;
      font-weight: bold;
    }

    #viewPhoneFeature {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      flex-wrap: wrap;
    }

    .featAlbumPhone {
      height: 175px;
      width: 125px;
      background: rgb(98, 98, 163);
      margin-right: 10px;
      margin-bottom: 10px;
      box-shadow: 3px 3px grey;
    }

    .albumArtPhone {
      height: 125px;
      width: 125px;
    }
    
    .albumNamePhone {
      font-family: 'Inconsolata';
      width: 125px;
      font-weight: bold;
    }

    .artistViewBackButtonPhone {
      height: 50px;
      width: 70%;
      background: black;
      font-style: italic;
      margin-top: 10px;
      margin-bottom: 10px;
      box-shadow: 2px 2px grey;
    }

    .visitBandcampButtonPhone {
      height: 50px;
      width: 70%;
      background: black;
      font-style: italic;
      margin-top: 10px;
      margin-bottom: 10px;
      box-shadow: 2px 2px grey;
    }
  }
</style>