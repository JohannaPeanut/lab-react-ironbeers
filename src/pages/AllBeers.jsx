import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import axios from "axios";
// import { getAllBeers } from '../services/beer.js'

const AllBeers = () => {

  const [ query, setQuery ] = useState('')
  const [ beers, setBeers] = useState([])

  const apiURL = axios.create({
  baseURL: "https://ih-beers-api2.herokuapp.com/beers",
    });

const getAllBeers = () => {
  apiURL.get("/").then((response) => {
    setBeers(response.data)
  });
};

const queryBeers = () => {
  apiURL.get(`/search?q=${query}`).then((response) => {
    setBeers(response.data)
  });
};

const handleQueryChange = (event) => {
  console.log(event.target.value)
  setQuery(event.target.value)
  queryBeers()
}

  useEffect(() => {
    // getAllBeers().then((beers) => {
    //     console.log(beers)
    //     setBeers(beers)
    // })
    getAllBeers()
  },[])

  const randomArray = [{name: 'some'}, {name: 'test'}, {name: 'array'}]

  return (
    <div>
        <Navbar/>
        <input value={query} onChange={handleQueryChange} placeholder='What beer are you searching for?' />
            {beers && (
                beers.map((beer) => (
                    <Link to={`./${beer._id}`} key={beer._id}>
                    <div>
                        <div>
                            <img src={beer.image_url} alt="beer" />
                        </div>
                        <div>
                            <h1>{beer.name}</h1>
                            <h2>{beer.tagline}</h2>
                            <h3><b>Created by: </b>{beer.contributed_by}</h3>
                        </div>
                    </div>
                    </Link>
                ))
            )}
        
    </div>
  )
}

export default AllBeers