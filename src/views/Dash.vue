<template>
  <div class="wrapper">
		<Sidebar></Sidebar>

		<div class="main">

			<Header></Header>

			<main class="content">
				<div class="container-fluid p-0">

          			<router-view></router-view>

					

				</div>
			</main>

			<Footer></Footer>
		</div>
	</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Dash',
  props: {
  
  },
	components:{
		Header,
		Sidebar,
		Footer
	}
}
</script>