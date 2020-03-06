<template>
  <div class="relative">
    <button
      id="mobile-nav-toggle"
      class="mobile-nav-toggle block h-12 flex items-center justify-end font-bold border-none bg-white text-black z-50 focus:outline-none md:hidden"
      :class="toggleNav ? 'menu-toggle-active': ''"
      aria-expanded="false"
      aria-controls="mobile-nav"
      @click="toggle"
    >
      <span class="mobile-nav-label mr-4 font-medium">{{toggleNav ? 'Back' : 'Menu'}}</span>
    </button>

    <nav
      id="mobile-nav"
      class="mobile-nav fixed bg-white text-black left-0 top-0 h-screen w-full overflow-hidden pt-12 z-20 md:hidden"
      :class="toggleNav ? 'menu-visible': ''"
    >
      <ul>
        <li
          class="level-1 mb-4 md:mr-4 md:mb-0"
          v-for="element in $static.metadata.menu"
          :key="element.name"
        >
          <g-link
            :to="element.link"
            class="link block py-2 px-5 text-black text-3xl hover:text-pink-500"
            active-class="is-active-link"
            exact-active-class="active text-pink-500"
          >{{ element.name }}</g-link>
        </li>
      </ul>
    </nav>


  </div>
</template>

<static-query>
query {
  metadata {
    menu {
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
      toggleNav: false
    }
  },
  methods: {
    toggle() {
      this.toggleNav = !this.toggleNav
    }
  }

}
</script>

<style scoped>
.mobile-nav-label {
  /* transform: translateY(80%); */
}
</style>