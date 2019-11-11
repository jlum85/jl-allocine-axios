import React from "react";

const Footer = props => {
  return (
    <footer>
      <svg
        onClick={() => props.onChangePage(-1)}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11 17l-5-5 5-5M18 17l-5-5 5-5" />
      </svg>

      <span>
        Page {props.numPage} / {props.countPage}
      </span>
      <svg
        onClick={() => props.onChangePage(1)}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
      </svg>
    </footer>
  );
};

export default Footer;
