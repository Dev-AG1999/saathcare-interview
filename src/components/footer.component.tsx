import React from "react";

const Footer = () => {
  return (
    <div style={{ marginTop: "25px", width: "100%" }}>
      <div
        style={{ width: "100%", height: "1px", backgroundColor: "#E6E6E6" }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "12px",
            color: "#999999",
            textOverflow: "hidden",
            paddingLeft: "10px",
            paddingRight: "10px",
            maxWidth: "300px",
            textAlign: "center",
          }}
        >
          This site is protected by reCAPTCHA and the Google{" "}
          <strong style={{textDecoration:"underline"}}>Privacy Policy</strong> and
          <strong style={{textDecoration:"underline"}}>Terms of Service</strong> apply.
        </p>
      </div>
    </div>
  );
};

export default Footer;
