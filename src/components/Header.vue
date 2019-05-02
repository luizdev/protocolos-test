<template>
  <header>
    <div class="brand">
      <img alt="Vue logo" src="http://asociacionafp.pe/wp-content/themes/asociacion/assets/logo.svg" width="250">
    </div>
    <div class="heading">
      <!--<h1>COMAFP</h1>-->
      <h3>Modulo de Protocolos Medicos</h3>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<style lang="scss">
  header{
    display: flex;
    width: 100%;
    padding: 1em 0;
    margin: 0 0 2em;
    .brand{
      width: 16%;
      margin: 0 2em 0 0;
      img{
        width: 100%;
        max-width: 175px;
      }
    }
    .heading{
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    h1{
      font-size: 2em;
      font-weight: 700;
    }
    h3{
      margin: 0;
    }    
    
  }
  

  @media (max-width: 767px) {
    header{
      display: block !important;
      .brand{
        width: 100%;
        margin: 0 auto 1em;
        text-align: center;
        img{
          max-width: 200px;

        }
      }
      .heading{
        display: block;
        text-align: center;
        h3{
          font-size: 1.25em;
        }
      }
    }
  }
</style>