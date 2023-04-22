import React from 'react'
import { incGroceries,decGroceries } from '../redux_store/storeReducer'
import { useDispatch, useSelector } from 'react-redux'


const Groceries = () => {
    const val=useSelector((state)=>state.shoppingcart)
    const dispatch=useDispatch()
    console.log(val)
  return (
    <div>
        <h3>Total Groceries {val.groceriescount}</h3>
        <button className="btn btn-primary m-2" onClick={()=>dispatch(incGroceries())}>Add</button>
        <button className="btn btn-danger m-2" onClick={()=>dispatch(decGroceries())}>Remove</button>
        
    </div>
  )
}

export default Groceries