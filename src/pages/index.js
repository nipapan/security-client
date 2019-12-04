import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Msgbox from "../components/msgbox";

import 'bulma/css/bulma.css';

const IndexPage = () => (
  <Layout>
     <SEO title="Home" />
     <h1 className="is-uppercase">Make me secure!</h1>

     <Msgbox/>
     <div>
      <p className="is-size-2 has-text-gray has-text-centered has-text-weight-bold" id="display"> </p>
     </div>

     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
         <Image/>
     </div>
  </Layout>
)

export default IndexPage
