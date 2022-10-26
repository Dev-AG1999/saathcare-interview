import React, { useState } from "react";
import { CardStyle } from "../styles";
import Footer from "./footer.component";
import Form from "./form.component";
import Profile from "./profile.component";
import avatar from "../../src/assets/avatar.svg";

const Card = () => {
  const [value, setvalue] = useState("");

  const handleSubmit = () => {
    if (value !== "") {
      alert("Signin In : " + value);
    } else {
      alert("Please enter value");
    }
  };
  return (
    <div style={CardStyle}>
      <Profile
        avatar={avatar}
        heading="Andrew@polka.io"
        subheading="Personal Account"
      />
      <Form
        value={value}
        checkboxText="Stay signed in"
        onChangeText={(e: any) => setvalue(e.target.value)}
        submit={handleSubmit}
      />
      <Footer />
    </div>
  );
};

export default Card;
