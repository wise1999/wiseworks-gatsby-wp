import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"


const WorkSection = () => {

  const realizationsData = useStaticQuery(graphql`
  {
    wpgraphql {
      realizations(first: 6) {
        nodes {
          title
          uri
          featuredImage {
            node {
              imageFile {
                childImageSharp {
                  gatsbyImageData(
                    webpOptions: {quality: 90}
                    formats: WEBP
                  )
                }
              }
              sourceUrl
            }
          }
          realizations_acf {
            type
          }
        }
      }
    }
  }
    `)

  const homeRecentPortfolio = realizationsData.wpgraphql.realizations.nodes;

  return (
    <section className="page-section" id="works">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <span className="divider">Portfolio</span>
            <h2>My work</h2>
            <ul>
              {homeRecentPortfolio.map((data) => {
                return <li>
                  <Link className="project-permalink" to={data.uri}>
                    <div className="layer">
                      <div className="view-box">
                        <GatsbyImage className="project-view" image={data.featuredImage.node.imageFile.childImageSharp.gatsbyImageData} />
                        <span className="is-new">NEW</span>
                      </div>
                      <h6>{data.title}</h6>
                      <p>{data.realizations_acf.type}</p>
                    </div>
                  </Link>
                </li>
              })}
            </ul>
            <Link to="/" className="page-button button-pink">
              Discover more
                        </Link>
          </div>
        </div>
      </div>
    </section >

  )
}
export default WorkSection