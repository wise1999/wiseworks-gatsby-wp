import React from "react";
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import logo from '../../images/logo.svg';



const MainFooter = () => {

    const data = useStaticQuery(graphql`
    query {
      wpgraphql {
        generalSettings {
          url
        }
        menu(id: "dGVybToy") {
          menuItems {
            nodes {
              id
              url
              label
            }
          }
        }
      }
    }
  `)

    const { url } = data.wpgraphql.generalSettings
    const items = data.wpgraphql.menu.menuItems.nodes.map(item => ({
        ...item,
        url: item.url.replace(url, ""),
    }))

    return (
        <>
            <footer className="page-footer">
                <div className="container">
                    <div className="row row-top-footer">
                        <div className="col-lg-12">
                            <div className="inner-wrapper">
                                <div className="left-column">
                                    <Link className="brand" to="/">
                                        <img src={logo} className="img-fluid" alt="Logo Wiseworks" />
                                    </Link>
                                    <p>
                                        Young developer from Poland who loves web design and web development.
                            </p>
                                    <ul className="socials">
                                        <li className="linkedin"><Link to="/"></Link></li>
                                        <li className="github"><Link to="/"></Link></li>
                                        <li className="codepen"><Link to="/"></Link></li>
                                    </ul>
                                </div>
                                <div className="right-column">
                                    <strong>Useful links</strong>
                                    <ul>
                                        {items.map(item => (
                                            <li>
                                                <Link to={item.url} key={item.id}>
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                        <li>
                                            <Link to="">
                                                About me
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                                Work
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                                Skills
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-line"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <span className="copies"><Link to="/">Wiseworks</Link> 2021 &copy; All rights reserved</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default MainFooter
