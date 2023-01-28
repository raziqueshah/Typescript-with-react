import React from 'react'

type RandomNumberType = {
    value: number
}

type PositiveNumber = RandomNumberType & {
    isPossitive:boolean
    isNegative?:never
    isZero?:never
}

type NegativeNumber = RandomNumberType & {
    isNegative:boolean
    isPossitive?:never
    isZero?:never
}

type ZeroNumber = RandomNumberType & {
    isZero:boolean
    isPossitive?:never
    isNegative?:never
}

type RandomNumberProps = PositiveNumber | NegativeNumber | ZeroNumber

// type RandomNumberProps = {
//     value:number,
//     isPossitive:boolean,
//     isNegative:boolean,
//     isZero:boolean
// }

const RandomNumber = ({value, isPossitive, isNegative, isZero}:RandomNumberProps) => {
  return (
    <div>
      {value} {isPossitive && 'positive'} {isNegative && 'negative'} {isZero && 'zero'}
    </div>
  )
}

export default RandomNumber
