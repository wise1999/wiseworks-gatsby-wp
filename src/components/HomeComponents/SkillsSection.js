import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { ProgressBar } from 'react-bootstrap';


const SkillsSection = () => {
  const skillsData = useStaticQuery(graphql`
  {
    wpgraphql {
      page(id: "cG9zdDoxMg==") {
        acf_home {
          skillssection {
            skillstext
            skills {
              type
              percentage
              fieldGroupName
            }
          }
        }
      }
    }
  }
  `)

  const progressBars = skillsData.wpgraphql.page.acf_home.skillssection.skills;


  return (
    <section className="page-section" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div dangerouslySetInnerHTML={{ __html: skillsData.wpgraphql.page.acf_home.skillssection.skillstext }} />
            <Link className="page-button button-purple" to="/contact">Contact</Link>
          </div>
          <div className="col-lg-6">
            <div className="skills-table">
              {progressBars.map((data) => {
                return <div className="single-skill">
                  <span>{data.type}</span>
                  <ProgressBar now={data.percentage} label={data.percentage + "%"} animated />
                </div>
              })}

              {/* <div className="single-skill">
                                <span>CSS + Preprocessors</span>
                                <ProgressBar now="95" label="95%" animated />
                            </div>
                            <div className="single-skill">
                                <span>Javascript + Frameworks</span>
                                <ProgressBar now="70" label="70%" animated />
                            </div>
                            <div className="single-skill">
                                <span>Wordpress Development</span>
                                <ProgressBar now="90" label="90%" animated />
                            </div> */}

            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
export default SkillsSection