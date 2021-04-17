// exports.createPages = async ({ actions, graphql }) => {
//     const result = await graphql(`
//     {
//         wpgraphql {
//           pages {
//             nodes {
//               id
//               uri
//             }
//           }
//         }
//       }
//     `);

//     const pages = result.data.wpgraphql.pages.nodes;

//     pages.forEach(page => {
//         actions.createPage({
//             path: page.uri,
//             component: require.resolve("./src/components/templates/page-template.js"),
//             context: {
//                 id: page.id,
//             }
//         })
//     });
// }


exports.createPages = async ({ actions, graphql }) => {

  const homePageQuery = await graphql(`
    {
        wpgraphql {
          page(id: "cG9zdDoxMg==") {
            uri
            id
          }
        }
      }
    `);

  const contactPageQuery = await graphql(`
    {
        wpgraphql {
          page(id: "cG9zdDoxNA==") {
            uri
            id
          }
        }
      }
    `);

  const realizationsQuery = await graphql(`
  {
    wpgraphql {
      realizations {
        nodes {
          id
          uri
          title
        }
      }
    }
  }
    `);

  actions.createPage({
    path: homePageQuery.data.wpgraphql.page.uri,
    component: require.resolve("./src/components/templates/home.js"),
    context: {
      id: homePageQuery.data.wpgraphql.page.id,
    }
  });
  actions.createPage({
    path: contactPageQuery.data.wpgraphql.page.uri,
    component: require.resolve("./src/components/templates/contact.js"),
    context: {
      id: contactPageQuery.data.wpgraphql.page.id,
    }
  });

  const realizations = realizationsQuery.data.wpgraphql.realizations.nodes;

  realizations.forEach(realization => {
    actions.createPage({
      path: realization.uri,
      component: require.resolve("./src/components/templates/realizations-template.js"),
      context: {
        id: realization.id,
      }
    });
  });
}

const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createResolvers = async (
  {
    actions,
    cache,
    createNodeId,
    createResolvers,
    store,
    reporter,
  },
) => {
  const { createNode } = actions

  await createResolvers({
    WPGraphQL_MediaItem: {
      imageFile: {
        type: "File",
        async resolve(source) {
          let sourceUrl = source.sourceUrl

          if (source.mediaItemUrl !== undefined) {
            sourceUrl = source.mediaItemUrl
          }

          return await createRemoteFileNode({
            url: encodeURI(sourceUrl),
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}