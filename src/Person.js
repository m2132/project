import React from 'react';

export default function Person(props)
{
    const {name,family,age}=props;
return(
    <>
    <p>wellcome to: {name} {family}</p>
    <p>age: {age}</p>
    </>
)
}
Person.defaultProps={
    name:"Dani",
    age:15
}