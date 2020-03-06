export default [
  {
    path: "/thoughts/:title/",
    component: () => import(/* webpackChunkName: "page--src-templates-blog-entry-vue" */ "F:\\programming\\webdev\\LG_Portfolio\\src\\templates\\BlogEntry.vue")
  },
  {
    path: "/projects/:title/",
    component: () => import(/* webpackChunkName: "page--src-templates-project-entry-vue" */ "F:\\programming\\webdev\\LG_Portfolio\\src\\templates\\ProjectEntry.vue")
  },
  {
    path: "/contact/",
    component: () => import(/* webpackChunkName: "page--src-pages-contact-vue" */ "F:\\programming\\webdev\\LG_Portfolio\\src\\pages\\Contact.vue")
  },
  {
    path: "/blog/",
    component: () => import(/* webpackChunkName: "page--src-pages-blog-vue" */ "F:\\programming\\webdev\\LG_Portfolio\\src\\pages\\Blog.vue")
  },
  {
    path: "/about/",
    component: () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "F:\\programming\\webdev\\LG_Portfolio\\src\\pages\\About.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "F:\\programming\\webdev\\LG_Portfolio\\node_modules\\gridsome\\app\\pages\\404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "F:\\programming\\webdev\\LG_Portfolio\\src\\pages\\Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "F:\\programming\\webdev\\LG_Portfolio\\node_modules\\gridsome\\app\\pages\\404.vue")
  }
]

