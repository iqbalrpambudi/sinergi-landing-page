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
  console.log(data)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <a className="navbar-brand" href="/#">
          <Img
            className="headshot"
            fixed={data.file.childImageSharp.fixed}
            alt=""
          />
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
              <a className="nav-link" href="/#">
                PELAYANAN
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                KEUNGGULAN
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="/#">
                CAKUPAN
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="/#">
                HUBUNGI KAMI
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
