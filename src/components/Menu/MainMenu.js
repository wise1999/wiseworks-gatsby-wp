import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import logo from '../../images/logo.svg';



const MainMenu = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 20);
        });
    }, []);

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

    function isActive({ isCurrent }) {
        return isCurrent ? { className: "active" } : null
    }

    return (
        <>
            <nav className={scroll ? "page_nav nav-scrolled" : "page_nav"} >
                <div className="container">
                    <div className="inner_wrapper">
                        <Link className="brand" to="/">
                            <img src={logo} className="img-fluid" alt="Logo Wiseworks" />
                        </Link>
                        <div className={click ? "active" : ""} id="overlay">
                            <div className="overlay-menu">
                                <ul>
                                    {items.map(item => (
                                        <li>
                                            <Link onClick={closeMobileMenu} getProps={isActive} to={item.url} key={item.id}>
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                    <li>
                                        <Link className="page-button button-purple" to="/contact">
                                            Hire me
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <button className={click ? 'menu_button opened_menu' : 'menu_button'} onClick={handleClick}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default MainMenu
