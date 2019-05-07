<template>
  <div>
    <h1 class="h3 mb-3">Protocolos</h1>

    <div class="row">
      <div class="col-12">
        <div class="card">    
          <div class="card-header">
            <h5 class="card-title mb-0">Buscar Pacientes</h5>
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
      <div class="col-12">
        <div class="card-header">
          <h5 class="card-title mb-0">Evaluaciones Pendientes</h5>
        </div>
        <div class="card"> 
          <div class="card-body">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Nro. Expediente </th>
                  <th scope="col">Evaluado </th>
                  <th scope="col">F. Cita</th>
                  <th scope="col">H. Cita</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">02912-17</td>
                  <td>
                    <p>Morales khan evelyn guiliana</p>
                  </td>                  
                  <td>31/05/2019</td>
                  <td>17:00</td>
                </tr>
                <tr>
                  <td scope="row">02912-17</td>
                  <td>
                    <p>Morales khan evelyn guiliana</p>
                  </td>                  
                  <td>31/05/2019</td>
                  <td>17:00</td>
                </tr>
                <tr>
                  <td scope="row">02912-17</td>
                  <td>
                    <p>Morales khan evelyn guiliana</p>
                  </td>                  
                  <td>31/05/2019</td>
                  <td>17:00</td>
                </tr>
              </tbody>
            </table>
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
