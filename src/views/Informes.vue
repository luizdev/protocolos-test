<template>
  <div class="col-md-12 informes">
    <Header />
    <div class="box box-layout">
      <h3>Informe Medico</h3>
      <form>
        <div class="form-group">
          <label for="">Registro detallado de la Medicacion utilizada</label>
          <textarea class="form-control"></textarea>
        </div>
        <div class="form-group">
          <label for="">Dosis por Medicacione</label>
          <textarea class="form-control"></textarea>
        </div>
        <div class="form-group">
          <label for="">Comentarios</label>
          <textarea class="form-control"></textarea>
        </div>
        <div class="form-group">
          <div class="button-actions d-flex justify-content-end">
            <button class="btn btn-secondary" >Guardar Avance</button>
            <router-link to="/generacion-pago" tag="button" class="btn btn-primary">Continuar</router-link>
            <!--<router-link to="/home" tag="button" class="btn btn-primary btn-block">Log in</router-link>-->
          </div>
        </div>
      </form>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'informes',
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