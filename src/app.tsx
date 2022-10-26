import React from "react";
import Card from "./components/card.component";
import MainLayout from "./layout/main.layout";



function App() {

 
  return (
   <MainLayout children={<Card/>}/>
  );
}

export default App;
