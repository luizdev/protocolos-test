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
        <li class="sidebar-item active">
          <a href="#dashboards" data-toggle="collapse" class="sidebar-link collapsed">
            <i class="align-middle" data-feather="sliders"></i>
            <span class="align-middle">Dashboard</span>
          </a>
          <ul id="dashboards" class="sidebar-dropdown list-unstyled collapse show">
            <li class="sidebar-item">
              <a class="sidebar-link" href="dashboard-default.html">Default</a>
            </li>
            <li class="sidebar-item">
              <a class="sidebar-link" href="dashboard-analytics.html">Analytics</a>
            </li>
            <li class="sidebar-item">
              <a class="sidebar-link" href="dashboard-e-commerce.html">E-commerce</a>
            </li>
            <li class="sidebar-item">
              <a class="sidebar-link" href="dashboard-social.html">Social</a>
            </li>
            <li class="sidebar-item">
              <a class="sidebar-link" href="dashboard-crypto.html">
                Crypto
                <span class="sidebar-badge badge badge-primary">New</span>
              </a>
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
