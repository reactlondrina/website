import React from "react"

import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaInstagram as Insta,
  FaEnvelope as Mail,
  FaLinkedin as LinkedIn
} from "react-icons/fa"

export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3" style={{ color: "#FF8A00" }}>
        <span style = {{color : "white"}}>{"<React.Community>"}</span> <br />
        Londrina
      </div>
      <div className="h1 code mt-4 mb-3">async {"{"}</div>
      <div className="text-muted mx-5 my-4 h3 text-justify info">
        Primeira comunidade aberta para fomento e
        <br />compartilhamento do ecossistema de React em Londrina.
      </div>
      <div className="h1 code mt-2 mb-3">{"}"}</div>
      <div className="h1 mt-5">
        <a className="mr-5 icon" href="https://twitter.com/reactlondrina">
          <Twitter />
        </a>
        <a className="mr-5 icon" href="https://instagram.com/reactlondrina">
          <Insta />
        </a>
        <a className="mr-5 icon" href="https://github.com/reactlondrina">
          <Github />
        </a>
        <a className="mr-5 icon" href="https://www.linkedin.com/groups/12360528/">
          <LinkedIn />
        </a>
        <a className="mr-5 icon" href="mailto://reactlondrina@gmail.com">
          <Mail />
        </a>
      </div>
    </div>
  )
}
