<template>
  <nav class="sidebar">
    <div class="sidebar-content">
      <a class="sidebar-brand" href="index.html">
        <!--<i class="align-middle" data-feather="box"></i>
        <span class="align-middle">AppStack</span>-->
        <img alt="Vue logo" src="http://asociacionafp.pe/wp-content/themes/asociacion/assets/logo.svg" width="120">
      </a>

      <ul class="sidebar-nav">
        <li class="sidebar-header">Main</li>

        <li class="sidebar-item">
          <router-link to="/dashboard" tag="link" class="sidebar-link">Nueva Evaluacion</router-link>       
        </li>

        <!--<li class="sidebar-item">
          <router-link to="/crear-protocolo" tag="link" class="sidebar-link">Crear Protocolo</router-link>
          <a class="sidebar-link" href="documentation.html">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-book-open align-middle"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg> 
            <span class="align-middle">Crear Protocolos</span>
          </a>
        </li>-->
        <li class="sidebar-item active">
          <a href="#protocolos" data-toggle="collapse" class="sidebar-link collapsed">
            <i class="align-middle" data-feather="sliders"></i>
            <span class="align-middle">Protocolos</span>
          </a>
          <ul id="protocolos" class="sidebar-dropdown list-unstyled collapse show">
            <li class="sidebar-item">
              <router-link to="/protocolos/todos" tag="link" class="sidebar-link">Todos los protocolos</router-link>   
              <!--<a class="sidebar-link" href="">Todos los protocolos</a>-->
            </li>
            <li class="sidebar-item">
              <router-link to="/protocolos/crear-protocolo" tag="link" class="sidebar-link">Añadir Protocolo</router-link> 
            </li>
            <li class="sidebar-item">
              <a class="sidebar-link" href="">Añadir Pestañas y columnas</a>
            </li>
            <li class="sidebar-item">
              <a class="sidebar-link" href="">Añadir Aspecto</a>
            </li>
          </ul>
        </li>
      </ul>

      <div class="sidebar-bottom d-none d-lg-block">
        <div class="media">
          <!--<img
            class="rounded-circle mr-3"
            src="img/avatars/avatar.jpg"
            alt="Chris Wood"
            width="40"
            height="40"
          >-->
          <div class="media-body">
            <h5 class="mb-1">Chris Wood</h5>
            <div>
              <i class="fas fa-circle text-success"></i> Online
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    msg: String
  }
};
</script>
