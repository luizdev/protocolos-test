<template>
  <div>
    <div class="heading">
      <h1 class="h3 mb-3">Añadir Pestañas y columnas</h1>
    </div>
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-12 col-md-12">
                <form>
                  <div class="form-group row">
                    <div class="col-sm-8">
                      <div class="form-group">
                        <input type="text" class="form-control" id="staticEmail" value="">
                      </div>
                      <div class="form-group">
                        <select class="form-control" id="cboProtocolo">
                          <option>protocolo 1</option>
                          <option>protocolo 2</option>
                          <option>protocolo 3</option>
                          <option>protocolo 4</option>
                          <option>protocolo 5</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-12 col-md-4">
                      <a href="#" class="btn btn-primary" >Añadir Pestaña</a> 
                    </div>
                  </div>
                </form>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Todos las Pestañas</h5>
            <div class="list-group">
              <ul class="list-group">
                <li class="list-group-item">
                  <a href="#" class="">Pestaña 1</a>
                  <div class="actions">
                    <a href="#"  class="card-link small">Editar</a>
                    <a href="#"  class="card-link small">Eliminar</a>
                  </div>
                </li>
                <li class="list-group-item">
                  <a href="#" class="">Pestaña 2</a>
                  <div class="actions">
                    <a href="#"  class="card-link small">Editar</a>
                    <a href="#"  class="card-link small">Eliminar</a>
                  </div>
                </li>
                <li class="list-group-item">
                  <a href="#" class="">Pestaña 3</a>
                  <div class="actions">
                    <a href="#"  class="card-link small">Editar</a>
                    <a href="#"  class="card-link small">Eliminar</a>
                  </div>
                </li>
              </ul>
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
  name: 'crear_pestana',
  components: {
  }
}
</script>
