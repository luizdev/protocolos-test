<template>
  <div class="col-md-12 home">
    <Header />
    <div class="box box-layout box-layout-height">
      <div class="form form-small">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Nro de expediente" required="required">
        </div>
        <div class="form-group">
          <select class="form-control">
            <option>protocolo 1</option>
          </select>
        </div>
        <div class="form-group">          
          <router-link to="/evaluacion" tag="button" class="btn btn-primary btn-block">Buscar</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'home',
  components: {
    Header
  }
}
</script>

<style lang="scss">
  header{
    display: flex;
    width: 100%;
  }
</style>