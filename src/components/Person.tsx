import React from 'react'
import { PersonProp } from './Person.types'


const Person = (props:PersonProp) => {
  return (
    <div>
        <h1>{props.name.first_Name} {props.name.last_Name}</h1>
    </div>
  )
}

export default Person