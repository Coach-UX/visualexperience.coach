import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="results">
          <div className="column">
            <h1>Key Results</h1>
          </div>
          <div className="column">
            <p className="row">
              Number of Unique Players
              <br />
              <b>211,497</b>
            </p>
            <p className="row">
              Number of Unique Game Plays
              <br />
              <b>264,318</b>
            </p>
            <p className="row">
              Audience Demographics
              <br />
              <b>18-35</b>
            </p>
          </div>
        </div>
        <div className="credits">
          <div className="column">
            <h1>Credits</h1>
          </div>
          <div className="column">
            <p>
              <b>Art Direction</b>
            </p>
            <p>Coach Creative Team</p>
            <p>
              <b>Copywriting</b>
            </p>
            <p>Coach Creative Team</p>
            <p>
              <b>Illustration</b>
            </p>
            <p>Jude Buffem</p>
            <p>
              <b>Development</b>
            </p>
            <p>The Goal (Japan)</p>
            <p>
              <b>Project Management</b>
            </p>
            <p>The Goal & Coach Japan</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
