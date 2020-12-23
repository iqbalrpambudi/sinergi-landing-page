import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Section from "../components/section"
import Image from "../components/image"
import SEO from "../components/seo"
import "../assets/css/style.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section>
      <div className="row justify-content-center">
        <div
          className="col-lg-7 col-md-9"
          style={{ minHeight: `300px`,display:`flex`,flexDirection:`column`, }}
        >
          <h2 className="title-screen">Saya memberikan yang terbaik.</h2>
          <div className="stripes"></div>
          <p className="title-description">
            Kami mengutamakan kualitas dan kepuasan pelanggan .
          </p>
        </div>
        <div className="col-lg-5 col-md-9">
          <Image />
        </div>
      </div>
    </Section>
  </Layout>
)

export default IndexPage
