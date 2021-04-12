import React from "react";
import services from "../../data/Services";

export default function Mainservices(props) {
  return (
    <div className="Main-services">
      <div className="service-title">
        <h2>MAIN SERVICES</h2>
      </div>
      <div className="title-seperator"></div>
      <div className="container">
        <div className="services">
          {/* <div className="service-box">
            <img
              src="https://livedemo00.template-help.com/wt_58900/images/index-2.jpg"
              alt=""
            />
            <h3>
              WEDDING
              <br /> CAKES
            </h3>
            <p>
              Whether you are looking for a traditional style or a contemporary
              creation, our decorators can meet your individual needs.
            </p>
          </div>
          <div className="service-box">
            <img
              src="https://livedemo00.template-help.com/wt_58900/images/index-2.jpg"
              alt=""
            />
            <h3>
              OUR
              <br /> BREADS
            </h3>
            <p>
              The unique flavors and textures of our breads come from the use of
              natural starters, minimal commercial yeast, and a slow
              fermentation process.
            </p>
          </div>
          <div className="service-box">
            <img
              src="https://livedemo00.template-help.com/wt_58900/images/index-4.jpg"
              alt=""
            />
            <h3>
              BEST <br /> COOKIES
            </h3>
            <p>
              Is there really anything more satisfying than a great cookie? We
              don't think so and when you try ours we think you'll agree.
            </p>
          </div>
          <div className="service-box">
            <img
              src="https://livedemo00.template-help.com/wt_58900/images/index-5.jpg"
              alt=""
            />
            <h3>
              TARTS
              <br /> AND PIES
            </h3>
            <p>
              Everyone loves the elegance of a tart or pie. We offer bite-sized
              tartlettes for a quick sweet treat or large dramatic tarts and
              pies.
            </p>
          </div> */}

          {services.map((singleService, index) => (
            <div className="service-box">
              <img src={singleService.image} alt="" />
              <h3
                dangerouslySetInnerHTML={{
                  __html: singleService.title.split(" ").join("<br />"),
                }}
              ></h3>

              <p>{singleService.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
