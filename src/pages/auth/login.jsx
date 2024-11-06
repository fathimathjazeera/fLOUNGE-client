import { LoginFormControls, registerFormControls } from "@/config"
import { useState } from "react"
import { Link } from "react-router-dom"
import CommonForm from '../../components/common/form'
import { useDispatch } from "react-redux"
import { loginUser } from "@/store/auth-slice"
import { toast } from "@/hooks/use-toast"


function AuthLogin(){
const dispatch = useDispatch()

const initialState ={
    email:'',
    password:''
}
const [formData, setFormData] = useState(initialState)
function onSubmit (event){
  event.preventDefault()
dispatch(loginUser(formData)).then(data=> {
    if(data?.payload?.success){
        toast({
            title:data?.payload?.message
        })
    }else{
        toast({
            title:data?.payload?.message,
            variant:'destructive'
        }) 
    }
})
}

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