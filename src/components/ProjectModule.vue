<template>
  <section class="px-8 lg:px-0 lg:grid lg:grid-cols-14 lg:gap-1 lg:grid-rows-auto pt-180">
    <div class="lg:col-start-2 lg:col-end-7 ">
      <h2>
        <a id="projects"></a>
        <span class="red">Projects</span>
      </h2>
      <p class="mb-8">I’m using Whatsapp. I’m in love with design, but what I love even more is concepts that give back to the people. I’m very aware of the connection between design and manipulation. Hi, my name is Luisa. I’m in love with design, but what I love even more is concepts that give back to the people.</p>
      <table class="min-w-full">
        <thead></thead>
        <tbody>
          <tr v-for="entry in projects" :key="entry.id" class="border-solid border-t-2 border-b-2 border-lu-blue">
            <td>
              <g-link 
              :to="entry.node.path" 
              class="flex items-center text-xl h-16 pl-5 text-black"
              @mouseover.native="projectHover(entry.node.image)"
              @mouseleave.native="projectReset()">{{entry.node.title}}</g-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="hidden lg:block lg:col-start-8 lg:col-end-14 self-center overflow-hidden">
      <g-image :src="projectImage.src" :width="projectImage.width"></g-image>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    projects: Array
  },
  data(){
    return {
      projectImage: {
        src: '',
        width: null
      }
    }
  },
  methods: {
    projectHover(e){
      this.projectImage.src =  e.src;
      this.projectImage.size.width =  e.width;
    },
    projectReset(){
      this.projectImage.src = "";
    },
  }
}
</script>

<style>

</style>