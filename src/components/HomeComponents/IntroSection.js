import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import introImage from '../../images/wiseworks-intro.svg';
import expImage from '../../images/exp-img.svg';
import webDesign from '../../images/web-design.svg';
import webDev from '../../images/web-dev.svg';
import webTech from '../../images/technical.svg';


const IntroSection = () => {
    const header = useStaticQuery(graphql`
    {
      wpgraphql {
        page(id: "cG9zdDoxMg==") {
          acf_home {
            introsection {
              heading
              slug
              subtitle
            }
          }
        }
      }
    }
  `)

    return (
        <section className="page-section" id="intro-section">
            <div className="container">
                <div className="row row-intro">
                    <div className="col-lg-5">
                        <span className="divider">{header.wpgraphql.page.acf_home.introsection.slug}</span>
                        <h1>{header.wpgraphql.page.acf_home.introsection.heading}</h1>
                        <p>
                            {header.wpgraphql.page.acf_home.introsection.subtitle}
                        </p>
                        <div className="same-align">
                            <Link className="page-button button-pink" to="">
                                Recent work
                        </Link>
                            <ul className="socials-intro">
                                <li className="linkedin">
                                    <Link to=""></Link>
                                </li>
                                <li className="github">
                                    <Link to=""></Link>
                                </li>
                                <li className="codepen">
                                    <Link to=""></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <img className="img-fluid intro-image" src={introImage} alt="Wiseworks intro" />
                    </div>
                </div>
                <div className="experience">
                    <div className="left-text">
                        <img src={expImage} className="img-fluid" alt="My experience" />
                        <h3>What my experience <br /> could <span>offer</span> you?</h3>
                    </div>
                    <div className="right-list">
                        <ul>
                            <li className="web-design">
                                <img src={webDesign} className="img-fluid" alt="Web design" />
                                <h4>Web design</h4>
                            </li>
                            <li className="web-design">
                                <img src={webDev} className="img-fluid" alt="Web development" />
                                <h4>Web development</h4>
                            </li>
                            <li className="web-design">
                                <img src={webTech} className="img-fluid" alt="Technical support" />
                                <h4>Technical support</h4>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default IntroSection