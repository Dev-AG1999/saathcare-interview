import React from "react";
import { WINDOW_WIDTH } from "../constants";
import {
  BtnWrapper,
  CheckBoxBtnWrapper,
  ForgotPasswordWrapper,
  InputStyle,
  ResetLinkStyle,
} from "../styles";
import Button from "./button.component";

interface FormProps {
  value: string | number;
  onChangeText?: any;
  checkboxText?: string;
  submit?: any;
}
const Form = (props: FormProps) => {
  const { value, onChangeText, checkboxText, submit } = props;
  return (
    <div style={{ display: "flex", flexDirection: "column",marginTop:"50px" }}>
      <span
        style={{ fontSize: "14px", marginBottom: "10px", marginLeft: "25px" }}
      >
        Password
      </span>
      <input
        type="email"
        onChange={onChangeText}
        value={value}
        style={InputStyle}
      />
      <div style={ForgotPasswordWrapper}>
        <span style={{ fontSize: "14px", marginBottom: "10px" }}>
          Forgot Password
        </span>
        <span style={ResetLinkStyle}>Reset</span>
      </div>
      <div style={CheckBoxBtnWrapper}>
        <div style={BtnWrapper}>
          <input type="checkbox" />
          <span style={{ fontSize: "14px", color: "#333333" }}>
            {checkboxText}
          </span>
        </div>
        <Button title="Sign In" onBtnClick={submit} />
      </div>
    </div>
  );
};

export default Form;
