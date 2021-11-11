import { useState } from 'react'
import styled from 'styled-components'
import { Point } from '../../main-page/assets/icons/cards/Point'
import { Points } from '../../main-page/components/Cards/Cards'
import { ByPhone } from '../assets/svg/getcredit/ByPhone'
import { Identification } from '../assets/svg/getcredit/Identification'

export const GetCredit = () => {
    const [showItem, setShowItem] = useState(1)
    return (
        <StyledGet>
            <PagBlock>
                {document.documentElement.clientWidth > 380 ? (
                    <>
                        <Item active>Документы</Item>
                        <Item>Условия</Item>
                        <Item>Возможности</Item>
                        <Item>Важно</Item>
                        <Item>Типовые условия</Item>
                    </>
                ) : (
                    <>
                        <Item active>Документы</Item>
                        <Item>Условия</Item>
                    </>
                )}
            </PagBlock>
            <Conditions>
                <Title>Получить кредит на выгодных условиях</Title>
                <p>
                    <Block>
                        <DarkGray>
                            <h1>Минимальная ставка по кредиту с комиссиями</h1>
                        </DarkGray>
                        <div>
                            <p>Сумма:</p>
                            <text>от 100 000 до 7 000 000 тенге</text>
                        </div>
                        <div>
                            <p>Ставки вознаграждения:</p>
                            <text>от 7% (ГЭСВ от 7,3%)</text>
                        </div>
                        <div>
                            <p>Срок:</p>
                            <text>до 5 лет</text>
                        </div>
                        <div>
                            <p>Комиссия за организацию займа:</p>
                            <text>от 2,25%</text>
                        </div>
                        <div>
                            <p>Комиссия за выдачу наличных:</p>
                            <text>
                                По тарифам платежных карточек для физических лиц
                            </text>
                        </div>
                    </Block>
                    <Block>
                        <DarkGray>
                            <h1>Стандартная ставка по кредиту без комиссий</h1>
                        </DarkGray>
                        <div>
                            <p>Сумма:</p>
                            <text>от 100 000 до 7 000 000 тенге</text>
                        </div>
                        <div>
                            <p>Ставки вознаграждения:</p>
                            <text>от 21,99% (ГЭСВ от 24,4%)</text>
                        </div>
                        <div>
                            <p>Срок:</p>
                            <text>до 5 лет</text>
                        </div>
                        <div>
                            <p>Комиссия за организацию займа:</p>
                            <text>0%</text>
                        </div>
                        <div>
                            <p>Комиссия за выдачу наличных:</p>
                            <text>
                                По тарифам платежных карточек для физических лиц
                            </text>
                        </div>
                    </Block>
                </p>
            </Conditions>
            <Docs>
                <h1>Документы для получения кредита</h1>
                <div>
                    <Identification />
                    <p>Удостоверение личности</p>
                </div>
                <div>
                    <ByPhone />
                    <p>Заполнить анкету</p>
                </div>
                <text>
                    Задать вопросы можете по номеру<span>7575</span>или письмом на
                    электронный адрес
                    <span>callcenter@forte.bank</span>
                </text>
            </Docs>
            <WhoGetCredit>
                <h1>Кредит выдаём гражданам Казахстана</h1>
                <p>
                    {document.documentElement.clientWidth > 380 ? (
                        <>
                            <div>
                                <h3>Пол</h3>
                                <text>Мужчины/Женщины</text>
                            </div>
                            <div>
                                <h3>Стаж работы</h3>
                                <text>Не менее 6 месяцев</text>
                            </div>
                            <div>
                                <h3>Возраст</h3>
                                <text>От 21 до 63 лет</text>
                            </div>
                        </>
                    ) : (
                        <>
                            {showItem === 1 && (
                                <div>
                                    <h3>Пол</h3>
                                    <text>Мужчины/Женщины</text>
                                </div>
                            )}
                            {showItem === 2 && (
                                <div>
                                    <h3>Стаж работы</h3>
                                    <text>Не менее 6 месяцев</text>
                                </div>
                            )}
                            {showItem === 3 && (
                                <div>
                                    <h3>Возраст</h3>
                                    <text>От 21 до 63 лет</text>
                                </div>
                            )}
                        </>
                    )}
                </p>
                <Points>
                    <div onClick={() => setShowItem(1)}>
                        <Point></Point>
                    </div>
                    <div onClick={() => setShowItem(2)}>
                        <Point></Point>
                    </div>
                    <div onClick={() => setShowItem(3)}>
                        <Point></Point>
                    </div>
                </Points>
            </WhoGetCredit>
        </StyledGet>
    )
}
const WhoGetCredit = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    h1 {
        font-size: 30px;
        color: #1e2a41;
        @media (max-width: 320px) {
            font-size: 18px;
        }
    }
    p {
        display: flex;
        div {
            margin-right: 20px;
            padding: 10px;
            width: 288px;
            height: 120px;
            background-color: #f5f5f5;
            border-radius: 4px;
            h3 {
                font-size: 16px;
                color: #303030;
            }
            text {
                font-size: 16px;
                color: #737373;
            }
        }
    }
`
const Docs = styled.div`
    margin-top: 50px;
    h1 {
        font-size: 24px;
        color: #1e2a41;
    }
    div {
        display: flex;
        align-items: center;
    }
    * {
        margin: 10px;
    }
    text {
        font-size: 12px;
        color: #737373;
        span {
            color: #0e2b91;
            text-decoration: underline;
        }
    }
`
const Conditions = styled.div`
    flex-direction: column;
    p {
        display: flex;
        justify-content: space-between;
        @media (max-width: 320px) {
            flex-direction: column;
        }
    }
`
const DarkGray = styled.p`
    padding: 15px;
    margin: 0;
    background-color: #e0e0e099;
`
const Block = styled.div`
    margin-top: 20px;
    width: 45%;
    background-color: #f2f2f2;
    border-radius: 4px;
    @media (max-width: 320px) {
        width: 100%;
    }
    h1 {
        font-size: 24px;
        color: #1e2a41;
        @media (max-width: 320px) {
            font-size: 18px;
        }
    }
    div {
        padding: 15px;
        p {
            font-weight: 900;
            font-size: 18px;
        }
        text {
            font-size: 16px;
        }
    }
`
const Title = styled.div`
    margin-top: 30px;
    font-size: 30px;
    color: #1e2a41;
    @media (max-width: 320px) {
        font-size: 24px;
    }
`
const Item = styled.div<{ active?: boolean }>`
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 56px;
    color: ${({ active }) => (active ? 'white' : '#1e2a41')};
    background-color: ${({ active }) => (active ? '#1e2a41' : '#F2F2F2')};
`
const PagBlock = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;
    @media (max-width: 320px) {
    }
`
const StyledGet = styled.div`
    display: flex;
    flex-direction: column;
`
