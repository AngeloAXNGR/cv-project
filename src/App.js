import './App.css';

import React from 'react';
import Form from './components/Form';
import Preview from './components/Preview';
import emptyAvatar from './images/empty-avatar.png';

import { useReactToPrint } from 'react-to-print';

function App() {
  const [formData, setFormData] = React.useState(
    {
      firstName:'', 
      lastName:'',
      title:'',
      profilePicture: emptyAvatar,
      phone:'',
      email:'',
      linkedin:'',
      address:'',
      about:'',
      degree:'',
      universityName:'',
      collegeStart:'',
      collegeEnd: '',
      hSDegree:'',
      hSName:'',
      hSStart:'',
      hSEnd:'',
      skills:'',
      experiences:'',
    }
  );



  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'CV File',
  })

 


  const handleChange = (event) =>{
    const {name, type, checked, value} = event.target;
    setFormData(prevData => {
      return {...prevData,
        [name] : type === "checkbox" ? checked : value
      }
    })
  }

  const handleImage = (event)=>{
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.onload = () => {
      setFormData(prevData => {
        return {...prevData, profilePicture: reader.result}
      })
    }
    reader.readAsDataURL(file)
  }


  return (
    <div className="app">
      <header>
        <h1 id="application-title">CV Generator</h1>
      </header>
      <div className="main-content">
        <Form
          formData={formData}
          handleChange={handleChange}
          handleImage={handleImage}
          handlePrint={handlePrint}
        />
        <Preview
          ref={componentRef}
          data={formData}
        />
      </div>
    </div>
  );
}

export default App;
