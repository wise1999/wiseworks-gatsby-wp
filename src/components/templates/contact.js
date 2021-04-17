import React from 'react';
import Seo from "../seo";
import { graphql } from "gatsby";

export const query = graphql`
    query ($id: ID!) {
        wpgraphql {
            page(id: $id) {
                title
            }
        }
    }
`

const Contact = ({ data }) => {
    const page = data.wpgraphql.page
    return <>
        <Seo title="Contact me" />
        <h1 dangerouslySetInnerHTML={{ __html: page.title }} />
        <span>Strona kontaktowania sie ze soba</span>
    </>

}

export default Contact