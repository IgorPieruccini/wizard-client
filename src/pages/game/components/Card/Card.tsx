import { CardType } from "../../../../context/socket/types"
import styled  from "styled-components";
import { cardColors } from "../../../../shared/colors";

interface CardProps {
    card: CardType
}

const CardContainer = styled.div`
    width: 100px;
    height: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props=> props.color};
    border-radius: 10px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, .2);;
` 

const CardValue = styled.p`
    color: black;
    font-size: 5em;
    font-weight: bold;
    line-height: 0px;
    margin: 0px;
`


export const Card = ({ card }: CardProps)=> {
    const { color , value } = card;
    
    return <CardContainer color={cardColors[color]} data-testid={`card-${card.id}`}>
        <CardValue>{value}</CardValue>
    </CardContainer>
}

