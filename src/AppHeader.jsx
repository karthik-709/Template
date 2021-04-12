import React from "react";

export default function Appheader() {
  const menu = [
    "home",
    "elements",
    "features",
    "extras",
    "pages",
    "blogs",
    "Shops",
    "Gallary",
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <header>
      <div className="container">
        <div className="main-nav">
          <div className="header-logo">
            <h2>
              <a href="a">Bakery</a>
            </h2>
          </div>
          <div className="header_menu">
            <ul>
              {/* <li>
                <a href="#" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#">Elements</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Extras</a>
              </li>
              <li>
                <a href="#">Pages</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li> */}

              {menu.map((menuItem, index) => (
                <li>
                  <a
                    href="#"
                    onClick={() => setActiveIndex(index)}
                    className={index === activeIndex ? "active" : ""}
                  >
                    {menuItem}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
