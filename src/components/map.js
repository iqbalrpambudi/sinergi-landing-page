import React from "react"

function Map({location}) {
  return (
    <div className="mapouter" style={{width:'100%'}}>
      <div className="gmap_canvas" style={{width:'100%'}}>
        <iframe
          width={`100%`}
          height={500}
          id="gmap_canvas"
          src={`https://maps.google.com/maps?q=${location || 'sukabumi'}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
          frameBorder={0}
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
        />
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            ".mapouter{position:relative;text-align:right;height:500px;width:500px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:500px;}",
        }}
      />
    </div>
  )
}

export default Map
