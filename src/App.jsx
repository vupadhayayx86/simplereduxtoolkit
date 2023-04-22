import Clothes from "./components/Clothes";
import Groceries from "./components/Groceries";
import { useSelector } from "react-redux";
export default function App(){
  const val=useSelector((state)=>state.shoppingcart)
  return(
    <div className="container mt-5 ">
      <h2 className="mb-5">Total Store Items {val.totalcount}</h2>
      <Groceries/>
      <Clothes/>
    </div>
  )
}