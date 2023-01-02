const Qualification = ({handleChange, formData}) =>{
  return(
    <div className="qualification-form">
      <div className="education-form">
        <h2>Education</h2>
        <div className="college-input-fields">
          <h2>College</h2>
          <input
            type="text"
            name="degree"
            placeholder="Degree"
            value={formData.degree}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            name="universityName"
            placeholder="School Name"
            value={formData.universityName}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            name="collegeStart"
            placeholder="Start Date (e.g January 2000)"
            value={formData.collegeStart}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            name="collegeEnd"
            placeholder="End Date (e.g January 2000)"
            value={formData.collegeEnd}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="highSchool-input-fields">
          <h2>High School</h2>
          <input
            type="text"
            name="hSDegree"
            placeholder="Academic Track"
            value={formData.hSDegree}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            name="hSName"
            placeholder="School Name"
            value={formData.hSName}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            name="hSStart"
            placeholder="Start Date (e.g January 2000)"
            value={formData.hSStart}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            name="hSEnd"
            placeholder="End Date (e.g January 2000)"
            value={formData.hSEnd}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>

      <div className="skills-form">
        <h2>Skills</h2>
        <textarea 
          maxLength="300"
          name="skills" 
          cols="30" 
          rows="10"
          placeholder="Separate skills with comma (Example: Python, JavaScript, ...)"
          onChange={(e) => handleChange(e)}
          value={formData.skills}
        />  
      </div>

      <div className="experience-form">
        <h2>Experience / Projects</h2>
        <textarea 
          maxLength="300"
          name="experiences" 
          cols="30" 
          rows="10"
          placeholder="Separate experiences with comma (Example: eCommerce Site, Homepage, ...)"
          onChange={(e) => handleChange(e)}
          value={formData.experiences}
        />  
      </div>
    </div>
  )
}

export default Qualification