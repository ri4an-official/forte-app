import styled from 'styled-components'
import { Classic } from '../../assets/icons/cards/Classic'
import { Gold } from '../../assets/icons/cards/Gold'
import { Platinum } from '../../assets/icons/cards/Platinum'
import { CardItem } from './CardItem'

// FIXME - fix card
export const Cards = () => (
    <Styled>
        <h1>Forte карты</h1>
        <StyledCards>
            <CardItem Card={() => <Classic />} title='Classic' sum='300 000' />
            <CardItem Card={() => <Gold />} title='Gold' sum='500 000' />
            <CardItem Card={() => <Platinum />} title='Platinum' sum='3 000 000' />
        </StyledCards>
    </Styled>
)
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
    * {
        text-align: center;
        margin: 20px;
    }
`
