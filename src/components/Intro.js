import React from "react";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1 className="name">Laura Smith</h1>
        <h3 className="role">Frontend Developer</h3>
        <p className="website">laurasmith.website</p>
      </div>
      <div className="btns">
        <button>
          <MdEmail className="icon"/>
          Email
        </button>
        <button>
          <BsLinkedin className="icon"/>
          LinkedIn
        </button>
      </div>
    </div>
  );
};

export default Intro;
