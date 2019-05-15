<template>
  <div>
    <div class="heading">
      <h1 class="h3 mb-3">Añadir Pestañas</h1>
    </div>
    <div class="row">
      <div class="col-12 col-md-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-12 col-md-12">
                <form>
                  <div class="form-group">
										<label class="form-label">Protocolo</label>					
                    <select class="form-control" id="cboProtocolo">
                      <option>protocolo 1</option>
                      <option>protocolo 2</option>
                      <option>protocolo 3</option>
                      <option>protocolo 4</option>
                      <option>protocolo 5</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label class="form-label">Nombre Pestaña</label>	
                    <input type="text" class="form-control" id="staticEmail" value="">                   
                  </div>                 
                  <div class="form-group">
                    <label class="form-label">Añadir Colunma </label>	
                    <div class="input-group">
                      <input type="text" class="form-control">
                      <span class="input-group-append">
                        <button class="btn btn-secondary" type="button">añadir</button>
                      </span>
                    </div>              
                  </div> 
                  <div class="form-group">
                    <h5>Columnas</h5>
                    <ul class="list-group min">
                      <li class="list-group-item d-flex justify-content-between">
                        <div class="list-group-item-head ">
                          <a href="#" class="">Columna</a>              
                        </div> 
                        <div class="actions">
                          <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash align-middle"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></a>
                        </div>                 
                      </li>
                    </ul>       
                  </div>                 

                  <div class="form-group">        
                    <a href="#" class="btn btn-primary" >Añadir Pestaña</a>                     
                  </div>
                  
                </form>
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
  name: 'crear_pestana',
  components: {
  }
}
</script>
