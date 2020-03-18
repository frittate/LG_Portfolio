<template>
  <div>
    <div id="wrapper" class="wrapper md:pb-0 flex flex-col relative min-h-screen overflow-hidden">

      <HeaderPartial/>
        <ClientOnly>
        </ClientOnly>
        <div id="visigrid" class="grid grid-cols-4 px-8 grid-rows-auto gap-0 lg:px-0 lg:grid-cols-14 lg:gap-1 fixed -z-10 top-0 left-0 h-screen w-full">
          <div v-for="(el, i) in grid" class="row-start-1 border-lu-grey first:border-l even:border-l even:border-r lg:border-l lg:border-r" :class="makeCols(i)"></div>
        </div>
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

export default {
  components: {
    HeaderPartial,
    FooterPartial
  },
  computed: {
    grid(){
      return new Array(14);
    },
  },
  methods: {
    makeCols(i){
      if (i < 4){
        return `block lg:col-start-${i+1} lg:col-end-${i+2}`
      }
      return `hidden lg:block lg:col-start-${i+1} lg:col-end-${i+2}`
    }
  }
}
</script>

<style>
.prevent-scroll {
  overflow: hidden;
}
/* @font-face {
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
} */
</style>