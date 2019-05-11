<template>
  <div>
    <h1 class="h3 mb-3">Evaluacion</h1>

    <div class="row">
      <div class="col-12">
        <div class="card">          
          <div class="card-body">
            
            <form>
              <div class="form-group">
                <ul class="nav nav-tabs" role="tablist">
                  <li class="nav-item">
                      <a class="nav-link active" data-toggle="tab" href="#personal" role="tab">Personal</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#clinico" role="tab">Clinico y Terapeutico</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#clinico2" role="tab">Clinico y Terapeutico 2</a>
                  </li>
                  <!--<li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#laboral" role="tab">Laboral</a>
                  </li>-->
                  <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#social" role="tab">Social</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#consolidado" role="tab">Consolidado</a>
                  </li>
                </ul>
                <div class="tab-content">
                  <div class="tab-pane  in active" id="personal" name="personal" role="tabpanel">
                    <table class="table table-bordered">
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
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="edad" type="radio" id="edad1"></label>
                            </p>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="edad" type="radio" id="edad2"></label>
                            </p>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="edad" type="radio" id="edad3"></label>
                            </p>
                          </td>
                          <td></td>
                        </tr>
                        <tr>
                          <th scope="row">Sexo</th>
                          <td>
                            <p>Hombre</p>
                            <p>Mujer</p>
                          </td>
                          <td>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="sexo" type="radio" id="sexo1"></label>
                            </p>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="sexo" type="radio" id="sexo2"></label>
                            </p>
                          </td>
                          <td></td>
                        </tr>
                        <tr>
                          <th scope="row">Nivel de Formacion</th>
                          <td>
                            <p>Primarios / Elementarios</p>
                            <p>Estudios secundarios</p>
                            <p>Estudios superiores</p>
                          </td>
                          <td>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="nformacion" type="radio" id="nformacion1"></label>
                            </p>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="nformacion" type="radio" id="nformacion2"></label>
                            </p>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="nformacion" type="radio" id="nformacion3"></label>
                            </p>
                          </td>
                          <td></td>
                        </tr> 
                        <tr>
                          <th scope="row">Situacion Economica</th>
                          <td>
                            <p>Mala (Sin empleo)</p>
                            <p>Media (Con subsidio)</p>
                            <p>Buena (Con empleo)</p>
                          </td>
                          <td>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="seconomica" type="radio" id="seconomica1"></label>
                            </p>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="seconomica" type="radio" id="seconomica2"></label>
                            </p>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="seconomica" type="radio" id="seconomica3"></label>
                            </p>
                          </td>
                          <td></td>
                        </tr> 
                      </tbody>
                    </table>
                  </div>
                  <div class="tab-pane" id="clinico" name="clinico" role="tabpanel">
                    <table class="table table-bordered">
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
                          <th scope="row">Dolor intensidad</th>
                          <td>
                            <p>Minima</p>
                            <p>Leve</p>
                            <p>Moderada</p>
                            <p>Marcada</p>
                          </td>
                          <td>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="dintensidad" type="radio" id="dintensidad1"></label>
                            </p>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="dintensidad" type="radio" id="dintensidad2"></label>
                            </p>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="dintensidad" type="radio" id="dintensidad3"></label>
                            </p>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="dintensidad" type="radio" id="dintensidad4"></label>
                            </p>
                          </td>
                          <td></td>
                        </tr>       
                        <tr>
                          <th scope="row">Dolor frecuencia</th>
                          <td>
                            <p>Intermitente</p>
                            <p>Esporadica</p>
                            <p>Frecuente</p>
                            <p>Constante</p>
                          </td>
                          <td>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="dfrecuencia" type="radio" id="dfrecuencia1"></label>
                            </p>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="dfrecuencia" type="radio" id="dfrecuencia2"></label>
                            </p>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="dfrecuencia" type="radio" id="dfrecuencia3"></label>
                            </p>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="dfrecuencia" type="radio" id="dfrecuencia4"></label>
                            </p>
                          </td>
                          <td></td>
                        </tr> 
                      </tbody>
                    </table>
                  </div>
                  <div class="tab-pane" id="clinico2" name="clinico2" role="tabpanel">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Aspecto</th>
                          <th scope="col">Opcion</th>
                          <th scope="col">0% - 10%</th>
                          <th scope="col">11% - 40%</th>
                          <th scope="col">41% - 70%</th>
                          <th scope="col">71% - 100%</th>
                          <th scope="col">Anexo</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Cervical</th>
                          <td>
                            <p>Flexion 65°</p>
                            <p>Extencion 65°</p>
                            <p>Laterilizacion 65°</p>
                            <p>Rotacion 75°</p>
                          </td>
                          <td>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="cervical10" type="radio" id="cervical10_1"></label>
                            </p>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="cervical10" type="radio" id="cervical10_2"></label>
                            </p>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="cervical10" type="radio" id="cervical10_3"></label>
                            </p>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="cervical10" type="radio" id="cervical10_4"></label>
                            </p>
                          </td>
                          <td>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="cervical40" type="radio" id="cervical40_1"></label>
                            </p>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="cervical40" type="radio" id="cervical40_2"></label>
                            </p>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="cervical40" type="radio" id="cervical40_3"></label>
                            </p>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="cervical40" type="radio" id="cervical40_4"></label>
                            </p>
                          </td>
                          <td>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="cervical70" type="radio" id="cervical70_1"></label>
                            </p>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="cervical70" type="radio" id="cervical70_2"></label>
                            </p>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="cervical70" type="radio" id="cervical70_3"></label>
                            </p>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="cervical70" type="radio" id="cervical70_4"></label>
                            </p>
                          </td>
                          <td>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="cervical100" type="radio" id="cervical100_1"></label>
                            </p>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="cervical100" type="radio" id="cervical100_2"></label>
                            </p>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="cervical100" type="radio" id="cervical100_3"></label>
                            </p>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="cervical100" type="radio" id="cervical100_4"></label>
                            </p>
                          </td>
                          <td></td>
                        </tr>       
                        <tr>
                          <th scope="row">Dolor frecuencia</th>
                          <td>
                            <p>Intermitente</p>
                            <p>Esporadica</p>
                            <p>Frecuente</p>
                            <p>Constante</p>
                          </td>
                          <td>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="dfrecuencia10" type="radio" id="dfrecuencia10_1"></label>
                            </p>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="dfrecuencia10" type="radio" id="dfrecuencia10_2"></label>
                            </p>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="dfrecuencia10" type="radio" id="dfrecuencia10_3"></label>
                            </p>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="dfrecuencia10" type="radio" id="dfrecuencia10_4"></label>
                            </p>
                          </td>
                          <td>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="dfrecuencia40" type="radio" id="dfrecuencia40_1"></label>
                            </p>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="dfrecuencia40" type="radio" id="dfrecuencia40_2"></label>
                            </p>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="dfrecuencia40" type="radio" id="dfrecuencia40_3"></label>
                            </p>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="dfrecuencia40" type="radio" id="dfrecuencia40_4"></label>
                            </p>
                          </td>
                          <td>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="dfrecuencia70" type="radio" id="dfrecuencia70_1"></label>
                            </p>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="dfrecuencia70" type="radio" id="dfrecuencia70_2"></label>
                            </p>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="dfrecuencia70" type="radio" id="dfrecuencia70_3"></label>
                            </p>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="dfrecuencia70" type="radio" id="dfrecuencia70_4"></label>
                            </p>
                          </td>
                          <td>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="dfrecuencia100" type="radio" id="dfrecuencia100_1"></label>
                            </p>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="dfrecuencia100" type="radio" id="dfrecuencia100_2"></label>
                            </p>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="dfrecuencia100" type="radio" id="dfrecuencia100_3"></label>
                            </p>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="dfrecuencia100" type="radio" id="dfrecuencia100_4"></label>
                            </p>
                          </td>
                          <td></td>
                        </tr> 
                      </tbody>
                    </table>
                  </div>
                  <div class="tab-pane" id="social" name="social" role="tabpanel">
                    <table class="table table-bordered">
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
                          <th scope="row">Puntuacion HAQ</th>
                          <td>
                            <p>No limitacion / Incapacidad</p>
                            <p>Leve limitacion / Incapacidad</p>
                            <p>Moderada limitacion / Incapacidad</p>
                            <p>Severa limitacion / Incapacidad</p>
                          </td>
                          <td>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="puntuacionhaq" type="radio" id="puntuacionhaq1"></label>
                            </p>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="puntuacionhaq" type="radio" id="puntuacionhaq2"></label>
                            </p>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="puntuacionhaq" type="radio" id="puntuacionhaq3"></label>
                            </p>
                            <p>
                              <label class="form-check-label"><input class="form-check-input" name="puntuacionhaq" type="radio" id="puntuacionhaq3"></label>
                            </p>
                          </td>
                          <td>
                            <a href="#" data-toggle="modal" data-target="#sizedModalMd">Cuestionario discapacidad HAQ</a>
                            <div class="modal fade" id="sizedModalMd" tabindex="-1" role="dialog" aria-hidden="true">
                              <div class="modal-dialog modal-lg" role="document">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5 class="modal-title">Cuestionario discapacidad HAQ</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">&times;</span>
                                    </button>
                                  </div>
                                  <div class="modal-body m-3">
                                    <table class="table table-bordered">
                                      <thead>
                                        <tr>
                                          <th scope="col">Durante la última semana, ¿ha sido usted capaz de...</th>
                                          <th scope="col">Sin dificultad</th>
                                          <th scope="col">Con alguna dificultad</th>
                                          <th scope="col">Con mucha dificultad</th>
                                          <th scope="col">Incapaz de hacerlo</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>1) Vestirse solo, incluyendo abrocharse los botones y atarse los cordones de los zapatos?</td>
                                          <td>
                                            <p>
                                              <label class="form-check-label"><input class="form-check-input" name="cpreg1" type="radio" id="cpreg1_1"></label>
                                            </p>
                                          </td>
                                          <td>
                                            <p>
                                              <label class="form-check-label"><input class="form-check-input" name="cpreg1" type="radio" id="cpreg1_2"></label>
                                            </p>
                                          </td>
                                          <td>
                                            <p>
                                              <label class="form-check-label"><input class="form-check-input" name="cpreg1" type="radio" id="cpreg1_3"></label>
                                            </p>
                                          </td>
                                          <td>
                                            <p>
                                              <label class="form-check-label"><input class="form-check-input" name="cpreg1" type="radio" id="cpreg1_4"></label>
                                            </p>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>2) Enjabonarse la cabeza?</td>
                                          <td>
                                            <p>
                                              <label class="form-check-label"><input class="form-check-input" name="cpreg2" type="radio" id="cpreg2_1"></label>
                                            </p>
                                          </td>
                                          <td>
                                            <p>
                                              <label class="form-check-label"><input class="form-check-input" name="cpreg2" type="radio" id="cpreg2_2"></label>
                                            </p>
                                          </td>
                                          <td>
                                            <p>
                                              <label class="form-check-label"><input class="form-check-input" name="cpreg2" type="radio" id="cpreg2_3"></label>
                                            </p>
                                          </td>
                                          <td>
                                            <p>
                                              <label class="form-check-label"><input class="form-check-input" name="cpreg2" type="radio" id="cpreg2_4"></label>
                                            </p>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>3) Levantarse de una silla sin brazos?</td>
                                          <td>
                                            <p>
                                              <label class="form-check-label"><input class="form-check-input" name="cpreg3" type="radio" id="cpreg3_1"></label>
                                            </p>
                                          </td>
                                          <td>
                                            <p>
                                              <label class="form-check-label"><input class="form-check-input" name="cpreg3" type="radio" id="cpreg3_2"></label>
                                            </p>
                                          </td>
                                          <td>
                                            <p>
                                              <label class="form-check-label"><input class="form-check-input" name="cpreg3" type="radio" id="cpreg3_3"></label>
                                            </p>
                                          </td>
                                          <td>
                                            <p>
                                              <label class="form-check-label"><input class="form-check-input" name="cpreg3" type="radio" id="cpreg3_4"></label>
                                            </p>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>4) Acostarse y levantarse de la cama?</td>
                                          <td>
                                            <p>
                                              <label class="form-check-label"><input class="form-check-input" name="cpreg4" type="radio" id="cpreg4_1"></label>
                                            </p>
                                          </td>
                                          <td>
                                            <p>
                                              <label class="form-check-label"><input class="form-check-input" name="cpreg4" type="radio" id="cpreg4_2"></label>
                                            </p>
                                          </td>
                                          <td>
                                            <p>
                                              <label class="form-check-label"><input class="form-check-input" name="cpreg4" type="radio" id="cpreg4_3"></label>
                                            </p>
                                          </td>
                                          <td>
                                            <p>
                                              <label class="form-check-label"><input class="form-check-input" name="cpreg4" type="radio" id="cpreg4_4"></label>
                                            </p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>

                                    
                                  </div>
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-terciary" data-dismiss="modal">Cerrar</button>
                                    <button type="button" class="btn btn-primary">Guardar</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>                  
                      </tbody>
                    </table>
                  </div>
                  <div class="tab-pane" id="consolidado" name="consolidado" role="tabpanel">
                    <table class="table table-bordered">
                      <thead class="thead-dark">
                        <tr>
                          <th scope="col" width="50%">Personal</th>
                          <th scope="col" width="50%">Detalles</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Edad</td>
                          <td>&lt;= 30 años</td>
                        </tr>                  
                        <tr>
                          <td>Sexo</td>
                          <td>Hombre</td>
                        </tr>                  
                        <tr>
                          <td>Nivel de Formacion</td>
                          <td>Primarios / Elementarios</td>
                        </tr>                  
                        <tr>
                          <td>Situacion Economica</td>
                          <td>Mala (Sin empleo)</td>
                        </tr>                  
                      </tbody>
                    </table>
                    <table class="table table-bordered">
                      <thead class="thead-dark">
                        <tr>
                          <th scope="col" width="50%">Clinico</th>
                          <th scope="col" width="50%">Detalles</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Edad</td>
                          <td>&lt;= 30 años</td>
                        </tr>                  
                        <tr>
                          <td>Sexo</td>
                          <td>Hombre</td>
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

export default {
  name: 'evaluacion',
  components: {
  }
}
</script>

<style lang="scss">
  .form-check-label{
    display: block;
    .form-check-input{
      position: relative;
      margin-left: 0;
    }
  }
</style>