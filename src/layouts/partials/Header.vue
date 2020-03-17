<template>
  <div>
    <header
      id="header"
      class="fixed bottom-0 left-0 p-10 hidden lg:block"
      role="banner">
      <nav id="nav" class="nav lg:flex transform -translate-y-4 -rotate-90 origin-top-left">
        <ul class="menu flex flex-col lg:flex-row items-center list-reset text-base">
          <li
            class="level-1 mb-4 md:mr-4 md:mb-0"
            v-for="element in $static.metadata.menu"
            :key="element.name"
          >
            <g-link
              :to="element.link"
              class="link text-black hover:underline"
              active-class="is-active-link"
              exact-active-class="active text-grey-700"
            >{{ element.name }}</g-link>
          </li>
        </ul>
      </nav>
      <nav id="nav-social" class="nav hidden md:flex">
        <ul class="menu flex flex-col md:flex-row items-center list-reset text-base">
          <li class="level-1 mb-4 md:mr-4 md:mb-0"   
          v-for="element in $static.metadata.social"
          :key="element.name">
             <g-link
              :to="element.link"
              class="link text-black hover:underline"
              active-class="is-active-link"
              exact-active-class="active text-grey-700"
            >{{ element.name }}</g-link>
          </li>
        </ul>
      </nav>
    </header>
    <ResponsiveNav/>
  </div>
</template>

<script>
import ResponsiveNav from './ResponsiveNav';
export default {
  components: {
    ResponsiveNav
  },
  methods: {
    socialIcon(element) {
      return `/icons.svg#icon-${element.icon}`;
    }
  }
};
</script>

<static-query>
query {
  metadata {
    siteName
    menu {
      name
      link
    }
    social {
      name
      link
    }
  }
}
</static-query>
