const Qualification = ({handleChange, formData}) =>{
  return(
    <div className="qualification-form">
      <div className="education-form">
        <h1>Education</h1>
        <div className="input-fields">
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

        <div className="input-fields">
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
        <div className="input-fields">
          <h1>Skills</h1>
          <textarea
            name="skills"
            cols="30"
            rows="5"
            placeholder="Separate skills with comma (Example: Python, JavaScript, ...)"
            onChange={(e) => handleChange(e)}
            value={formData.skills}
          />
        </div>
      </div>

      <div className="experiences-form">
        <div className="input-fields">
          <h1>Experience / Projects</h1>
          <textarea
            name="experiences"
            cols="30"
            rows="5"
            placeholder="Separate experiences with comma (Example: eCommerce Site, Homepage, ...)"
            onChange={(e) => handleChange(e)}
            value={formData.experiences}
          />
        </div>
      </div>
    </div>
  )
}

export default Qualification