<template>
  <Layout>
    <section id="container-centre" class="lg:grid lg:grid-cols-14 lg:grid-rows-auto lg:pt-20">
      <div class="lg:col-start-1 lg:col-end-8 lg:row-start-1">
        <g-image src="~/assets/img/lg_portrait_1.jpg" alt="Luisa Goellner Portrait" width="952" />
      </div>

      <div class="px-8 lg:px-0 lg:col-start-6 lg:col-end-11 lg:row-start-1 lg:pt-8">
        <h1 class="page-title transform -translate-y-16 lg:translate-y-0 md:text-6rem lg:text-7rem xl:text-9rem ">
          <span>Luisa</span> <br>
          <span> Goellner</span>
        </h1>
      </div>

      <div class="px-8 lg:px-0 lg:col-start-9 lg:col-end-12 lg:row-start-1 lg:pt-350 lg:self-end mb-10">
        <h3>Hey there!</h3>
        <p>I’m using Whatsapp. I’m in love with design, but what I love even more is concepts that give back to the people. I’m very aware of the connection between design and manipulation. Hi, my name is Luisa. I’m in love with design, but what I love even more is concepts that give back to the people.</p>
      </div>

      <div class="px-8 lg:px-0 lg:col-start-5 lg:col-end-12 lg:row-start-2 lg:my-20 lg:pt-180">
        <h3>Background</h3>
        <p>Hi, my name is Luisa. I’m in love with design, but what I love even more is concepts that give back to the people. I’m very aware of the connection between design and manipulation. Hi, my name is Luisa. I’m in love with design, but what I love even more is concepts that give back to the people. I’m very aware of the connection between design and manipulation. Hi, my name is Luisa. I’m in love with design, but what I love even more is concepts that give back to the people. I’m very aware of the connection between design and manipulation. Hi, my name is Luisa. I’m in love with design, but what I love even more is concepts that give back to the people. I’m very aware of the connection between design and manipulation. Hi, my name is Luisa. I’m in love with design, but what I love even more is concepts that give back to the people. I’m very aware of the connection between design and manipulation. Hi, my name is Luisa. I’m in love with design, but what I love even more is concepts that give back to the people.</p>
      </div>
    </section>

    <section class="px-8 lg:px-0 lg:grid lg:grid-cols-14 lg:grid-rows-auto pt-180">
      <div class="lg:col-start-2 lg:col-end-7">
      <h2>
        <span class="red">Projects</span>
      </h2>
      <p class="mb-8">I’m using Whatsapp. I’m in love with design, but what I love even more is concepts that give back to the people. I’m very aware of the connection between design and manipulation. Hi, my name is Luisa. I’m in love with design, but what I love even more is concepts that give back to the people.</p>
      <table class="min-w-full">
        <thead></thead>
        <tbody>
          <tr v-for="entry in projects" :key="entry.id" class="border-solid border-t-2 border-b-2 border-lu-blue">
            <td>
              <g-link :to="entry.node.path" class="text-xl align-middle h-16 table-cell pl-5 text-black hover:translate-x-4">{{entry.node.title}}</g-link>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </section>
    <section class="px-8 lg:px-0 lg:grid lg:grid-cols-14 lg:grid-rows-auto pt-180">
      <div class="lg:col-start-9 lg:col-end-15">
        <h3>Skills</h3>
        <p class="mb-8">I’m using Whatsapp. I’m in love with design, but what I love even more is concepts that give back to the people. I’m very aware of the connection between design and manipulation. Hi, my name is Luisa. I’m in love with design, but what I love even more is concepts that give back to the people.</p>
        <table class="min-w-full">
          <thead></thead>
          <tbody>
            <tr v-for="skill in skills" :key="skill.id" class="border-solid border-t-2 border-b-2 border-lu-blue">
              <td>
                <p class="text-xl align-middle h-16 table-cell pl-5 text-black">{{skill}}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section class="px-8 lg:px-0 lg:grid lg:grid-cols-14 lg:grid-rows-auto pt-180">
      <div class="lg:col-start-2 lg:col-end-8">
        <h2><span class="yellow">Thoughts</span></h2>
        <p class="mb-8">I’m using Whatsapp. I’m in love with design, but what I love even more is concepts that give back to the people. I’m very aware of the connection between design and manipulation. Hi, my name is Luisa. I’m in love with design, but what I love even more is concepts that give back to the people.</p>
      </div>
      <div class="lg:col-start-7 lg:col-end-13">
       <ul>
         <li v-for="entry in thoughts" :key="entry.id" class="mb-16">
           <h3>{{entry.node.title}}</h3>
           <p class="mb-6">{{entry.node.excerpt}}</p>
           <g-link :to="entry.node.path" class="text-xl read-on-link text-black">Read on</g-link>
         </li>
       </ul>
      </div>
    </section>
    <section class="lg:grid lg:grid-cols-14 lg:grid-rows-auto pt-180 mb-180">
      <div class="lg:col-start-1 lg:col-end-8 lg:row-start-1">
        <g-image src="~/assets/img/lg_portrait_2.jpg" alt="" />
      </div>
      <div class="px-8 lg:px-0 lg:col-start-6 lg:col-end-10 lg:row-start-1 lg:self-center">
        <h2 class="transform -translate-y-16 lg:translate-y-0 fake-h1 text-6rem md:text-7rem lg:text-9rem">
          <span>Let's</span> <br>
          <span>have</span><br>
          <span>a talk</span>
        </h2>
      </div>
      <div class="px-8 lg:px-0 lg:col-start-9 lg:col-end-14 lg:row-start-1 lg:pt-350">
        <h3>I’d love to get to know you!</h3>
        <p>I’m using Whatsapp. I’m in love with design, but what I love even more is concepts that give back to the people. I’m very aware of the connection between design and manipulation. Hi, my name is Luisa. I’m in love with design, but what I love even more is concepts that give back to the people.</p>
      </div>
    </section>
  </Layout>
