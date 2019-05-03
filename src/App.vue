<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style lang="scss">
//@import "./assets/styles/styles.scss";
body{
  background: #fbfbfb;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #384751;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.wrapper {  
  &.login{
    height: 100vh;
  }
}

.box{
  margin-bottom: 15px;
  background: #fff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  padding: 30px;
  h3{
    margin-bottom: 1em;
  }
}

.box-layout-height{
  height: calc(100vh - 180px);
}

.form-small{
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
}

.button-actions{
  button{
    margin-left: 1em;
  }
}

.pull-left{
  float: left;
}



</style>
