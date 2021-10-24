import { useState } from 'react'
import styled from 'styled-components'

export const Calculator = () => {
    // TODO - add functional
    const [sum, setSum] = useState(100000)
    const [result, setResult] = useState(2343042)
    const [term, setTerm] = useState(12)
    const [procent, setProcent] = useState(10.56)
    return (
        <CalcBlock>
            <h1>Кредит на любые цели</h1>
            <p>Предварительный расчет не является публичной оффертой</p>
            <StyledCalc>
                <Calc>
                    <Block>
                        <p>Сколько вам нужно?</p>
                        <Line>
                            <input
                                min={10000}
                                max={10000000}
                                defaultValue={(10000000 + 10000) / 2}
                                step={10000}
                                type='range'
                            />
                            <Result>{sum.toLocaleString()} &#8376;</Result>
                        </Line>
                        <Range>
                            <Min>10 000 &#8376;</Min>
                            <Max>10 000 000 &#8376;</Max>
                        </Range>
                    </Block>
                    <Block>
                        <p>Срок кредитования</p>
                        <Line>
                            <input
                                defaultValue={(612 + 6) / 2}
                                min={6}
                                max={612}
                                step={6}
                                type='range'
                            />
                            <Result>{term} месяцев</Result>
                        </Line>
                        <Range>
                            <Min>6 месяцев</Min>
                            <Max>5 лет</Max>
                        </Range>
                    </Block>
                    <Clarify>
                        <input id='cb' type='checkbox' name='' />
                        <label htmlFor='cb'>
                            Я получаю зарплату по карте форте банк
                        </label>
                        <p className='clarify'>
                            Для точного расчета необходимо оставить заявку
                        </p>
                    </Clarify>
                </Calc>
                <VerticalLine />
                <Amount>
                    <p>Ежемесячный платеж</p>
                    <Sum>{result.toLocaleString()} &#8376;</Sum>
                    <p>Ставка вознаграждения</p>
                    <Procent>{procent}%</Procent>
                    <StyledButton>Оформить кредит</StyledButton>
                </Amount>
            </StyledCalc>
        </CalcBlock>
    )
}
const Clarify = styled.div`
    * {
        margin: 10px;
    }
    & > label {
        color: #303030;
    }
    p.clarify {
        font-size: 14px;
        color: #737373;
    }
    input[type='checkbox']:checked,
    input[type='checkbox']:not(:checked) {
        position: absolute;
        left: -9999px;
    }
    input[type='checkbox']:checked + label,
    input[type='checkbox']:not(:checked) + label {
        display: inline-block;
        position: relative;
        padding-left: 28px;
        line-height: 20px;
        cursor: pointer;
    }
`
const Range = styled.div`
    width: 79%;
`
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
const Line = styled.span`
    display: flex;
    align-items: center;
`
const VerticalLine = styled.div`
    width: 1px;
    border-left: 1px solid #e0e0e0;
    margin-left: 20px;
    margin-right: 20px;
`
const Amount = styled.div`
    width: 30%;
    * {
        margin: 20px;
    }
    p {
        font-size: 14px;
        color: #303030;
    }
`
const Block = styled.div`
    width: 95%;
    height: 35%;
    input[type='range'] {
        width: 79%;
        color: #1e2a41;
        appearance: none;
        outline: none;
        background: white;
        cursor: pointer;
        border-radius: 20px;
        height: 4px;
        &::-webkit-slider-thumb {
            appearance: none;
            border-radius: 20px;
            width: 24px;
            height: 24px;
            // FIXME - fix slider
            background: #9d2550; //white;
        }
    }
`
const Procent = styled.div`
    font-size: 24px;
    color: #303030;
`
const Sum = styled.div`
    font-size: 30px;
    font-weight: 500;
    color: #9d2550;
`
const Min = styled.div`
    font-size: 12px;
    color: #737373;
    text-align: left;
`
const Max = styled.div`
    font-size: 12px;
    color: #737373;
    text-align: right;
`
const Result = styled.div`
    margin-left: 10px;
    font-size: 24px;
    color: #303030;
`
const StyledCalc = styled.div`
    width: 83%;
    height: 344px;
    display: flex;
    background-color: #f2f2f2;
    padding: 30px;
    border-radius: 4px;
`
const Calc = styled.div`
    width: 80%;
    height: 344px;
`
const CalcBlock = styled.div`
    width: 100%;
    margin: 50px 100px 40px 100px;
    h1 {
        color: #1e2a41;
        font-size: 30px;
    }
    p {
        font-size: 16px;
        color: #303030;
    }
`
