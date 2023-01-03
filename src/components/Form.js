
import React from "react";
import Profile from "./form-components/Profile";
import Qualification from "./form-components/Qualification";
const Form = ({handleChange, handleImage, handlePrint, formData}) =>{

  return(
    <div className="form">
      <Profile
        formData={formData}
        handleChange={(e) => handleChange(e)}
        handleImage={(e) => handleImage(e) }
      />
      <Qualification
        handleChange={(e) => handleChange(e)}
        formData={formData}
      />
      <button className="print-button" onClick={handlePrint}>Print</button>
      </div>
  )
}

export default Form;