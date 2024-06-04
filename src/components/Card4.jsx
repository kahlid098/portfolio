import React from 'react'

const card1 = (props) => {
  return (
    <>
        <div>
            <img src={props.MyCard.img} alt="" />
            <h2>{props.Myitem.tittle}</h2>
            <p>{props.Myitem.des}</p>
        </div>
    </>
  )
}

export default card1