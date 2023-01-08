import { createContext, useState, useEffect, useRef} from "react";
import { useReactToPrint } from 'react-to-print';
import emptyAvatar from '../images/empty-avatar.png';
const FormContext = createContext();


export function FormProvider({children}){
  const [formData, setFormData] = useState( () => {return JSON.parse(localStorage.getItem("formData")) ||
    {
      firstName:'', 
      lastName:'',
      title:'',
      profilePicture: emptyAvatar,
      phone:'',
      email:'',
      linkedin:'',
      github:'',
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
    }}
  );

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData])


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

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'CV File',
  })


  return (
    <FormContext.Provider value={{formData, handleChange,  handleImage, componentRef, handlePrint}}>{children}</FormContext.Provider>
  )
}

export default FormContext;