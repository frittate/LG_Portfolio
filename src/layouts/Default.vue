<template>
  <div>
    <div id="wrapper" class="wrapper md:pb-0 flex flex-col relative min-h-screen overflow-hidden">

     <!--  <HeaderPartial/> -->
        <ClientOnly>
       <!--  <ResponsiveNav/> -->
        </ClientOnly>

        <main id="main" class="main max-w-hd pt-16 lg:pt-0 md:ml-auto md:mr-auto flex flex-1 flex-col px-0">
          <slot/>
        </main>

      <FooterPartial/>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import HeaderPartial from '~/layouts/partials/Header.vue'
import FooterPartial from '~/layouts/partials/Footer.vue'
import ResponsiveNav from '~/layouts/partials/ResponsiveNav.vue'

export default {
  components: {
    HeaderPartial,
    FooterPartial,
    ResponsiveNav
  }
}
</script>

<style>
@font-face {
	font-family: 'Bluu';
	src: url('../assets/fonts/BluuNext-Titling.otf');
	font-weight: 500;
}

@font-face {
	font-family: 'Bluu';
	src: url('../assets/fonts/BluuNext-Bold.otf');
	font-weight: 700;
}

@font-face {
	font-family: 'Median';
	src: url('../assets/fonts/MedianGrotesk-Regular.otf');
	font-weight: 500;
}
</style>