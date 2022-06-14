import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Details from '../components/Details'
import axios from 'axios'
//import {beerDetail} from './../services/beer.js'

const BeerDetail = (props) => {

    
    const [ beer, setBeer ] = useState(null)

    console.log(props.random)

    let  {beerId}  = useParams()

    const apiURL = axios.create({
        baseURL: "https://ih-beers-api2.herokuapp.com/beers",
          });

    useEffect(()=> {

        if(props.random) beerId = "random"

        apiURL.get(`/${beerId}`).then((response) => {
            setBeer(response.data)
            console.log(response.data )
          });
        //beerDetail(beerId).then((data) => console.log(data))
    }, [ beerId ])

  return (
    <div>
        <Navbar/>
        {beer && 
        <Details beer={beer}/>}
    </div>
  )
}

export default BeerDetail