import React from 'react';
import Seo from "../seo";
import { graphql } from "gatsby";
import MainMenu from '../Menu/MainMenu';
import MainFooter from '../Footer/MainFooter';
import IntroSection from '../HomeComponents/IntroSection';
import AboutSection from '../HomeComponents/AboutSection';
import SkillsSection from '../HomeComponents/SkillsSection';
import WorkSection from '../HomeComponents/WorkSection';
import ContactSection from '../HomeComponents/ContactSection';

export const query = graphql`
    query ($id: ID!) {
        wpgraphql {
            page(id: $id) {
                title
            }
        }
    }
`

const Home = () => {
    return <>
        <Seo title="Wiseworks" />
        <MainMenu />
        <IntroSection />
        <AboutSection />
        <SkillsSection />
        <WorkSection />
        <ContactSection />
        <MainFooter />
    </>

}

export default Home