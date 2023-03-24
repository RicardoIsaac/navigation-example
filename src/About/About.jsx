import React from 'react'
import { useState, useEffect } from 'react'

import About1 from './About1'
import About2 from './About2'
import About3 from './About3'
import "../App.css"
import {AiOutlineDown,AiOutlineUp} from "react-icons/ai"

export default function About({dimensions}) {

    const [currentPage, setCurrentPage] = useState(1)

    const numberPages=3



     
  return (
    <div className='body' style={{width:dimensions.width*.89,height:dimensions.height}}>
        <div className='up'>
        {
           currentPage !==1 ?(
            <button style={{width:dimensions.width*.2,height:(dimensions.height*.04)}} className="Button" onClick={() =>setCurrentPage(currentPage-1)}><AiOutlineUp/></button>
        ):( <button style={{width:dimensions.width*.2,height:(dimensions.height*.04)}} className="noButton"><AiOutlineUp/></button>)
        }
        </div>
        <div className='page'style={{height:(dimensions.height*.85)}}>
        {
            currentPage===1?(<About1 dimensions={dimensions}/>):(<div> </div>)
        }
                {
            currentPage===2?(<About2 dimensions={dimensions}/>):(<div> </div>)
        }
                {
            currentPage===3?(<About3 dimensions={dimensions}/>):(<div> </div>)
        }
        </div>
        <div className='down'>
        {
           currentPage !==numberPages ?(
            <button style={{width:dimensions.width*.2,height:(dimensions.height*.04)}} className="Button" onClick={() =>setCurrentPage(currentPage+1)}><AiOutlineDown/></button>
        ):( <button style={{width:dimensions.width*.2,height:(dimensions.height*.04)}} className="noButton"><AiOutlineDown/></button>)
        }
        </div>
    </div>
  )
}
