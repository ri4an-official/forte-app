import { useState } from 'react'
import styled from 'styled-components'
import { DownArrow } from '../../main-page/assets/icons/footer/DownArrow'
import { CreditIcon } from '../../main-page/assets/icons/tubs/Credit'
import { Delivery } from '../assets/svg/advantages/Delivery'
import { Procent } from '../assets/svg/advantages/Procent'

export const Advantages = () => {
    const [showText1, setShowText1] = useState(false)
    const [showText2, setShowText2] = useState(false)
    const [showText3, setShowText3] = useState(false)
    return (
        <StyledAdvantages>
            <FirstBlock>
                <div>
                    <Title>Кредит без залога</Title>
                </div>
                <div>
                    <Item>
                        <CreditIcon />
                        <p>До 7 000 000 ₸</p>
                    </Item>
                    <Item>
                        <Delivery />
                        <p>До 5 лет</p>
                    </Item>
                    <Item>
                        <Procent />
                        <p>От 7% годовых</p>
                    </Item>
                </div>
                <div>
                    <text>
                        Рассчитаем займ с минимальной ставкой в тот же день и сразу
                        сообщим о решении
                    </text>
                </div>
            </FirstBlock>
            <SecondBlock>
                <p>Преимущества экспресс-кредита </p>
                <ul>
                    <hr />
                    <li onClick={() => setShowText1(!showText1)}>
                        <text>Без залога и на любые цели</text>
                        <StyledArrow className={showText1 ? 'active' : ''}>
                            <DownArrow />
                        </StyledArrow>
                    </li>
                    {showText1 && (
                        <LoremText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Labore necessitatibus, molestiae tenetur aspernatur
                            architecto corporis blanditiis quibusdam incidunt sequi
                            suscipit maxime, voluptate eligendi quia asperiores illo
                            officiis officia quis? Porro!Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Labore necessitatibus,
                            molestiae tenetur aspernatur architecto corporis blanditiis
                            quibusdam incidunt sequi suscipit maxime, voluptate eligendi
                            quia asperiores illo officiis officia quis? Porro!
                        </LoremText>
                    )}
                    <hr />
                    <li onClick={() => setShowText2(!showText2)}>
                        <text>Доставка денег и документов домой</text>
                        <StyledArrow className={showText2 ? 'active' : ''}>
                            <DownArrow />
                        </StyledArrow>
                    </li>
                    {showText2 && (
                        <LoremText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Labore necessitatibus, molestiae tenetur aspernatur
                            architecto corporis blanditiis quibusdam incidunt sequi
                            suscipit maxime, voluptate eligendi quia asperiores illo
                            officiis officia quis? Porro!Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Labore necessitatibus,
                            molestiae tenetur aspernatur architecto corporis blanditiis
                            quibusdam incidunt sequi suscipit maxime, voluptate eligendi
                            quia asperiores illo officiis officia quis? Porro!
                        </LoremText>
                    )}
                    <hr />
                    <li onClick={() => setShowText3(!showText3)}>
                        <text>Погашение без походов в отделение</text>
                        <StyledArrow className={showText3 ? 'active' : ''}>
                            <DownArrow />
                        </StyledArrow>
                    </li>
                    {showText3 && (
                        <LoremText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Labore necessitatibus, molestiae tenetur aspernatur
                            architecto corporis blanditiis quibusdam incidunt sequi
                            suscipit maxime, voluptate eligendi quia asperiores illo
                            officiis officia quis? Porro!Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Labore necessitatibus,
                            molestiae tenetur aspernatur architecto corporis blanditiis
                            quibusdam incidunt sequi suscipit maxime, voluptate eligendi
                            quia asperiores illo officiis officia quis? Porro!
                        </LoremText>
                    )}
                    <hr />
                </ul>
            </SecondBlock>
        </StyledAdvantages>
    )
}
const StyledAdvantages = styled.div``
const FirstBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
        margin: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        * {
            margin: 5px;
        }
        text {
            font-size: 14px;
            color: #737373;
        }
    }
`
const StyledArrow = styled.div`
    svg {
        transform: rotate(0deg);
        transition: all 0.5s ease;
        margin-right: 15px;
    }
    &.active {
        svg {
            transform: rotate(180deg);
            transition: all 0.5s ease;
        }
    }
`
const SecondBlock = styled.div`
    display: flex;
    flex-direction: column;
    p {
        font-size: 24px;
        color: #303030;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        li {
            margin-bottom: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            text {
                margin-left: 15px;
                font-size: 16px;
            }
        }
    }
`
const LoremText = styled.div`
    font-size: 15px;
    color: gray;
    margin-left: 15px;
    animation: showtext 0.5s forwards;
    @keyframes showtext {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`
const Title = styled.div`
    font-size: 24px;
    font-weight: 500;
    color: #1e2a41;
`
const Item = styled.div`
    display: flex;
    flex-direction: row;
`
