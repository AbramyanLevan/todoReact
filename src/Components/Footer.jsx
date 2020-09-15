import React,{useEffect, useState} from 'react'
import '../index.css'


const Footer = ({left,todos,showCompleted,showNotCompleted,showAll}) => {

    
  
    return (
        <div>
             <footer class="page-footer"> 
             {todos.length !== 0 &&  <div className="center">
                 <span>Left: {left}</span>
                 <button onClick={()=>{showAll()}}>All</button>
                 <button onClick={()=>{showCompleted()}}>Completed</button>
                 <button onClick={()=>{showNotCompleted()}}>Not Completed</button>
                 </div>}
        </footer>
        </div>
    )
}

export default Footer
