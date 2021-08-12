import React from "react";

export default function Footer() {
  return (
    <footer
      className="page-footer font-small blue pt-4"
      style={{
        backgroundColor: "grey",
        padding: "1rem",
        position: "fixed",
        bottom: "0",
        left: "0",
        width: "100%",
      }}
    >
      <div className="footer-copyright text-center">
        © 2020 Copyright: Spark Airways Pvt. Ltd.
      </div>
    </footer>
  );
}
