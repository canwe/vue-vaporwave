<template>
  <div>
    <section id="paragraph">
      <div id="validator">
        <p id="header">
          <img class="lacroix" src="../../../static/gifs/lacroix.gif"/>
          SIGN IN
          <img class="lacroix" src="../../../static/gifs/lacroix.gif"/>
        </p>
        <div id="field">
          <p>Username</p><input v-model="username" type="text"/>
          <p>Password</p><input v-model="password" type="password"/>
        </div>
        <p style="margin-top: 50px;"><button>Sign In</button></p>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        username: '',
        password: ''
      }
    }
  }
</script>

<style>
  #validator {
    width: 80%;
    padding: 50px;
    color: rgb(235, 240, 215);
    background: rgb(145, 201, 196);
    text-align: center;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 100px;
    box-shadow: 5px 5px black;
  }

  #validator input[type="text"], input[type="password"] {
    margin: auto;
    text-align: center;
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

  #validator button {
    height: 100px;
    width: 200px;
    font-size: 2em;
    color: white;
    background: rgb(37, 54, 80);
    box-shadow: 1px 1px grey;
  }

  #field p {
    font-style: italic;
    font-size: 2em;
    margin-top: 20px;
  }

  #header {
    font-weight: bold;
    font-size: 4em;
  }

  .lacroix {
    width: 30px;
    height: auto;
  }

  @media (max-width: 600px) {
    .lacroix {
      display: none;
    }

    #validator {
      padding: 20px;
    }

    #header {
      font-size: 1.5em;
    }

    #validator input[type="text"], input[type="password"] {
      width: 90%;
    }

    .field {
      font-size: 1.5em;
    }
  }
  
</style>