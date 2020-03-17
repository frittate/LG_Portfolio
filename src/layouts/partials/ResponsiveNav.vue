<template>
  <div class="relative lg:hidden">
    <button
      id="mobile-nav-toggle"
      class="mobile-nav-toggle block w-full h-12 flex items-center justify-end font-bold border-none text-black z-50 transform translate-y-10 focus:outline-none absolute"
      :class="toggleNav ? 'menu-toggle-active': ''"
      aria-expanded="false"
      aria-controls="mobile-nav"
      @click="toggle"
    >
      <span class="mobile-nav-label ml-auto mr-4 font-medium">{{toggleNav ? 'Back' : 'Menu'}}</span>
    </button>

    <nav
      id="mobile-nav"
      class="mobile-nav fixed bg-white text-black left-0 top-0 h-screen w-full overflow-hidden pt-20 pl-4 z-20 md:hidden absolute"
      :class="toggleNav ? 'menu-visible': ''">
      <p class="text text-black mb-6">Projekte</p>
      <ul class="pb-20">
        <li
          class="level-1 mb-4"
          v-for="entry in querystatic.projects.edges"
          :key="entry.id"
        >
          <g-link
            :to="entry.node.path"
            class="link block py-2 text-black text-xl hover:underline"
            active-class="is-active-link"
            exact-active-class="active text-pink-500"
          >{{ entry.node.title }}</g-link>
        </li>
      </ul>
      <ul class="flex">
        <li class="level-1 mb-4 mr-4"   
          v-for="element in $static.metadata.social"
          :key="element.name">
             <g-link
              :to="element.link"
              class="link text-black text-xl hover:underline"
              active-class="is-active-link"
              exact-active-class="active text-grey-700"
            >{{ element.name }}</g-link>
          </li>
      </ul>

    </nav>


  </div>
</template>

<static-query>
query {
  projects: allProjects {
    edges {
      node {
        title
        path
      }
    }
  }
  metadata {
    social {
      name
      link
    }
  }
}
</static-query>

<script>
let myBody = {
  classList : {}
};
export default {
  data() {
    return {
      toggleNav: false,
    }
  },
  computed: {
    querystatic(){
      if (this.$static != undefined) {
        return this.$static
      }
      return []
    }
  },
  methods: {
    toggle() {
      this.toggleNav = !this.toggleNav
      document.body.classList.toggle('prevent-scroll');
    }
  }

}
</script>

<style scoped>
.mobile-nav-label {
  /* transform: translateY(80%); */
}
</style>