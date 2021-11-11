import { useState } from 'react'
import styled from 'styled-components'
import { Classic } from '../../assets/icons/cards/Classic'
import { Gold } from '../../assets/icons/cards/Gold'
import { Platinum } from '../../assets/icons/cards/Platinum'
import { Point } from '../../assets/icons/cards/Point'
import { CardItem } from './CardItem'

export const Cards = () => {
    const [showItem, setShowItem] = useState(1)
    return (
        <Styled>
            <h1>Forte карты</h1>
            <StyledCards>
                {document.documentElement.clientWidth > 375 ? (
                    <>
                        <CardItem
                            Card={() => <Classic />}
                            title='Classic'
                            sum='300 000'
                        />
                        <CardItem Card={() => <Gold />} title='Gold' sum='500 000' />
                        <CardItem
                            Card={() => <Platinum />}
                            title='Platinum'
                            sum='3 000 000'
                        />
                    </>
                ) : (
                    <>
                        {showItem === 1 && (
                            <CardItem
                                Card={() => <Classic />}
                                title='Classic'
                                sum='300 000'
                            />
                        )}
                        {showItem === 2 && (
                            <CardItem
                                Card={() => <Gold />}
                                title='Gold'
                                sum='500 000'
                            />
                        )}
                        {showItem === 3 && (
                            <CardItem
                                Card={() => <Platinum />}
                                title='Platinum'
                                sum='3 000 000'
                            />
                        )}
                    </>
                )}
            </StyledCards>
            <Points>
                <StyledPoint onClick={() => setShowItem(1)}>
                    <Point></Point>
                </StyledPoint>
                <StyledPoint onClick={() => setShowItem(2)}>
                    <Point></Point>
                </StyledPoint>
                <StyledPoint onClick={() => setShowItem(3)}>
                    <Point></Point>
                </StyledPoint>
            </Points>
        </Styled>
    )
}
export const Points = styled.div`
    display: flex;
    justify-content: center;
    * {
        cursor: pointer;
        margin: 7px;
        padding: 4px;
        border: 1px solid white;
        border-radius: 20px;
        &:hover {
            svg {
                border: 1px solid black;
            }
        }
    }
`
export const StyledPoint = styled.div``
const Styled = styled.div`
    margin-top: 50px;
    h1 {
        margin-left: 30px;
        color: #1e2a41;
        font-size: 30px;
        @media (max-width: 320px) {
            margin-left: 0;
        }
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
        margin-left: 13px;
        @media (max-width: 320px) {
            margin: 0;
            margin-left: -2px;
            margin-top: 20px;
        }
    }
    @media (max-width: 375px) {
        flex-direction: column;
    }
`
