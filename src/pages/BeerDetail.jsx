import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import axios from 'axios'
//import {beerDetail} from './../services/beer.js'

const BeerDetail = () => {

    const  {beerId}  = useParams()
    
    const [ beer, setBeer ] = useState(null)

    const apiURL = axios.create({
        baseURL: "https://ih-beers-api2.herokuapp.com/beers",
          });

    useEffect(()=> {
        apiURL.get(`/${beerId}`).then((response) => {
            setBeer(response.data)
            console.log(response.data )
          });
        //beerDetail(beerId).then((data) => console.log(data))
    }, [ beerId ])

  return (
    <div>
        <Navbar/>
        <div>
            <img src={beer.image_url} alt={beer.name} />
        </div>
        <div>
            <div>
                <h1>{beer.name}</h1>
                <h2>{beer.tagline}</h2>
            </div>
            <div>
                <h4>{beer.attenuation_level}</h4>
                <h3><b>First brewed: </b>{beer.first_brewed}</h3>
            </div>
        </div>
        <p>
            {beer.description}
        </p>
        <p>{beer.contributed_by}</p>
    </div>
  )
}

export default BeerDetail