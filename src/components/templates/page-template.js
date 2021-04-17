// import React from 'react';
// import { graphql } from "gatsby";

// export const query = graphql`
//     query ($id: ID!) {
//         wpgraphql {
//             page(id: $id) {
//                 title
//                 content
//             }
//         }
//     }
// `

// const PageTemplate = ({ data }) => {
//   const page = data.wpgraphql.page
//   return <>
//     <h1 dangerouslySetInnerHTML={{ __html: page.title }} />
//     <div />
//   </>

// }

// export default PageTemplate