export default [
  {
    path: "/thoughts/:title/",
    component: () => import(/* webpackChunkName: "page--src-templates-blog-entry-vue" */ "C:\\webdev\\2020-luisa-portfolio\\src\\templates\\BlogEntry.vue")
  },
  {
    path: "/projects/:title/",
    component: () => import(/* webpackChunkName: "page--src-templates-project-entry-vue" */ "C:\\webdev\\2020-luisa-portfolio\\src\\templates\\ProjectEntry.vue")
  },
  {
    path: "/contact/",
    component: () => import(/* webpackChunkName: "page--src-pages-contact-vue" */ "C:\\webdev\\2020-luisa-portfolio\\src\\pages\\Contact.vue")
  },
  {
    path: "/blog/",
    component: () => import(/* webpackChunkName: "page--src-pages-blog-vue" */ "C:\\webdev\\2020-luisa-portfolio\\src\\pages\\Blog.vue")
  },
  {
    path: "/about/",
    component: () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "C:\\webdev\\2020-luisa-portfolio\\src\\pages\\About.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\webdev\\2020-luisa-portfolio\\node_modules\\gridsome\\app\\pages\\404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\webdev\\2020-luisa-portfolio\\src\\pages\\Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\webdev\\2020-luisa-portfolio\\node_modules\\gridsome\\app\\pages\\404.vue")
  }
]

