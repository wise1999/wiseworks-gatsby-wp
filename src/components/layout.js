// /**
//  * Layout component that queries for data
//  * with Gatsby's useStaticQuery component
//  *
//  * See: https://www.gatsbyjs.com/docs/use-static-query/
//  */

// import * as React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
// import { Link } from "gatsby";
// import "./layout.css"

// const Layout = ({ children }) => {

//   const data = useStaticQuery(graphql`
//     query {
//       wpgraphql {
//         generalSettings {
//           url
//         }
//         menu(id: "dGVybToy") {
//           menuItems {
//             nodes {
//               id
//               url
//               label
//             }
//           }
//         }
//       }
//     }
//   `)

//   const { url } = data.wpgraphql.generalSettings;
//   const items = data.wpgraphql.menu.menuItems.nodes.map(item => ({
//     ...item,
//     url: item.url.replace(url, "")
//   }));

//   return (
//     <>
//       {items.map(item => (
//         <Link to={item.url} key={item.id}>
//           {item.label}
//         </Link>
//       ))}
//       <div
//         style={{
//           margin: `0 auto`,
//           maxWidth: 960,
//           padding: `0 1.0875rem 1.45rem`,
//         }}
//       >
//         <main>{children}</main>
//         <footer
//           style={{
//             marginTop: `2rem`,
//           }}
//         >
//           © {new Date().getFullYear()}, Built with
//           {` `}
//           <a href="https://www.gatsbyjs.com">Gatsby</a>
//         </footer>
//       </div>
//     </>
//   )
// }

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Layout

