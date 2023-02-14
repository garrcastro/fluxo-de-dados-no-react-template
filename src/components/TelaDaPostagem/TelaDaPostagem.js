import React from 'react'
import {ContainerPostagem, Image, Description, Title} from './styles'

const TelaDaPostagem = (props) => {
  return (
    <ContainerPostagem>
            <Image src={props.inputImage} alt='drone view'/>
            <Title>{props.inputTitle}</Title>
            <Description>{props.inputDescription}</Description>
    </ContainerPostagem>
  )
}

export default TelaDaPostagem