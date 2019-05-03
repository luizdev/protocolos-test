<template>
  <div>
    <h1 class="h3 mb-3">Evaluacion</h1>

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h5 class="card-title mb-0">Empty card</h5>
          </div>
          <div class="card-body">
            
            <form>
              <div class="">
                <ul class="nav nav-tabs" role="tablist">
                  <li class="nav-item">
                      <a class="nav-link active" data-toggle="tab" href="#attributes" role="tab">Tab 1</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#profile" role="tab">Tab 2</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#experience" role="tab">Tab 3</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#schools" role="tab">Tab 4</a>
                  </li>
                </ul>
                <div class="tab-content">
                  <div class="tab-pane  in active" id="attributes" name="attributes" role="tabpanel">
                    <table class="table small">
                      <thead>
                        <tr>
                          <th scope="col">Aspecto</th>
                          <th scope="col">Opcion</th>
                          <th scope="col">Seleccionar</th>
                          <th scope="col">Anexo</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Edad</th>
                          <td>
                            <p>&lt;= 30 años</p>
                            <p>&gt; 30 años y &lt;= 50 años</p>
                            <p>&lt;= 50 años</p>
                          </td>
                          <td>
                            <label class="form-check-label" for="gridCheck"><input class="form-check-input" type="radio" id="gridCheck"></label>
                            <label class="form-check-label" for="gridCheck"><input class="form-check-input" type="radio" id="gridCheck"></label>
                            <label class="form-check-label" for="gridCheck"><input class="form-check-input" type="radio" id="gridCheck"></label>

                          </td>
                          <td>dsfdsffsdsd</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>
                            
                          </td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="button-actions d-flex justify-content-end">
                  <button class="btn btn-secondary" >Guardar Avance</button>
                  <router-link to="/informes" tag="button" class="btn btn-primary">Continuar</router-link>
                </div>
              </div>
            </form>

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
  name: 'evaluacion',
  components: {
    Header
  }
}
</script>

