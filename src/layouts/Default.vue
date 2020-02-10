<template>
  <div>
    <a class="visually-hidden" href="#main">Skip to content</a>

    <div id="wrapper" class="wrapper md:pb-0 flex flex-col relative min-h-screen">

      <HeaderPartial/>
      
      <ClientOnly>
      <ResponsiveNav/>
      </ClientOnly>

      <main id="main" class="main inner flex flex-1 flex-col px-0 lg:px-20">
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
</style>