<template>
  <div>
    <button @click="playMusic">Play music</button>
  </div>
</template>

<script>
  export default {
    methods: {
      playMusic () {
        let music = new Audio('/static/catalog/420.mp3')
        music.play()
      }
    }
  }
</script>

<style scoped>
  button {
    height: 100px;
    width: 100px;
    background: blue;
  }
</style>