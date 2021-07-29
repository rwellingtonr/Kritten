import React from "react"

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        height: window.screen.availHeight * 0.8,
        border: "2px solid black",
        scrollbarColor: "transparent",
      }}
    >
      {props.children}
      <div style={{ height: window.screen.availHeight * 0.2 }} />
    </div>
  )
}

export default Scroll
