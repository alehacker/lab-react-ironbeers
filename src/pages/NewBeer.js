import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const NewBeer = () =>{

   const [ newDrink, setNewDrink ] = useState(
      {
         name:'',
         tagline: '',
         description: '',
         first_brewed: '',
         brewers_tips: '',
         attenuation_level: Number,
         contributed_by:''
      }
   )

   //This is a longer version of doing the state change
   //Simplified the change of state, by creating an object as the state
   // const [ name, setName] = useState('')
   // const [tagline, setTagline ] = useState('')
   // const [description, setDescription] = useState('')
   // const [first_brewed, setFirst ] = useState('')
   // const [brewers_tips, setTips] = useState('')
   // const [attenuation_level, setAttenuation] = useState(null)
   // const [contributed_by, setContributed] = useState('')

   // const body ={ name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by}
   
   const navigate = useNavigate ()

   const handleTextChange = (e) =>{
      setNewDrink((recent) =>({...recent, [e.target.name] : e.target.value}))
   }
   const handleNumberChange = (e) =>{
      setNewDrink((recent) =>({...recent, [e.target.name] : Number(e.target.value)}))
   }

   const handleSubmit = (e) =>{
      e.preventDefault()

      axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newDrink)
      .then((result) =>{
         console.log(result)
         navigate('/beers')
      })
      .catch((err) =>{
         console.log(err)
      })
   }
   return (
      <div>
         <h1>New Beer</h1>

         <form onSubmit={handleSubmit}>

            <label>Name</label>
            <input type='text' name='name' value={newDrink.name} onChange={handleTextChange}></input>
            
            <label>Tagline</label>
            <input type='text' name='tagline' value={newDrink.tagline} onChange={handleTextChange}></input>
            
            <label>Description</label>
            <input type='text' name='description' value={newDrink.description} onChange={handleTextChange}></input>
            
            <label>First Brewed</label>
            <input type='text' name='first_brewed' value={newDrink.first_brewed} onChange={handleTextChange}></input>
            
            <label>Brewers Tips</label>
            <input type='text' name='brewers_tips' value={newDrink.brewers_tips} onChange={handleTextChange}></input>
            
            <label>Attenuation Level</label>
            <input type='number' name='attenuation_level' value={newDrink.attenuation_level} onChange={handleNumberChange}></input>
            
            <label>Contributed By</label>
            <input type='text' name="contributed_by"  value={newDrink.contributed_by} onChange={handleTextChange}></input>

            <button type="submit"> Add Beer </button>

         </form>
      </div>
   )
}

export default NewBeer