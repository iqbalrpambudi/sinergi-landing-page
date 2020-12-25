import React from "react"

const Section = ({ children, color,id }) => {
  return (
    <section id={id} style={{ backgroundColor: color || "white",padding:`3.25rem 0` }}>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1080,
          padding: `1.0875rem 1.45rem`,
        }}
      >
        {children}
      </div>
    </section>
  )
}

export default Section
