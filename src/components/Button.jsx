import { useDispatch } from "react-redux";
import { minus, plus } from "../Redux/counter-slice";

const Button=({name})=>{
    const dispatch = useDispatch();
    
   return(
        
        <button className="border-2 border-pink-500 w-16" onClick={()=>name=="+"?dispatch(plus(3)):dispatch(minus(5))}>{name}</button>
       
    )
}
export default Button;