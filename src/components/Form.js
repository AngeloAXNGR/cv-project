
import React from "react";
import Profile from "./form-components/Profile";
import Qualification from "./form-components/Qualification";
import FormContext from "../contexts/FormContext";
import { useContext } from "react";

const Form = () =>{
  const{handlePrint} = useContext(FormContext);
  
  return(
    <div className="form">
      <Profile
      />

      <Qualification
      />
      <button className="print-button" onClick={handlePrint}>Print</button>
      </div>
  )
}

export default Form;