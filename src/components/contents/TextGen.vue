<template>
  <div style="padding-bottom: 50px">
    
    <section id="head">
      <p style="text-align: center; margin-top: 20px;">
        <img src="static/gifs/lacroix.gif" style="height: 8vw; width: auto;"/>
        <span 
          style="text-align: center; font-size: 8vw; font-family: 'Inconsolata';">
          _Text Vaporizer™
        </span>
        <img src="static/gifs/lacroix.gif" style="height: 8vw; width: auto;"/>
      </p>
    </section>
    
    <v-container grid-list-xl>
      <v-layout v-bind="layoutBinding">
        <v-flex>
          <textarea v-model="input" placeholder="Normal text goes here..." rows="10">
          </textarea>
        </v-flex>
        <v-flex>
          <textarea disabled v-model="output" placeholder="Meme text appears here..." rows="10">
          </textarea>
        </v-flex>
      </v-layout>
    </v-container>
    
    <section id="text" :style="cardStyle">
      <v-card>
        <v-card-text>
          <p>
            Vaporwave is mostly about the aesthetics. If you're surfing around
            Youtube and come across something like this:
          </p>
          <p style="text-align: center;">
            <img :style="imageStyle" src="static/images/hero.jpg"/>
          </p>
          <p>
            That's what kids those days called "a e s t h e t i c".
          </p>
          <p>
            Although it might look like they are adding spaces in between each
            letters, that's actually not the case. They are using a special set
            of unicode characters called "full-width" characters. Keep in mind
            that these characters are not from a different font. They exist in
            every computer system by default, just that
            you don't have them on your keyboard. To acquire these special 
            characters, one must increment the ASCII code of a letter by 65248
            to get the same letter but with a funky full-width look to it.
          </p>
          <p>
            The coding behind this conversion is very simple.
          </p>
          <v-card id="codeField" color="black">
            <v-card-text>
              <p><strong>function</strong> memeConverter(input)  {</p>
              <p>&nbsp;&nbsp;<strong>let</strong> output = ''</p>
              <p>&nbsp;&nbsp;<strong>for</strong> (let i = 0; i &lt; input.length; i++) {</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>if</strong> (input.charCodeAt(i) &gt;= 33 && input.charCodeAt(i) &lt;= 270) {</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                output += String.fromCharCode(input.charCodeAt(i) + 65248)</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;} <strong>else if</strong> (input.charCodeAt(i) === 32) {</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                output += String.fromCharCode(input.charCodeAt(i))</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;}</p> 
              <p>&nbsp;&nbsp;}</p>
              <p>&nbsp;&nbsp;<strong>return</strong> output</p> 
              <p>}</p> 
            </v-card-text>
          </v-card>
        </v-card-text>
      </v-card>
      <p style="text-align: center;">
        <img src="static/gifs/sega.gif" style="height: 20vw; width: auto;"/>
      </p>
      
    </section>
  
  </div>
</template>

<script>
  export default {
    computed: {
      layoutBinding () {
        const binding = {}
        if (this.$vuetify.breakpoint.xs) binding.column = true
        return binding
      },
      imageStyle () {
        if (this.$vuetify.breakpoint.xs) return 'width: 100%; height: auto;'
        else return 'width: 75%; height: auto;'
      },
      cardStyle () {
        if (this.$vuetify.breakpoint.xs) return 'margin: 0px 25px 20px 25px;'
        else return 'margin: 0 auto; margin-bottom: 20px; width: 50%;'
      },
      output () {
        let output = ''
        for (let i = 0; i < this.input.length; i++) {
          if (this.input.charCodeAt(i) >= 33 && this.input.charCodeAt(i) <= 270) {
            output += String.fromCharCode(this.input.charCodeAt(i) + 65248)
          } else if (this.input.charCodeAt(i) === 32) {
            output += String.fromCharCode(this.input.charCodeAt(i))
          }
        }
        return output
      }
    },
    data () {
      return {
        input: ''
      }
    }
  }
</script>

<style scoped>  
  textarea {
    padding: 10px;
    resize: none;
    width: 100%;
    font-size: 20px;
    background-color: antiquewhite;
    color: rgb(15, 10, 10);
  }

  #text {
    font-family: 'Helvetica';
    font-size: 18px;
  }

  #codeField p {
    margin: 0px;
    font-family: 'Menlo';
    font-size: 14px;
    color: rgb(74, 211, 74);
  }
</style>