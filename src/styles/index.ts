import { WINDOW_WIDTH } from "../constants";

export const MainLayoutStyle = {
  width: "100%",
  height: "100vh",
  background:
    "linear-gradient(162deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 34%, rgba(0,212,255,1) 65%, rgba(0,11,255,1) 99%)",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
};

export const CardStyle = {
  width: WINDOW_WIDTH > 720 ? "500px" : "300px",
  height: WINDOW_WIDTH > 720 ? "70%" : "90%",
  backgroundColor: "#FFFFFF",
  borderWidth: "5px",
  borderRadius: "20px",
  boxShadow: "0px 0px 9px 0px #b8b8b8",
  margin: "4em",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  flexDirection: "column" as "column",
  paddingTop:"50px" 

};

export const ProfileStyle = {
  display: "flex",
  flexDirection: "column" as "column",
  height: "35%",
  alignItems: "center",
  justifyContent: "space-between",
};

export const ButtonStyle = {
  backgroundColor: "#6877CA",
  color: "#fff",
  fontSize: "15px",
  width: "150px",
  padding: "15px 20px",
  display: "inline-block",
  textAlign: "center" as "center",
  margin: "4px 2px",
  fontWeight: "bold",
  borderWidth: "1px",
  borderColor: "#6877CA",
  borderRadius: "50px",
};

export const InputStyle = {
  width: WINDOW_WIDTH > 720 ? "300px" : "90%",
  height: "30px",
  borderWidth: "1px",
  borderRadius: "30px",
  borderColor: "#6877CA",
  padding: "10px",
  fontSize: "20px",
  margin:"0 10px"
};

export const ForgotPasswordWrapper = {
  width: "100%",
  display: "flex",
  flexDirection: "row" as 'row',
  alignItems: "center",
  justifyContent: "center",
};

export const ResetLinkStyle = {
  fontSize: "14px",
  marginBottom: "10px",
  marginLeft: "5px",
  color: "#6877CA",
  fontWeight: "bold",
};

export const CheckBoxBtnWrapper = {
  width: "100%",
  height: "100%",
  alignItems: "center",
  justifyContent: "space-between",
  display: "flex",
  flexDirection: "row" as "row",
  marginTop: "20px",
};

export const BtnWrapper = {
  display: "flex",
  flexDirection: "row" as "row",
  justifyContent: "center",
  alignItems: "center",
};
