import React from 'react'
import { useState, useEffect } from 'react'

import Home1 from './Home1'
import Home2 from './Home2'
import Home3 from './Home3'
import "../../App.css"
import {AiOutlineDown,AiOutlineUp} from "react-icons/ai"

export default function Home() {

    const [currentPage, setCurrentPage] = useState(1)

    const numberPages=3



    const [dimensions, setDimensions] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth
      })
      useEffect(() => {
        function handleResize() {
          setDimensions({
            height: window.innerHeight,
            width: window.innerWidth
          })
        }
    
        window.addEventListener('resize', handleResize)
    
        return _ => {
          window.removeEventListener('resize', handleResize)
        
    }
      })

     
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
            currentPage===1?(<Home1 dimensions={dimensions}/>):(<div> </div>)
        }
                {
            currentPage===2?(<Home2 dimensions={dimensions}/>):(<div> </div>)
        }
                {
            currentPage===3?(<Home3 dimensions={dimensions}/>):(<div> </div>)
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
