import React from "react";

export default function Blogs() {
  return (
    <div className="blogs">
      <div className="container">
        <div className="blog-title">
          <h3>LATEST BLOG POSTS</h3>
          <div className="title-seperator"></div>
          <div className="blogs">
            <div className="blog1">
              <img
                src="https://livedemo00.template-help.com/wt_58900/images/index-8.jpg"
                alt=""
              />
              <div className="bread">
                <a href="#">
                  Milling and the first bread!
                  <br /> Emmer/Red Wheat
                </a>
                <p>December 26, 2015</p>
                <div className="para">
                  <p>
                    Our mill has arrived and we're so excited. <br /> This marks
                    a new
                    <br />
                    chapter in our Bakery and how we treat our products.
                    Starting
                    <br />
                    this week, we have begun incorporating some of the fresh...
                  </p>
                </div>
              </div>
              <div className="number">
                <div>
                  <i class="far fa-comment"></i>
                </div>
                <div>
                  <p>10</p>
                </div>
              </div>
            </div>
            <div className="blog2">
              <img
                src="https://livedemo00.template-help.com/wt_58900/images/index-9.jpg"
                alt=""
              />
              <div className="cheese">
                <a href="#">Ancient Grains</a>

                <p>December 26, 2015</p>

                <div className="para2">
                  <p>
                    Ancient Grains bread is a blend of 3 different grains
                    <br />
                    collectively known as the "Ancient Grains" because they
                    haven't been manipulated over.
                  </p>
                </div>
              </div>
              <div className="number2">
                <div>
                  <i class="far fa-comment"></i>
                </div>
                <div>
                  <p>16</p>
                </div>
              </div>
            </div>

            <div className="blog3">
              <img
                src="https://livedemo00.template-help.com/wt_58900/images/index-10.jpg"
                alt=""
              />
              <div className="bread">
                <a href="#">White Whole Wheat</a>
                <p>December 26, 2015</p>
                <div className="para">
                  <p>
                    Our mill has arrived and we're so excited. This marks a new
                    <br />
                    chapter in our Bakery and how we treat our products.
                    Starting
                    <br />
                    this week, we have begun incorporating some of the fresh...
                  </p>
                </div>
              </div>
              <div className="number">
                <div>
                  <i class="far fa-comment"></i>
                </div>
                <div>
                  <p>10</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="button2">
          <a href="#">VIEW ALL BLOGS</a>
        </div>
      </div>
    </div>
  );
}
