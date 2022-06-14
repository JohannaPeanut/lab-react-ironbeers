import React from 'react'

const Details = (props) => {
const { beer } = props


  return (
    <div>
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
        <p>{beer.contributed_by}</p>)
            </div>
  )
}

export default Details