import styled from 'styled-components'
import { Card } from '../assets/icons/tubs/Card'
import { Contsacts } from '../assets/icons/tubs/Contacts'
import { CreditIcon } from '../assets/icons/tubs/Credit'
import { Deposite } from '../assets/icons/tubs/Deposite'
import { ForteFamily } from '../assets/icons/tubs/ForteFamily'
import { Insurance } from '../assets/icons/tubs/Insurance'
import { Premiere } from '../assets/icons/tubs/Premiere'
import { Transfer } from '../assets/icons/tubs/Transfer'

export const Tubs = () =>
    document.documentElement.clientWidth > 375 ? (
        <StyledTubs>
            <Tub>
                <CreditIcon />
                Кредиты
            </Tub>
            <Tub>
                <Card />
                Карты
            </Tub>
            <Tub>
                <Deposite />
                Депозит
            </Tub>
            <Tub>
                <Transfer />
                Перевод
            </Tub>
            <Tub>
                <Insurance />
                Insurance
            </Tub>
            <Tub>
                <Premiere />
                Premiere
            </Tub>
            <Tub>
                <ForteFamily />
                Forte Family
            </Tub>
            <Tub>
                <Contsacts />
                Контакты
            </Tub>
        </StyledTubs>
    ) : (
        <></>
    )
const StyledTubs = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 88px;
`
const Tub = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 0.08;
    &.active,
    &:hover {
        color: #9d2550;
        stroke: #9d2550;
    }
`
