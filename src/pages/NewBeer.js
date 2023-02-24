import { useState } from "react";
import axios from "axios";


const NewBeer = () =>{
   const [ name, setName] = useState('')
   const [tagline, setTagline ] = useState('')
   const [ description, setDescription] = useState('')
   const [ first_brewed, setFirst ] = useState('')
   const [  brewers_tips, setTips] = useState('')
   const [  attenuation_level, setAttenuation] = useState(null)
   const [  contributed_by, setContributed] = useState('')
   
   const handleSubmit = () =>{

   }
   return (
      <div>
         <h1>New Beer</h1>

         <form onSubmit={handleSubmit}>
            <label></label>
            <input type='text' name='name'></input>
            
            <label></label>
            <input type='text'></input>
            
            <label></label>
            <input type='text'></input>
            
            <label></label>
            <input type='text'></input>
            
            <label></label>
            <input type='text'></input>
            
            <label></label>
            <input type='numbee'></input>
            
            <label></label>
            <input type='text'></input>


         </form>
      </div>
   )
}

export default NewBeer