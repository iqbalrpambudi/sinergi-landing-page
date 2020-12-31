import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../assets/css/style.css"
import Img from "gatsby-image"

const Navbar = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/#">
          <Img
            className="headshot mr-2"
            fixed={data.file.childImageSharp.fixed}
            alt="logo"
          /><b>PT SINERGI INTI SUKSES MANDIRI</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-default"
          aria-controls="navbar-default"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbar-default">
          <div className="navbar-collapse-header">
            <div className="row">
              <div className="col-6 collapse-brand">{siteTitle}</div>
              <div className="col-6 collapse-close">
                <button
                  type="button"
                  className="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#navbar-default"
                  aria-controls="navbar-default"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span />
                  <span />
                </button>
              </div>
            </div>
          </div>
          <ul className="navbar-nav ml-lg-auto">
            <li className="nav-item">
              <a className="nav-link" href="#keunggulan">
                KEUNGGULAN
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pelayanan">
                PELAYANAN
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#cakupan">
                CAKUPAN
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#hubungi">
                HUBUNGI
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
