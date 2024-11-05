import { LoginFormControls, registerFormControls } from "@/config"
import { useState } from "react"
import { Link } from "react-router-dom"
import CommonForm from '../../components/common/form'


function AuthLogin(){

const initialState ={
    email:'',
    password:''
}
function onSubmit (){
    
}
const [formData, setFormData] = useState(initialState)

    return <div className="mx-auto w-full max-w-md space-y-6">
<div className="text-center">
<h1 className="text-3xl font-bold tracking-tight text-foreground">Sign in to your account</h1>
<p className="mt-2 inline">Don't have an account?</p>
<Link className='font-medium ml-2 text-primary hover:underline' to='/auth/register'>
Register
</Link>
</div>
<CommonForm  
formControls={LoginFormControls}
buttonText={'Sign In'}
formData={formData}
setFormData={setFormData}
onSubmit={onSubmit}
/>
    </div>
}



export default AuthLogin