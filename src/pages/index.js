import React from "react"
import Layout from "../components/layout"
import Section from "../components/section"
import Image from "../components/image"
import SEO from "../components/seo"
import "../assets/css/style.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />


    {/* Banner */}
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
          <Image name="gatsby-handshake.png"/>
        </div>
      </div>
    </Section>

    {/* Keunggulan */}
    <Section>
      <div className="text-center">
        <h3 className="title-section">Keunggulan</h3>
        <div className="stripes"></div>
      </div>
      <div className="flex-container">
        <div className="card card-blue">
          <h4>Bersih</h4>
        </div>
        <div className="card card-purple">
          <h4>Professional</h4>
        </div>
        <div className="card card-red">
          <h4>Bertanggung Jawab</h4>
        </div>
      </div>
    </Section>
  </Layout>
)

export default IndexPage
