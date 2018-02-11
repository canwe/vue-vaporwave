<template>
  <div>
    <img src="/static/images/vapeisdead.jpg" style="width: 100%; height: auto;" />
    <main style="padding: 50px;">
      
      <section id="paragraph">

        <p style="font-weight: bold; font-size: 150%;">
          About Vaporwave
        </p>

        <p>
          Vaporwave is a genre of music that began to explode around the start 
          of 2010s. The signature sound of vaporwave was made by taking sections of 
          80's music, slowing them down, then (most of the time) add a lot of effects like  
          delay or reverb, and sometimes chop the song up into little pieces and then mix 
          them up together like shuffling a deck of card.
        </p>

        <div id="videoShowcase">
          <p @click="pauseSong">
            <iframe
            src="https://www.youtube.com/embed/PdpP0mXOlWM" 
            frameborder="0" allow="encrypted-media" allowfullscreen />
            
            <iframe
            src="https://www.youtube.com/embed/wyt_87yCyNw" 
            frameborder="0" allow="encrypted-media" allowfullscreen />
          </p>
        </div>

        <p>
          The catch of Vaporwave comes in two parts, the "a e s t h e t i c" and the music 
          itself, which are two sides of somewhat the same coin. Both of these components 
          relies on a very simple strategy: to invoke nostalgia upon the listener. Many people 
          find Vaporwave the odd child of music: unoriginal, cringeworthy and apparently just 
          bits and pieces of stolen music being put together, but for some reason are oddly 
          attracted to it. The magic of Vaporwave is that it takes the listeners back to an era 
          where they could relive part of their long lost memory. Nostalgia is not what they 
          were looking for - Vaporwave forces it on them whether they like it or not.
        </p>
        
        <img class="bigImg" src="/static/gifs/room.gif">

        <p>
          
        </p>

      </section>

    </main>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: mapState(['playing']),
    methods: {
      pauseSong () {
        if (this.playing) this.$store.commit('togglePlaying', false)
      }
    }
  }
</script>

<style>
  #videoShowcase {
    text-align: center;
  }

  iframe {
    width: 400px;
    height: 300px;
  }

  .bigImg {
    display: block;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 500px;
  }

  @media (max-width: 600px) {
    
    .bigImg {
      margin-top: 10px;
      margin-bottom: 10px;
      width: 100%;
    }

    iframe {
      width: 100%;
      height: 50%;
    }
  }
</style>



