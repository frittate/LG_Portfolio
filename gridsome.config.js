module.exports = {
  siteName: 'Gridsome',

  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true,
        shouldPurgeUnusedKeyframes: true,
      }
    },
    {
      use: 'gridsome-source-static-meta',
      options: {
        path: 'settings/*.json'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Thoughts',
        path: './content/thoughts/**/*.md',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Projects',
        path: './content/projects/**/*.md',
      }
    },
  ],
  templates: {
    Thoughts: [{
      path: '/thoughts/:title',
      component: './src/templates/BlogEntry.vue'
    }],
    Projects: [{
      path: '/projects/:title',
      component: './src/templates/ProjectEntry.vue'
    }]
  },
  chainWebpack: config => {
    config.resolve.alias.set('@modules', '@/resources/js/modules');
    config.resolve.alias.set('@utilities', '@/resources/js/utilities');
    
  }
}
