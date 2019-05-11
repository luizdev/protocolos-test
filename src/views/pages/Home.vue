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
            <form class="form">
              <div class="row">
                <div class="col-12 col-md-4">
                  <div class="form-group">
                    <select class="form-control">
                      <option>AFP 1</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <select class="form-control">
                      <option>Estado</option>
                    </select>
                  </div>
                </div>
                <div class="col-12 col-md-7 offset-md-1">
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label">CUSSP</label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" id="staticEmail" value="">
                    </div>
                  </div>   
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label">Nombres del evaluado</label>
                    <div class="col-sm-4">
                      <input type="text" class="form-control" id="staticEmail" value="">
                    </div>
                    <div class="col-sm-4">
                      <input type="text" class="form-control" id="staticEmail" value="">
                    </div>
                  </div>                
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label">Apellidos del evaluado</label>
                    <div class="col-sm-4">
                      <input type="text" class="form-control" id="staticEmail" value="">
                    </div>
                    <div class="col-sm-4">
                      <input type="text" class="form-control" id="staticEmail" value="">
                    </div>
                  </div>                
                </div>
              </div> 
              <div class="row form-group "> 
                <div class="col-12 d-flex justify-content-end">          
                  <button type="button" class="btn btn-primary">Buscar</button>
                </div>
              </div>            
            </form>
          </div>
          
        </div>
      </div>
      <div class="col-12">
        <div class="card-header">
          <h5 class="card-title mb-0">Evaluaciones Pendientes</h5>
        </div>
        <div class="card"> 
          <div class="card-body">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Check </th>
                    <th scope="col">Nro. Expediente </th>
                    <th scope="col">CUSSP</th>
                    <th scope="col">AFP</th>
                    <th scope="col">Especialidad</th>
                    <th scope="col">Evaluado</th>
                    <th scope="col">F. Cita</th>
                    <th scope="col">H. Cita</th>
                    <th scope="col">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a href="#" data-toggle="modal" data-target="#escogerProtocolo">Crear</a>
                    </td>
                    <td scope="row">02912-17</td>
                    <td>1234567</td>
                    <td>Prima</td>
                    <td>Traumatologia</td>
                    <td>
                      Morales khan evelyn guiliana
                    </td>                  
                    <td>31/05/2019</td>
                    <td>17:00</td>
                    <td>Pendiente</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#" data-toggle="modal" data-target="#escogerProtocolo">Crear</a>
                    </td>
                    <td scope="row">02912-17</td>
                    <td>1234567</td>
                    <td>Prima</td>
                    <td>Traumatologia</td>
                    <td>
                      Morales khan evelyn guiliana
                    </td>                  
                    <td>31/05/2019</td>
                    <td>17:00</td>
                    <td>Pendiente</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#" data-toggle="modal" data-target="#escogerProtocolo">Crear</a>
                    </td>
                    <td scope="row">02912-17</td>
                    <td>1234567</td>
                    <td>Prima</td>
                    <td>Traumatologia</td>
                    <td>
                      Morales khan evelyn guiliana
                    </td>                  
                    <td>31/05/2019</td>
                    <td>17:00</td>
                    <td>Pendiente</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="modal fade" id="escogerProtocolo" tabindex="-1" role="dialog" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Escoger Protocolo</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body m-3">
                    <form>
                      <div class="form-group">
                        <select class="form-control" id="exampleFormControlSelect1">
                          <option>protocolo 1</option>
                          <option>protocolo 2</option>
                          <option>protocolo 3</option>
                          <option>protocolo 4</option>
                          <option>protocolo 5</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-terciary" data-dismiss="modal">Cerrar</button>
                    <router-link to="/evaluacion"  data-dismiss="modal" tag="button" class="btn btn-primary">Crear Evaluacion</router-link>
                  </div>
                </div>
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

export default {
  name: 'home',
  components: {
  }
}
</script>
