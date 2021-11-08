import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useInput } from '../../password-form/hooks/useInput'
import img from './../assets/icons/calculator/slider.svg'
export const Calculator = () => {
    const sum = useInput('5590000')
    const term = useInput('36')
    const [result, setResult] = useState(0)
    const [procent, setProcent] = useState(16.66)
    useEffect(() => {
        setResult(+sum.value / +term.value)
        setProcent((+sum.value / +term.value) * 0.0001 * 0.3)
    }, [sum, term])
    const toTerm = (months: number) => (months <= 12 ? months : months / 12)

    return (
        <CalcBlock>
            <h1>Кредит на любые цели</h1>
            <p>Предварительный расчет не является публичной оффертой</p>
            <StyledCalc>
                <Calc>
                    <Block>
                        <span>Сколько вам нужно?</span>
                        {document.documentElement.clientWidth > 375 ? (
                            <Line>
                                <InputRange
                                    id='range1'
                                    {...sum}
                                    min={10000}
                                    max={10000000}
                                    defaultValue={sum.value}
                                    step={90000}
                                    type='range'
                                />
                                <Result>
                                    {Number(sum.value).toLocaleString()} &#8376;
                                </Result>
                            </Line>
                        ) : (
                            <>
                                <Result>
                                    {Number(sum.value).toLocaleString()} &#8376;
                                </Result>
                                <InputRange
                                    id='range1'
                                    {...sum}
                                    min={10000}
                                    max={10000000}
                                    defaultValue={sum.value}
                                    step={90000}
                                    type='range'
                                />
                            </>
                        )}
                        <Range>
                            <Min>10 000 &#8376;</Min>
                            <Max>10 000 000 &#8376;</Max>
                        </Range>
                    </Block>
                    <Block>
                        <span>Срок кредитования</span>
                        {document.documentElement.clientWidth > 375 ? (
                            <Line>
                                <InputRange
                                    id='range2'
                                    {...term}
                                    defaultValue={sum.value}
                                    min={6}
                                    max={60}
                                    step={6}
                                    type='range'
                                />
                                <Result>
                                    {toTerm(+term.value)}{' '}
                                    {+term.value <= 12 ? 'месяцев' : 'лет'}
                                </Result>
                            </Line>
                        ) : (
                            <>
                                <ResultTime>
                                    {toTerm(+term.value)}{' '}
                                    {+term.value <= 12 ? 'мес.' : 'лет'}
                                </ResultTime>
                                <InputRange
                                    id='range2'
                                    {...term}
                                    defaultValue={sum.value}
                                    min={6}
                                    max={60}
                                    step={6}
                                    type='range'
                                />
                            </>
                        )}

                        <Range>
                            <Min>6 месяцев</Min>
                            <Max>5 лет</Max>
                        </Range>
                    </Block>
                    <Clarify>
                        <div className='toggle'>
                            <input type='checkbox' id='toggle1' />
                            <div className='toggle-handle'></div>
                            <label htmlFor='toggle1'></label>
                            <span>Я получаю зарплату по карте форте банк</span>
                        </div>
                        <p className='clarify'>
                            Для точного расчета необходимо оставить заявку
                        </p>
                    </Clarify>
                </Calc>
                {document.documentElement.clientWidth > 375 ? <VerticalLine /> : <hr />}
                <Amount>
                    <div>
                        <p>Ежемесячный платеж</p>
                        <Sum>{Number(result.toFixed(0)).toLocaleString()} &#8376;</Sum>
                    </div>
                    <div>
                        <p>Ставка вознаграждения</p>
                        <Procent>{procent.toFixed(2)}%</Procent>
                    </div>
                    <Center>
                        <StyledButton>Оформить кредит</StyledButton>
                    </Center>
                </Amount>
            </StyledCalc>
        </CalcBlock>
    )
}
const Center = styled.div`
    display: flex !important;
    justify-content: center !important;
`
export const Clarify = styled.div`
    * {
        margin: 2px;
    }
    & > label {
        color: #303030;
    }
    p.clarify {
        font-size: 14px;
        color: #737373;
    }
    .toggle {
        margin: 5px;
        position: relative;
    }
    .toggle input[type='checkbox'] {
        opacity: 0;
        position: absolute;
    }
    .toggle label {
        padding: 0.5px;
        background-color: rgb(238, 238, 238);
        border: 1px solid #999999;
        border-radius: 20px 20px 20px 20px;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.1) inset;
        height: 20px;
        position: relative;
        width: 34px;
        display: block;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .toggle input:checked ~ label {
        background-color: #9d2550;
        background-image: linear-gradient(to bottom, #9d2550 0px, #9d2550 100%);
        border: 1px solid darkgray;
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.25) inset;
    }
    .toggle .toggle-handle {
        background-color: #999999;
        background-image: linear-gradient(to bottom, #999999 0px, #999999 100%);
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 100px 100px 100px 100px;
        height: 16px;
        position: absolute;
        -webkit-transition: -webkit-transform 0.1s ease-in-out 0s,
            border 0.1s ease-in-out 0s;
        transition: transform 0.1s ease-in-out 0s, border 0.1s ease-in-out 0s;
        width: 16px;
        z-index: 2;
        pointer-events: none;
    }
    .toggle input:checked + .toggle-handle {
        border-color: #9d2550;
        -webkit-transform: translate3d(18px, 0px, 0px);
        transform: translate3d(18px, 0px, 0px);
    }
    .toggle label:after {
        color: #777777;
        font-weight: bold;
        line-height: 28px;
        position: absolute;
        right: 13px;
        text-shadow: 0 1px #ffffff;
        text-transform: uppercase;
    }
    .toggle input:checked ~ label:after {
        color: #ffffff;
        left: 15px;
        right: auto;
        text-shadow: 0 -1px rgba(0, 0, 0, 0.25);
    }
`
export const InputRange = styled.input`
    width: 75%;
    appearance: none;
    outline: none;
    cursor: pointer;
    border-radius: 20px;
    height: 4px;
    background-color: white;
    & {
        --range: calc(var(--max) - var(--min));
        --ratio: calc((var(--value) - var(--min)) / var(--range));
        --sx: calc(0.5 * 2em + var(--ratio) * (100% - 2em));
    }

    &::-webkit-slider-thumb {
        appearance: none;
        border-radius: 20px;
        width: 24px;
        height: 24px;
        background: url(${img}) no-repeat center white;
        box-shadow: 0px 2px 3px 1px darkgray;
        cursor: ew-resize;
        margin-top: -10px;
    }
    &::-webkit-slider-runnable-track {
        height: 4px;
        background: linear-gradient(#1e2a41, #1e2a41) 0 / var(--sx) 100% no-repeat,
            white;
    }
`
export const Range = styled.div`
    width: 75%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 375px) {
        width: 100%;
    }
`
export const Min = styled.div`
    font-size: 12px;
    color: #737373;
`
export const Max = styled.div`
    font-size: 12px;
    color: #737373;
`
export const StyledButton = styled.button`
    height: 44px;
    text-transform: none;
    font-size: 16px;
    font-size: 16px;
    border-radius: 4px;
    background-color: #1e2a41;
    color: white;
    border: none;
    cursor: pointer;
    text-align: center !important;
`
const Line = styled.span`
    display: flex;
    align-items: center;
`
const VerticalLine = styled.hr`
    width: 1px;
    border-left: 1px solid #e0e0e0;
    margin-left: 10px;
    margin-right: 10px;
`
const Amount = styled.div`
    width: 30%;
    * {
        margin: 20px;
    }
    p {
        font-size: 14px;
        color: #303030;
        @media (max-width: 320px) {
            width: 10%;
        }
    }
    @media (max-width: 375px) {
        width: 100%;
        flex-direction: column;
        * {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 0;
            margin-top: 10px;
            margin-right: 5px;
        }
    }
    @media (max-width: 320px) {
        * {
            margin-right: 0;
        }
    }
`

