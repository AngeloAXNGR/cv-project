import React from 'react';
import Header from './preview-components/Header'
import Contact from './preview-components/Contact'
import About from './preview-components/About'
import Education from './preview-components/Education';
import Skills from './preview-components/Skills';
import Experience from './preview-components/Experience';

import FormContext from '../contexts/FormContext';
import { useContext } from 'react';




const Preview = React.forwardRef(() =>{
  const [skillData, setSkillData] = React.useState([]);
  const [experienceData, setExperienceData] = React.useState([]);

  const {formData, componentRef} = useContext(FormContext);

  React.useEffect(() =>{
    setSkillData(formData.skills.split(','));
  },[formData.skills])

  React.useEffect(() =>{
    setExperienceData(formData.experiences.split(','));
  },[formData.experiences])

  return(
    <div className="preview"  ref={componentRef}>
      <Header
        applicantName={`${formData.firstName} ${formData.lastName}`}
        applicantTitle={formData.title}
      />

      <main>
        <div className="profile-section">
          <div className="profile-picture">
            <img src={formData.profilePicture} alt="" />
          </div>

          <div className="profile-summary">
            <Contact
              phoneNumber={formData.phone}
              email={formData.email}
              linkedin={formData.linkedin}
              github={formData.github}
              address={formData.address}
            />

            <About
              about={formData.about}
            />
          </div>
        </div>

        <div className="qualification-section">
          <Education
            degree={formData.degree}
            universityName={formData.universityName}
            collegeStart={formData.collegeStart}
            collegeEnd={formData.collegeEnd}
            hSDegree={formData.hSDegree}
            hSName={formData.hSName}
            hSStart={formData.hSStart}
            hSEnd={formData.hSEnd}
          />

          <Skills skills={skillData}/>

          <Experience
            experiences={experienceData}
          />
        </div>
      </main>
    </div>
  )
})
export default Preview