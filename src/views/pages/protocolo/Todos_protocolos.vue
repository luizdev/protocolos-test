<template>
  <div>
    <div class="row justify-content-between mb-3">   
      <div class="col-6">
        <h1 class="h3 mb-0">Protocolos</h1> 
      </div>
      <div class="col-6 text-right">
        <router-link to="/protocolos/crear-protocolos" tag="button" class="btn btn-primary">Crear Protocolo</router-link> 

      </div>    
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="cnt-list-group">
              <ul class="list-group">
                <li class="list-group-item">
                  <div class="list-group-item-head d-flex justify-content-between">
                    <div class="headd">
                      <a href="#" class="">Protocolo active</a>
                    </div>
                    <div class="actions">
                      <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2 align-middle"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg></a>
                      <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash align-middle"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></a>
                    </div>
                  </div>                  
                </li>
                <li class="list-group-item d-flex justify-content-between">
                  <div class="list-group-item-head ">
                    <a href="#" class="">Protocolo active</a>                    
                  </div> 
                  <div class="actions">
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2 align-middle"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg></a>
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash align-middle"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></a>
                  </div>                 
                </li>
                <!--<li class="list-group-item">
                  <div class="list-group-item-head d-flex justify-content-between">
                    <a href="#" class="">Pestaña 2</a>
                    <span class="">Protocolo 1 </span>
                  </div>
                  <div class="actions">
                    <a href="#"  class="card-link small">Editar</a>
                    <a href="#"  class="card-link small">Eliminar</a>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="list-group-item-head d-flex justify-content-between">
                    <a href="#" class="">Pestaña 3</a>
                    <span class="">Protocolo 2 </span>
                  </div>
                  <div class="actions">
                    <a href="#"  class="card-link small">Editar</a>
                    <a href="#"  class="card-link small">Eliminar</a>
                  </div>
                </li>-->
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
  name: 'todos_protocolos',
  components: {
  }
}
</script>
