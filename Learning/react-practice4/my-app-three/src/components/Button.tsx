import {useFormStatus} from "react-dom";

const Button = () => {
    const {pending} = useFormStatus()

   return (
       <button type={"submit"} disabled={pending}>
           {pending ? 'Loggin in...' : 'Log in'}
       </button>
   )
 }
 
 export default Button