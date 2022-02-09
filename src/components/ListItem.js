import React from 'react'
import { List } from 'reactstrap'

function ListItem({list}) {
  return (
    <div>
        <div>{list.food}</div>
        <button>X</button>
    </div>
  )
}

export default ListItem