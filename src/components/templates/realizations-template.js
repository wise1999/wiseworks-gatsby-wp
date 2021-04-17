import React from 'react';
import { graphql } from "gatsby";

export const query = graphql`
    query ($id: ID!) {
        wpgraphql {
            realization(id: $id) {
                title
            }
        }
    }
`

const RealizationsTemplate = ({ data }) => {
    const realization = data.wpgraphql.realization
    return <>
        <h1 dangerouslySetInnerHTML={{ __html: realization.title }} />
    </>

}

export default RealizationsTemplate