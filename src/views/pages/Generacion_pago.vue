<template>
  <div>
    <h1 class="h3 mb-3">Generacion de Pagos</h1>

    <div class="row">
      <div class="col-12">
        <div class="card">          
          <div class="card-body">            
            <form>
              <div class="form-row">
                <div class="form-group col-md-4">
                  <label>Tipo de Doc. Pago</label>
                  <select class="form-control">
                    <option>Recibo por Honorario</option>
                  </select>
                </div>
                <div class="form-group col-md-4 d-flex align-items-end">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck">
                    <label class="form-check-label" for="gridCheck">
                      Exoneracion
                    </label>
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-4">
                  <label>Ruc del Emisor</label>
                  <input type="text" class="form-control" required="required">
                </div>
                <div class="form-group col-md-4">
                  <label>Nro de Doc.</label>
                  <input type="text" class="form-control" required="required">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-4">
                  <label>Ruc del Receptor</label>
                  <input type="text" class="form-control" required="required">
                </div>
                <div class="form-group col-md-4">
                  <label>Fecha de emision.</label>
                  <input type="text" class="form-control" required="required">
                </div>
                <div class="form-group col-md-4">
                  <label>Estado de Doc.</label>
                  <select class="form-control">
                    <option selected>Anulado</option>
                    <option>Activo</option>
                    <option>Inactivo</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="">Concepto</label>
                <textarea class="form-control"></textarea>
              </div>
              <div class="form-row">
                <div class="form-group col-md-3">
                  <label>Monto S/.</label>
                  <input type="text" class="form-control" required="required">
                </div>
                <div class="form-group col-md-3">
                  <label>Adicional S/.</label>
                  <input type="text" class="form-control" required="required">
                </div>
                <div class="form-group col-md-3">
                  <label>Total S/.</label>
                  <input type="text" class="form-control" required="required">
                </div>
                <div class="form-group col-md-3">
                  <label>Impuesto ( 8% )</label>
                  <input type="text" class="form-control" required="required">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-4">
                  <label for="">Monto recibido</label>
                  <input type="text" class="form-control" required="required">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-4">
                  <label for="exampleFormControlFile1">Adjuntar</label>
                  <input type="file" class="form-control-file" id="exampleFormControlFile1">
                </div>
              </div>
              <div class="form-group">
                <div class="button-actions d-flex justify-content-end">
                  <button class="btn btn-primary" >Generar Pago</button>
                  <!--<router-link to="/home" tag="button" class="btn btn-primary btn-block">Log in</router-link>-->
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
  name: 'generacionpago',
  components: { }
}
</script>

<style lang="scss">
  header{
    display: flex;
    width: 100%;
  }
</style>