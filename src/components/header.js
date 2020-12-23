import PropTypes from "prop-types"
import React from "react"
import "../assets/css/style.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#63A1FF`,
    }}
  >
    <div className="marquee">
      <span>Sedot WC</span>
      <span>Sedot limbah non b3 (untuk pabrik)</span>
      <span>Wc mampet</span>
      <span>Service Toilet</span>
      <span>Pembuatan Septic Tank</span>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
