<template>
  <div class="footer-wrapper">
    <footer id="footer" class="footer bg-gray-200" role="contentinfo">
      <!-- <div class="footer-inner container m-auto md:flex justify-between items-center px-6 py-10">
        <p>Wimbelwambel</p>
      </div> -->
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    socialIcon(element) {
      return `/icons.svg#icon-${element.icon}`
    }
  }
}
</script>

<static-query>
query {
  metadata {
    social {
      icon
      link
    }
  }
}
</static-query>