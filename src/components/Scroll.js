import React from "react"

const Scroll = (props) => {
  const screanToScroll = window.screen.height * 0.72

  return (
    <div
      style={{
        overflowY: "scroll",
        height: screanToScroll,
        border: "1px solid black",
        scrollbarColor: "transparent",
      }}
    >
      {props.children};
    </div>
  )
}

export default Scroll
