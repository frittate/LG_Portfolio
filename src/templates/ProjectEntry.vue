<template>
  <Layout>
    <section id="container-centre" class="lg:grid lg:grid-cols-14 lg:gap-1 lg:grid-rows-auto lg:pt-20">
      <div class="lg:col-start-1 lg:col-end-8 lg:row-start-1">
        <g-image :src="con.image" :alt="con.image_caption" width="952" />
      </div>
      <div class="px-8 lg:px-0 lg:col-start-9 lg:col-end-14 lg:row-start-1 lg:pt-8">
        <h1 class="page-title transform -translate-y-16 lg:translate-y-0 md:text-6rem lg:text-7rem">
          <span v-html="con.title"></span>
        </h1>
      </div>

       <div class="px-8 lg:px-0 lg:col-start-9 lg:col-end-13 lg:row-start-1 lg:pt-350 lg:self-end mb-10">
        <h3>Test</h3>
        <p>{{con.excerpt}}</p>
      </div>
    </section>
    <section id="page-content" class="px-8 lg:px-0 lg:grid lg:grid-cols-14 lg:gap-1 lg:grid-rows-auto pt-130" v-html="con.content">
    </section>
  </Layout>
</template>


<page-query>
  query($id: ID!) {
    projects(id: $id) {
      title
      path
      image(width:1200)
      image_caption
      excerpt
      content
      humanTime : created(format:"Do MMMM YYYY")
      datetime : created(format:"ddd MMM DD YYYY hh:mm:ss zZ")
    }
  }
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.projects.title
    };
  },
  computed: {
    con(){
      return this.$page.projects
    }
  },
  mounted(){
    console.log('...');
    
  }
};
</script>

<style lang="scss">
#page-content h2 {
  font-family: 'Bluu';
  font-weight: 700;
  background-position: 0 0.8em;
  background-repeat: repeat-x;
  background-size: 2px 14px;
  background-image: linear-gradient(to bottom, #0917AD 0%, #0917AD 100%);
}

</style>