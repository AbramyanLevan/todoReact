import React,{useEffect, useState} from 'react'
import '../index.css'


const Footer = ({left,todos,showNotComplited,showComplited,showAll}) => {

    
  
    return (
        <div>
             <footer class="page-footer"> 
           
             {todos.length !== 0 &&  <div className="center">
                 <span>Left: {left}</span>
                 <button onClick={()=>{showAll()}}>All</button>
                 <button onClick={()=>{showComplited()}}>Complited</button>
                 <button onClick={()=>{showNotComplited()}}>Not Complited</button>
                 </div>}
        </footer>
        </div>
    )
}

export default Footer
