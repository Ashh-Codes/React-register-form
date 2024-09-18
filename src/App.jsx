
import './App.css'
import { TextField,Stack,Button, FormGroup} from '@mui/material'; 
import { Form, } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';


function App() {
  const [date, setDate] = useState('');
  const [lname,setlname] =useState('')
  const [fname,setfname] =useState('')
  const [email,setemail] =useState('')
  const [phone,setphone] =useState('')
  const [address,setaddress] =useState('')
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedDropdownOption, setSelectedDropdownOption] = useState('');
  
  const [error, setError] =useState({ dropdown: '', radio: '' });

  const [invalidfname,setinvalidfname] = useState(false)
  const [invalidlname,setinvalidlname] = useState(false)
  const [invalidemail,setinvalidemail] = useState(false)
  const [invalidphone,setinvalidphone] = useState(false)
  const [invalidaddress,setinvalidaddress] = useState(false)
  const [invaliddob,setinvaliddob] = useState(false)
  



  const validateData=(inputTag)=>{
  const {name,value} = inputTag
  if(name=="firstName"){
    setfname(value)
    console.log(value);
    !!value?setinvalidfname(false):setinvalidfname(true)
    
  }
  if(name=="lastName"){
    setlname(value)
    console.log(value);
    !!value?setinvalidlname(false):setinvalidlname(true)
    
  }
  if(name=="email"){
    setemail(value)
    console.log(value);
    !! (/\S+@\S+\.\S+/.test(value))?setinvalidemail(false):setinvalidemail(true)
  
    
    
  }
  
  if(name=="phone"){
    setphone(value)
    console.log(value);
    !!(value.length === 10 )?setinvalidphone(false):setinvalidphone(true)
    
  }
  if(name=="address"){
    setaddress(value)
    console.log(value);
    !!value?setinvalidaddress(false):setinvalidaddress(true)
    
  }
  if(name=="dob"){
    setDate(value)
    console.log(value);
    !!value?setinvaliddob(false):setinvaliddob(true)
    
  }

}


 const handleSubmit=(e)=>{
    e.preventDefault()
    let isValid = true;
    const newErrors = { dropdown: '', radio: '' };
    if (selectedDropdownOption === '') {
      newErrors.dropdown = 'Please select an option from the course';
      isValid = false;
    }
    if (selectedOption === '') {
      newErrors.radio = 'Please select a Gender option';
      isValid = false;
    }
    if(fname === ''||lname==='' || date=='' ||email=='' ||phone===''||address==''){
      alert("please fill the form completely")
      isValid=false
    }
    setError(newErrors);
    if(isValid){
      setError('')
      alert(`Form submitted successfully with details:
        First Name    :${fname} 
        Last Name     :${lname} 
        Email         :${email}
        Phone         :${phone}
        Address       :${address}
        Date of Birth :${date}
        Gender        :${selectedOption}
        Course        :${selectedDropdownOption}`)
      // console.log('Form submitted with:', {
      //   dropdown: selectedDropdownOption,
      //   radio: selectedOption,
      // })
    }

    


 }
 const handleReset =()=>{
  setDate('')
  setfname('')
  setlname('')
  setaddress('')
  setemail('')
  setphone('')
  setSelectedOption('')
  setSelectedDropdownOption('')
  setError({ dropdown: '', radio: '' })
}

 


  return (
      <Form>
    <div style={{minHeight:'100vh',width:'100%',backgroundImage:'URL(https://www.usnews.com/cmsmedia/a1/7c/61548aea4db9ab9045673bb5187f/160919-studentscollege-stock.jpg)',backgroundSize: 'cover'
}} className='d-flex justify-content-center align-items-center'>
     <div style={{width:'600px'}} className='bg-light rounded p-5 mt-5 mb-5'>
      <h1 className='mb-3'>Registration Form</h1>
   
      <div className="d-flex ">
      <TextField name="firstName" value={fname} onChange={e=>validateData(e.target)} className='me-3 w-100' id="outlined-basic" label="First Name" variant="outlined" />
        
      <TextField name="lastName" value={lname} onChange={e=>validateData(e.target)} className='mb-3 w-100' id="outlined-basic1" label="Last Name" variant="outlined" />
      </div>
      <div className='d-flex'>
      {
          invalidfname && 
          <div className='mb-3 me-5 text-danger fw-bolder'>Please enter first name</div>
        }
        {
          invalidlname && 
          <div className='mb-3 text-danger fw-bolder'>Please enter last name</div>
        }
        </div>
      {/* <InputGroup  >
        <InputGroup.Text>Address</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup> */}
       <TextField name='email' className='w-100' value={email} onChange={e=>validateData(e.target)} id="outlined-basic5" label="Email" variant="outlined" />
       
       {
          invalidemail && 
          <div className='mb-3 text-danger fw-bolder'>Please enter valid email Id</div>
        }
      <TextField name="phone" value={phone || ""} onChange={e=>validateData(e.target)} className='mb-3 mt-3 w-100' id="outlined-basic2" label="Phone" variant="outlined" />
      {
          invalidphone &&
          <div className='mb-3 text-danger fw-bolder'>Enter correct phone number</div>
        }
      <TextField name="address" onChange={e=>validateData(e.target)} className='w-100' value={address}
          id="outlined-multiline-static"
          label="Address"
          multiline
          rows={2}
          defaultValue=""
        />

{
          invalidaddress &&
          <div className='mb-3 text-danger fw-bolder'>Enter address</div>
        }
      <div className="d-flex mt-3 me-3">
        <p className='me-3'>Gender: </p>
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check 
            inline
            label="Female"

            name="group1"
            checked={selectedOption==='group1'}
          onChange={e=>setSelectedOption(e.target.value)}
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Male"
            name="group2"
            checked={selectedOption==='group2'}
            onChange={e=>setSelectedOption(e.target.value)}
            type={type}
            id={`inline-${type}-2`}
          />
         
         <Form.Check
            inline
            label="Others"
            name="group3"
            checked={selectedOption==='group3'}
            onChange={e=>setSelectedOption(e.target.value)}
            type={type}
            id={`inline-${type}-2`}
          />
          {error.radio && <div className="text-danger">{error.radio}</div>}
         
        </div>
      ))}
      </div>

      <label>
         Date of Birth:
        <input name="dob"  className='p-2 ms-2' type="date" value={date} onChange={e=>validateData(e.target)}  />
        {
          
          invaliddob &&
            <div className='mb-3 text-danger fw-bolder'>Enter address</div>
          
        }
      </label>

     <FormGroup>
     <Form.Select  aria-label="Select course" className='mt-3 mb-4' value={selectedDropdownOption} onChange={e=>setSelectedDropdownOption(e.target.value)}>
      <option value="">Select Course</option>
      <option value="Biology">Biology</option>
      <option value="Computer Science">Computer Science</option>
      <option value="Commerce">Commerce</option>
      <option value="Humanities">Humanities</option>
    </Form.Select>
    {error.dropdown && <div className="text-danger mb-3">{error.dropdown}</div>}
     </FormGroup>

    <Stack direction="row" spacing={2}>
        <Button  style={{width:'50%',height:'50px'}} onClick={handleSubmit} className='bg-dark' variant="contained">Register</Button>
        <Button style={{width:'50%',height:'50px'}} onClick={handleReset} variant="outlined">Cancel</Button>

        </Stack>
     
     
      
     </div>
    </div>




      </Form>

    
  )
}

export default App