</template>

<page-query>
  query {
     allProjects {
      edges {
        node {
          title
          path
          image(width:780)
          humanTime : created(format:"Do MMMM YYYY")
          datetime : created(format:"ddd MMM DD YYYY hh:mm:ss zZ")
        }
      }
    }

    allThoughts {
      edges {
        node {
          title
          path
          excerpt
          image(width:780)
          humanTime : created(format:"Do MMMM YYYY")
          datetime : created(format:"ddd MMM DD YYYY hh:mm:ss zZ")
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: "Home"
  },
  data(){
    return {
      skills: [
        'Web Design',
        'Strategic Thinking',
        'Concept Design',
        'Adobe Suite'
      ]
    }
  },
  computed:{
    thoughts(){
      if (this.$page.allThoughts.edges.length) {
        return this.$page.allThoughts.edges
      }
      return []
    },
    projects(){
       if (this.$page.allProjects.edges.length) {
        return this.$page.allProjects.edges
      }
      return []
    }
  }
};
</script>

<style lang="scss">
body {
  font-family: 'Median'
}

.page-title, h2.fake-h1 {
  @apply leading-none;
  font-family: 'Bluu';
  font-weight: 700;

  & > span {
    background-image: linear-gradient(to bottom, #EEF60B 0%, #EEF60B 100%);
    background-position: 0 0.85em;
    background-repeat: repeat-x;
    background-size: 2px 32px;
    display: inline;
    /* padding-left: 14px; */
  }
}

.page-title-wrapper {
  /* transform: translateY(-55px); */
}

p {
  @apply tracking-wide leading-tight;
}

h3 {
  @apply text-3xl leading-tight uppercase mb-4 tracking-wider font-medium;
}

h2 {
  @apply text-5xl mb-8;
  font-family: 'Bluu';
  font-weight: 700;

  & > span {
    background-position: 0 0.8em;
    background-repeat: repeat-x;
    background-size: 2px 14px;
    display: inline;
    padding-left: 14px;
  }

  & > span.yellow {
    background-image: linear-gradient(to bottom, #EEF60B 0%, #EEF60B 100%);
  }

  & > span.red {
    background-image: linear-gradient(to bottom, #ED116C 0%, #ED116C 100%);
  }
}

.read-on-link {
    background-image: linear-gradient(to bottom, #ED116C 0%, #ED116C 100%);
    background-position: 0 0.8em;
    background-repeat: repeat-x;
    background-size: 2px 12px;
    display: inline;
    padding: 0 6px;
}





</style>