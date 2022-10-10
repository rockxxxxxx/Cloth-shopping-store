import { useState } from "react";

const Signup = ()=>{
    const initialFormFields = {
        name:'',
        email:'',
        password:'',
        confirmPassword:''
    }
    const [formFields, setFormFields] = useState(initialFormFields);
    const {name,email,password,confirmPassword} = formFields;

    const handleChange=(event)=>{
        const{name,value} = event.target;
        setFormFields({...formFields,[name]:value});
        
        console.log(formFields)
    }

    return(
        <>
        <h1>Signup with email and password</h1>
        <form onSubmit={()=>{}}>
            <label>Name</label>
            <input type="text" required placeholder="name" onChange={handleChange} name="name" value={name}/>

            <label>Email</label>
            <input type="email" required placeholder="email" onChange={handleChange} name="email" value={email}/>

            <label>Password</label>
            <input type="password" required placeholder="password" onChange={handleChange} name="password" value={password}/>

            <label>Confirm Password</label>
            <input type="password" required placeholder="confirm password" onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
            <button type="submit">Sign up</button>
        </form>
        </>
    )
}
export default Signup;