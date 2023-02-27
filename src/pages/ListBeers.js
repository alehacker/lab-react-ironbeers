// https://ih-beers-api2.herokuapp.com/beers 

// image
// name
// tagline
// contributed_by

import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const ListBeer = () =>{

   const [beers, setBeers] = useState([])

   const [ searchTerm, setSearchTerm] = useState('')


   const handleSearchSubmit = (e) =>{
      e.preventDefault()
      axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchTerm}`)
         .then((result) =>{
            console.log(result.data)
            setBeers(result.data)
         })
         .catch((err) =>{
            console.log(err)
         })

   }



   useEffect(() =>{

      axios.get('https://ih-beers-api2.herokuapp.com/beers')
         .then((response) =>{
            console.log("All Beers ==>", response.data)
            setBeers(response.data)
         })
         .catch((err)=> {
            console.log(err)
         })
   }, [])
   //If the endpoint was to being hit we could use lines 46-48
   //The beers array would be replaced by the 'filtered' array
   //That would be done on lines 62 -72
   // let filtered = searchTerm ? beers.filter((beer) => {
   //    return beer.name.includes(searchTerm)
   // }) : beers

   return (
      <div>
         <h1>List Beer</h1>
         <form onSubmit={handleSearchSubmit}>
            <label>Filter Beers</label>
            <input type='text' name="searchTerm" value={searchTerm} onChange = {(e)=> setSearchTerm(e.target.value)} />
            <button type='submit' >Search</button>
         </form>

         {
            beers.length ? 
            <div>
            {
               beers.map((beer) =>{
                  return(
                     <div Key ={beer._id}>
                        <Link to={`/beers/${beer._id}`}>
                        <img src={beer.image_url} alt='beer' />
                        <h3>{beer.name}</h3>
                        <p>{beer.tagline}</p>
                        <p>Created by: {beer.contributed_by}</p>
                        </Link>
                     </div>
                  )
               })
            }
            </div>

            :
            <h4>Loading...</h4>
         }

      </div>
   )
}

export default ListBeer