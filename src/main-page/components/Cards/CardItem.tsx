import { FC } from 'react'
import styled from 'styled-components'

export const CardItem = (props: { Card: FC<any>; title: string; sum: string }) => (
    <div>
        <props.Card />
        <h2>{props.title}</h2>
        <div>Выпуск карты бесплатно</div>
        <div>Снятие до {props.sum} ₸ в месяц Казахстана бесплатно</div>
        <div>CashBack до 15%</div>
        <StyledButton>Заказать карту</StyledButton>
    </div>
)
const StyledButton = styled.button`
    width: 186px;
    height: 44px;
    text-transform: none;
    font-size: 16px;
    font-size: 16px;
    border-radius: 4px;
    background-color: #1e2a41;
    color: white;
    border: none;
    cursor: pointer;
`
