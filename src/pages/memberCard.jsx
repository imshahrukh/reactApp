import React from "react";

const Membercard = () => {
  // let { first_name, last_name, city, institution, rating, skill } = item;
  return (
    <div className="card-container">
      <span className="pro">4</span>
      <img
        className="round"
        src="https://randomuser.me/api/portraits/women/79.jpg"
        alt="user"
      />
      <h3 className="card_h3">Suamn Amajad</h3>
      <h6 className="card_h6">Lahtore</h6>
      <p className="card_h6">
        User interface designer and <br /> front-end developer
      </p>
      <div className="buttons">
        <button className="primary" id="btn-card-1">
          Message
        </button>
        <button className="primary ghost" id="btn-card-2">
          Following
        </button>
      </div>
      <div className="skills">
        <h6 className="skills-h6">Skills</h6>
        <ul>
          {/* {skill.map((item, index) => (
            <li key={index}>{item}</li>
          ))} */}
          <li>C++</li>
          <li>AS C++</li>
          <li>C++</li>
          <li>C++ Node</li>
          <li>Driver Game</li>
          <li>TEST</li>
          <li>C++</li>
        </ul>
      </div>
    </div>
  );
};

export default Membercard;
