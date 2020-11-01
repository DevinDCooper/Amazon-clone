import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="The lean startup: How Constant Innovation Creates Radically Success Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg
          "
          />
          <Product
            id="12321341"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre V=Glass Bowl"
            price={239.99}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7Eg6Kh7JbeeWr_kED0mvzhYcU4Gmq8m7WnFyEbd1Or4HMGnDlYdyuRhb4tnuXTfA3gBIIXGia&usqp=CAc"
          />
        </div>
        <div className="home__row">
          <Product
            id="93939393"
            title="Microsoft Xbox One X 1TB Console with Wireless Controller: Xbox One X Enhanced, HDR, Native 4K, Ultra HD (Renewed)"
            price={499.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61OUjGDvtLL._AC_UY218_.jpg"
          />
          <Product
            id="03192016"
            title="Mytrix Playstation 4 Slim 2TB Console with DualShock 4 Wireless Controller Bundle, Playstation Enhanced by Mytrix"
            price={399.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/712VauU3xxL._AC_UY218_.jpg"
          />
          <Product
            id="05131993"
            title="Nintendo Switch 32GB Console Video Games w/ 32GB Memory Card | Neon Red/Neon Blue Joy-Con | 1080p Resolution | 802.11ac WiFi | HDMI | Surround Sound | IR Motion Camera"
            price={439.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/61rrKnDRKnL._AC_UY218_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="08121995"
            title="SAMSUNG 55-Inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN55TU8000FXZA, 2020 Model)"
            price={497.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71RiQZ0J2SL._AC_UY218_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
