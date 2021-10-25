import styled from 'styled-components'
import { Classic } from '../../assets/icons/cards/Classic'
import { Gold } from '../../assets/icons/cards/Gold'
import { Platinum } from '../../assets/icons/cards/Platinum'
import { Point } from '../../assets/icons/cards/Point'
import { CardItem } from './CardItem'

export const Cards = () => (
    <Styled>
        <h1>Forte карты</h1>
        <StyledCards>
            <CardItem Card={() => <Classic />} title='Classic' sum='300 000' />
            <CardItem Card={() => <Gold />} title='Gold' sum='500 000' />
            <CardItem Card={() => <Platinum />} title='Platinum' sum='3 000 000' />
        </StyledCards>
        <Points>
            <Point></Point>
            <Point></Point>
            <Point></Point>
        </Points>
    </Styled>
)
const Points = styled.div`
    display: flex;
    justify-content: center;
    * {
        cursor: pointer;
        margin: 7px;
        padding: 4px;
        border: 1px solid white;
        border-radius: 20px;
        &:hover {
            border: 1px solid black;
        }
    }
`
const Styled = styled.div`
    margin-top: 50px;
    margin-left: 100px;
    margin-right: 100px;
    h1 {
        color: #1e2a41;
        font-size: 30px;
    }
`
const StyledCards = styled.div`
    display: flex;
    justify-content: center;
    img {
        border-radius: 13px;
        cursor: pointer;
        width: 288px;
        height: 179px;
        box-shadow: 0px 6px 15px 1px darkgray;
    }
    * {
        text-align: center;
        margin: 20px;
    }
`