const Block = styled.div`
    width: 95%;
    height: 35%;
    @media (max-width: 320px) {
        span {
            width: 10%;
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
    @media (max-width: 375px) {
        font-size: 24px;
    }
`
const Result = styled.div`
    font-size: 24px;
    color: #303030;
    margin-left: 10px;
    @media (max-width: 375px) {
        display: inline-block;
        font-size: 18px;
        text-align: right;
        margin-left: 16px;
    }
    @media (max-width: 375px) {
        margin-left: 0px;
        display: block;
        text-align: right;
    }
`
const ResultTime = styled(Result)`
    @media (max-width: 375px) {
        margin-left: 70px;
    }
`
const StyledCalc = styled.div`
    width: 100%;
    height: 344px;
    display: flex;
    justify-content: center;
    background-color: #f2f2f2;
    padding: 20px;
    border-radius: 4px;
    @media (max-width: 375px) {
        width: 90%;
        padding: 15px;
        height: 591px;
        flex-direction: column;
        input,
        hr {
            width: 100%;
        }
        hr {
            color: #e0e0e0;
        }
    }
`
const Calc = styled.div`
    width: 90%;
    @media (max-width: 375px) {
        width: 100%;
    }
    height: 80%;
`
const CalcBlock = styled.div`
    width: 100%;
    h1 {
        color: #1e2a41;
        font-size: 30px;
    }
    p {
        margin-top: 10px;
        font-size: 16px;
        color: #303030;
    }
    @media (max-width: 375px) {
        h1 {
            font-size: 18px;
        }
    }
`
