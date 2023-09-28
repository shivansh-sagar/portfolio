import React from "react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.linkedin.com/in/shivanshu-sagar" target="blank">
          <BsLinkedin />
        </a>
      </div>

      <div>
        <a href="https://github.com/shivansh-sagar" target="blank">
          {" "}
          <AiFillGithub />
        </a>
      </div>
      <div>
        <a href="" target="blank">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
