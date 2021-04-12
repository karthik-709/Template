import React from "react";

export default function Clients() {
  return (
    <div className="clients">
      <div className="container">
        <div className="client-title">
          <h2>OUR GREATFUL CLIENTS</h2>
        </div>
        <div className="title-seperator"></div>
        <div className="clientbox">
          <div className="box1">
            <div className="clientbox1">
              <div className="client1">
                <img
                  src="https://livedemo00.template-help.com/wt_58900/images/partner-1.png"
                  alt=""
                />
              </div>
              <div className="para1">
                <h3>TOURNER.</h3>
                <a href="#">www.tourner.com</a>
                <p>
                  We are awed by human resilience, and believe in the ability of
                  all people to thrive, not just exist.
                </p>
              </div>
            </div>

            <div className="clientbox2">
              <div className="client2">
                <img
                  src="https://livedemo00.template-help.com/wt_58900/images/partner-2.png"
                  alt=""
                />
              </div>
              <div className="para2">
                <h3>Frank`s Co</h3>
                <a href="#">www.franksco.com</a>
                <p>
                  We are open and transparent about the work we do and how we do
                  it.
                </p>
              </div>
            </div>
          </div>
          <br />
          <div className="box2">
            <div className="clientbox2">
              <div className="client2">
                <img
                  src="https://livedemo00.template-help.com/wt_58900/images/partner-3.png"
                  alt=""
                />
              </div>
              <div className="para2">
                <h3>RETRO PRESS</h3>
                <a href="#">www.retropress.com</a>
                <p>
                  We believe that all people have the right to live in peaceful
                  communities and participate fully in the decisions.
                </p>
              </div>
            </div>

            <div className="clientbox4">
              <div className="client4">
                <img
                  src="https://livedemo00.template-help.com/wt_58900/images/partner-4.png"
                  alt=""
                />
              </div>
              <div className="para4">
                <h3>Retro Beats</h3>
                <a href="#">www.retrobeats.com</a>
                <p>
                  We commit to achieving demonstrable impact for our
                  stakeholders, using their feedback to innovate, learn and
                  improve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
