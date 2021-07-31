import React from "react"

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        height: "75vh",
        border: "2px solid black",
        scrollbarColor: "transparent",
      }}
    >
      {props.children}
    </div>
  )
}

export default Scroll
