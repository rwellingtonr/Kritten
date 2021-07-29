import React from "react"

const Card = ({ prof, name, id }) => {
  return (
    <div className="bg-light-purple dib br3 pa3 ma3 grow w-20-l h-50 w-40-m w-80-ns">
      <img
        onClick={() => alert(name)}
        alt="kittens"
        src={`https://robohash.org/${id}?set=set4`}
      />
      <div>
        <h2>{name}</h2>
        <p>{prof}</p>
      </div>
    </div>
  )
}

export default Card
