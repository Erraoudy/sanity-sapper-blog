export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60ed6ee38f4cf6133269b79e',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-iibrcb9o',
                  apiId: '5e6ed96b-a00e-40e4-bfaf-5f605674d583'
                },
                {
                  buildHookId: '60ed6ee3b4a7b40f75f1310b',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-3cjggpc3',
                  apiId: 'e3246ba5-6209-404e-b9e8-69947893db92'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Erraoudy/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-3cjggpc3.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
