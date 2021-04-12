import React from "react";
import Mainservices from "./Components/MainServices";
import HomeBanner from "./Components/HomeBanner";
import Counter from "./Components/Counter";
import Contact from "./Components/Contact";
import Clients from "./Components/Clients";
import Testimonial from "./Components/Testimonial";
import Blogs from "./Components/Blogs";

export default function Home(props) {
  return (
    <React.Fragment>
      <HomeBanner />
      <Mainservices />
      <Counter />
      <Contact />
      <Clients />
      <Testimonial />
      <Blogs />
    </React.Fragment>
  );
}
