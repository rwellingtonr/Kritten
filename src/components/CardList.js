import React from "react"
import Card from "./Card"

const CardList = ({ kittens }) => {
  const cardComponent = kittens.map((user, i) => {
    return (
      <Card
        key={i}
        id={kittens[i].id}
        name={kittens[i].name}
        prof={kittens[i].prof}
      />
    )
  })
  return (
    <div>
      {cardComponent}
      <div style={{ height: "5vh" }} />
    </div>
  )
}
export default CardList
