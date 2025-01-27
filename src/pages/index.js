import React, { useState } from "react"
import Layout from "../components/layout"
import Section from "../components/section"
import Image from "../components/image"
import { Pic1, Pic2, Pic3, Pic4, Pic5 } from "../components/images"
import SEO from "../components/seo"
import Carousel from "react-multi-carousel"
import Map from "../components/map.js"
import WA from "../images/whatsapp.svg"
import "../assets/css/style.css"
import "react-multi-carousel/lib/styles.css"

const IndexPage = ({ data }) => {
  const [location, setLocation] = useState("sukabumi")

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 620,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 620,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
  }

  return (
    <Layout>
      <SEO title="Home" />

      {/* Banner */}
      <div className="d-flex justify-content-center py-2">
        <marquee>
          <b>BUKA setiap hari kerja dari jam 08.00 - 20.00</b>
        </marquee>
      </div>
      <Section id="home">
        <div className="row justify-content-center">
          <div
            className="col-lg-7 col-md-9"
            style={{
              minHeight: `350px`,
              display: `flex`,
              flexDirection: `column`,
            }}
          >
            <h1 className="title-screen">Saya memberikan yang terbaik.</h1>
            <div className="stripes"></div>
          </div>
          <div className="col-lg-5 col-md-9">
            <Image name="gatsby-handshake.png" />
          </div>
        </div>
      </Section>

      {/* Keunggulan */}
      <Section id="keunggulan">
        <div className="text-center">
          <h3 className="title-section">Keunggulan</h3>
          <div className="stripes"></div>
        </div>
        <div className="flex-container">
          <div className="custom-card card-blue">
            <h4>Bersih</h4>
          </div>
          <div className="custom-card card-purple">
            <h4>Professional</h4>
          </div>
          <div className="custom-card card-red">
            <h4>Bertanggung Jawab</h4>
          </div>
        </div>
        <div className="text-center">
          <h3 className="display-text">
            Langganan pabrik karena terpercaya dengan kelengkapan surat
          </h3>
          <h3 className="display-text">
            Mempunyai pembuangan Legal beserta surat perizinan dari Dinas Tata
            Ruang
          </h3>
        </div>
      </Section>

      {/* Pelayanan */}
      <Section id="pelayanan" color="#f1f1f1">
        <div className="text-center">
          <h3 className="title-section">Pelayanan</h3>
          <div className="stripes"></div>
        </div>

        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=" mt-4"
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <div className="c-crd">
            <a className="c-crd__wrap" href="#">
              {/* <div className="c-crd__img">
                <img src="https://unsplash.it/400/209" alt="images" />
              </div> */}
              <div className="c-crd__btm">
                <h3 className="card-title">Sedot WC</h3>
                <p className="card-description">
                  Septic tank anda penuh? Hubungi saya, saya siap datang dan
                  menuntaskan masalah anda
                </p>
              </div>
            </a>
          </div>

          <div className="c-crd">
            <a className="c-crd__wrap" href="#">
              {/* <div className="c-crd__img">
                <img src="https://unsplash.it/400/209" alt="images" />
              </div> */}
              <div className="c-crd__btm">
                <h3 className="card-title">Sedot WC Mampet</h3>
                <p className="card-description">
                  WC anda mampet? Hubungi saya, saya siap datang dan menuntaskan
                  masalah anda.
                </p>
              </div>
            </a>
          </div>

          <div className="c-crd">
            <a className="c-crd__wrap" href="#">
              {/* <div className="c-crd__img">
                <img src="https://unsplash.it/400/209" alt="images" />
              </div> */}
              <div className="c-crd__btm">
                <h3 className="card-title">Service Toilet</h3>
                <p className="card-description">
                  WC anda mengalami kerusakan? Hubingi saya, saya akan
                  menuntaskan masalah pada WC anda.
                </p>
              </div>
            </a>
          </div>

          <div className="c-crd">
            <a className="c-crd__wrap" href="#">
              {/* <div className="c-crd__img">
                <img src="https://unsplash.it/400/209" alt="sedot wc" />
              </div> */}
              <div className="c-crd__btm">
                <h3 className="card-title">Pembuatan Septic Tank</h3>
                <p className="card-description">
                  Anda butuh jasa pembuatan septic tank? Hibungi saya, saya siap
                  datang dan membuatkan septic tank untuk anda.
                </p>
              </div>
            </a>
          </div>

          <div className="c-crd">
            <a className="c-crd__wrap" href="#">
              {/* <div className="c-crd__img">
                <img src="https://unsplash.it/400/209" alt="sedot wc" />
              </div> */}
              <div className="c-crd__btm">
                <h3 className="card-title">Sedot Limbah Non B3</h3>
                <p className="card-description">
                  Tampungan limbah anda penuh? Hubungi saya, saya siap datang
                  untuk menuntaskan masalah anda.
                </p>
              </div>
            </a>
          </div>
        </Carousel>
      </Section>

      {/* Contact Cakupan */}
      <Section id="cakupan">
        <div className="text-center">
          <h3 className="title-section">Cakupan Wilayah</h3>
          <div className="stripes"></div>
        </div>

        <div className="map-box">
          <div className="map-column">
            <Map location={location} />
          </div>
          <div className="map-column map-item">
            <a onClick={() => setLocation("sukabumi")}>Sukabumi</a>
            <a onClick={() => setLocation("bogor")}>Bogor</a>
            <a onClick={() => setLocation("cianjur")}>Cianjur</a>
            <a onClick={() => setLocation("pelabuhan ratu")}>Pelabuhan Ratu</a>
            <a onClick={() => setLocation("puncak bogor")}>Puncak</a>
          </div>
        </div>
      </Section>

      <Section color="#f1f1f1">
        <div className="image-container">
          <div className="image-card">
            <img src={Pic1} alt="sedot wc1" />
          </div>
          <div className="image-card">
            <img src={Pic2} alt="sedot wc" />
          </div>
          <div className="image-card">
            <img src={Pic3} alt="sedot wc" />
          </div>
          <div className="image-card">
            <img src={Pic4} alt="sedot wc" />
          </div>
          <div className="image-card">
            <img src={Pic5} alt="sedot wc" />
          </div>
        </div>
      </Section>

      <Section id="hubungi">
        <div className="text-center">
          <h3 className="title-section">Hubungi</h3>
          <div className="stripes"></div>
        </div>

        <div className="row" style={{ height: `400px`, marginTop: `2rem` }}>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center p-5 shadow mb-4">
              <h6>Whatsapp/Telephone</h6>
              <h3>0813 1004 0417</h3>
            </div>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center p-5 shadow mb-4">
              <h5>Telephone</h5>
              <h3>0817 7070 4460</h3>
            </div>
          </div>
        </div>
      </Section>

      <a
        target="_blank"
        href="https://wa.me/6281310040417?text=Permisi%20saya%20mau%20jasa%20sedot%20WC"
      >
        <img className="contact" src={WA} alt="wa" />
      </a>
    </Layout>
  )
}

export default IndexPage
