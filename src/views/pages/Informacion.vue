<template>
  <div>

    <h1 class="h3 mb-3">Información del Evaluado</h1>

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <form>
              <div class="row">
                <div class="col-12 col-md-6">
                  <fieldset>
                    <legend>Datos de evaluacion</legend>
                    <div class="form-group row">
                      <label for="staticCussp" class="col-sm-2 col-form-label">CUSSP</label>
                      <div class="col-sm-10">
                        <input type="text" readonly class="form-control-plaintext" id="staticCussp" value="1234567">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="staticCussp" class="col-sm-2 col-form-label">AFP</label>
                      <div class="col-sm-10">
                        <input type="text" readonly class="form-control-plaintext" id="staticCussp" value="Prima">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="staticCussp" class="col-sm-2 col-form-label">Tipo Evaluado</label>
                      <div class="col-sm-10">
                        <input type="text" readonly class="form-control-plaintext" id="staticCussp" value="Titular">
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div class="col-12 col-md-6">

                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>


    <div class="box box-layout">
      <h3></h3>
     

    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'informacion',
  components: {
  }
}
</script>
