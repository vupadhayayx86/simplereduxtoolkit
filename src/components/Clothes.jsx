import React from 'react'
import { incClothes,decClothes } from '../redux_store/storeReducer'
import { useDispatch, useSelector } from 'react-redux'
const Clothes = () => {
    const val=useSelector((state)=>state.shoppingcart)
    const dispatch=useDispatch()
    
  return (
    <div>
        <h3>Total Clothes {val.clothescount}</h3>
        <button className="btn btn-primary m-2" onClick={()=>dispatch(incClothes())}>Add</button>
        <button className="btn btn-danger m-2" onClick={()=>dispatch(decClothes())}>Remove</button>
        
    </div>
  )
}

export default Clothes