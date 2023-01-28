import React from 'react';
import { Name } from './Person.types';

type PersonListProps = {
    names:Name[]
}

const PersonList = (props:PersonListProps) => {
  return (
    <div>
        {props.names.map(item => (
            <h1 key={item.first_Name}>{item.first_Name} {item.last_Name}</h1>
        ))}
    </div>
  )
}

export default PersonList