import React from "react";

export default function Appfooter() {
  return (
    <div className="footer">
      <div className="container">
        <div className="mainbox">
          <div className="bakery">
            <h2>Bakery</h2>
            <p>
              Feel free to contact us. We're always
              <br />
              ready to help you.
              <br />
              Headquarters: 795 Folsom Ave, <br />
              Suite 600 San Francisco, CA 94107
            </p>
            <div>
              Phone{" "}
              <a href="callto:#" className="phone">
                (91) 8547 632521
              </a>
            </div>
            <div>
              Fax{" "}
              <a href="callto:#" className="fax">
                (91) 11 4752 1433
              </a>
            </div>
            <div>
              Email:
              <a href="#" className="email">
                soyab@gmail.com
              </a>
            </div>
            <div>
              <i className="fb" class="fab fa-facebook-f"></i>
            </div>
            <p> Like us on facebook</p>
          </div>
          <div className="blogroll">
            <h3>BLOGROLL</h3>
            <ul>
              <li>
                <a href="#" className="a">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="b">
                  Feedback
                </a>
              </li>
              <li>
                <a href="#" className="c">
                  Plugins
                </a>
              </li>
              <li>
                <a href="#" className="d">
                  Support Forums
                </a>
              </li>
              <li>
                <a href="#" className="e">
                  Themes
                </a>
              </li>
              <li>
                <a href="#" className="f">
                  WordPress Blog
                </a>
              </li>
              <li>
                <a href="#" className="g">
                  WordPress planet
                </a>
              </li>
            </ul>
          </div>
          <div className="recent-posts">
            <h2>RECENT POSTS</h2>
            <div className="pees">
              <a href="#">Behind The Scenes at our Bakery</a>
            </div>
            <p>December 28, 2016</p>
            <div className="bees">
              <a href="#">
                Pain de Pomme Barden <br />
                (pan de pom barden)
              </a>
            </div>
            <p>December 28, 2016</p>
            <div className="gees">
              <a href="#">Bread came out pretty good today..</a>
            </div>
            <p>December 28, 2016</p>
          </div>
          <div className="news-letter">
            <div className="news-logo">
              <h3>NEWS LETTER</h3>
            </div>
            <div className="parabg">
              <p>
                Enter your email address to receive all <br />
                company news, special offers and other discount information.
              </p>
            </div>
            <div className="put">
              <input type="email" placeholder="Email"></input>
            </div>
            <div>
              <button className="button4">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
