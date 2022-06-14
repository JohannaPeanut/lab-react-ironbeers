
import Navbar from './../components/Navbar'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateBeer = () => {

const [beer, setBeer] = useState({name:'', tagline: '', description: '', first_brewed: '', brewers_tips:'', attenuation_level: 0, contributed_by: '' })

const navigate = useNavigate()

const handleBeerCreation = () => {

  const apiURL = axios.create({
    baseURL: "https://ih-beers-api2.herokuapp.com/beers",
      });

    apiURL.post('/new', beer).then((response) => {
        console.log(response )
        console.log(beer)
        //const id = response.data._id
        //navigate(`/${id}`)
        
      });
    //beerDetail(beerId).then((data) => console.log(data))


}

  return (
    <div>
        <Navbar/>
        <form>
          <label htmlFor="input">name</label>
          <input onChange={(event) => setBeer({...beer, name : event.target.value})} value={beer.name} type="text" /><br/>
          <label htmlFor="input">tagline</label>
          <input onChange={(event) => setBeer({...beer, tagline: event.target.value})} value={beer.tagline} type="text" /><br/>
          <label htmlFor="input">description</label>
          <input onChange={(event) => setBeer({...beer, description: event.target.value})} value={beer.description} type="text" /><br/>
          <label htmlFor="input">first brewed</label>
          <input onChange={(event) => setBeer({...beer, first_brewed: event.target.value})} value={beer.first_brewed} type="text" /><br/>
          <label htmlFor="input">brewers tips</label>
          <input onChange={(event) => setBeer({...beer, brewers_tips: event.target.value})} value={beer.brewers_tips} type="text" /><br/>
          <label htmlFor="input">attenuation level</label>
          <input onChange={(event) => setBeer({...beer, attenuation_level: event.target.value})} value={beer.attenuation_level} type="number" /><br/>
          <label htmlFor="input">your name</label>
          <input onChange={(event) => setBeer({...beer, contributed_by: event.target.value})} value={beer.contributed_by} type="text" /><br></br>
          <button onClick={handleBeerCreation}>Create new beer</button>
        </form>
    </div>
  )
}

export default CreateBeer