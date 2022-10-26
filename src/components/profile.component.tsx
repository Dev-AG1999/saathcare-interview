import React from "react";
import { ProfileStyle } from "../styles";

interface ProfileProps {
  avatar?: string;
  heading?: string;
  subheading?: string;
}
const Profile = (props: ProfileProps) => {
  const { avatar, heading, subheading } = props;
  return (
    <>
      <div style={ProfileStyle}>
        <img src={avatar} height="150" width="150" style={{marginBottom:"10px"}} alt="Avatar" />
        <span style={{ fontSize: "12px" }}>{subheading}</span>
        <span style={{ fontSize: "24px" }}>{heading}</span>
      </div>
    </>
  );
};

export default Profile;
