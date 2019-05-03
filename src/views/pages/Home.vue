<template>
  <div>
    <h1 class="h3 mb-3">Buscar Pacientes</h1>

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h5 class="card-title mb-0">Empty card</h5>
          </div>
          <div class="card-body">
            
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
