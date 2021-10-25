import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core'
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
        // NOTE - maybe fix
        setProcent((+sum.value / +term.value / +term.value) * 12000)
    }, [sum, term])
    const toTerm = (months: number) => (months <= 12 ? months : months / 12)

    return (
        <CalcBlock>
            <h1>Кредит на любые цели</h1>
            <p>Предварительный расчет не является публичной оффертой</p>
            <StyledCalc>
                <Calc>
                    <Block>
                        <p>Сколько вам нужно?</p>
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
                        <Range>
                            <Min>10 000 &#8376;</Min>
                            <Max>10 000 000 &#8376;</Max>
                        </Range>
                    </Block>
                    <Block>
                        <p>Срок кредитования</p>
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
                        <Range>
                            <Min>6 месяцев</Min>
                            <Max>5 лет</Max>
                        </Range>
                    </Block>
                    <Clarify>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label='Я получаю зарплату по карте форте банк'
                            />
                            <p className='clarify'>
                                Для точного расчета необходимо оставить заявку
                            </p>
                        </FormGroup>
                    </Clarify>
                </Calc>
                <VerticalLine />
                <Amount>
                    <p>Ежемесячный платеж</p>
                    <Sum>{Number(result.toFixed(0)).toLocaleString()} &#8376;</Sum>
                    <p>Ставка вознаграждения</p>
                    <Procent>{procent.toFixed(2)}%</Procent>
                    <StyledButton>Оформить кредит</StyledButton>
                </Amount>
            </StyledCalc>
        </CalcBlock>
    )
}
const Clarify = styled.div`
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
    /* input[type='checkbox']:checked,
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
    } */
`
const InputRange = styled.input`
    width: 75%;
    appearance: none;
    outline: none;
    cursor: pointer;
    border-radius: 20px;
    height: 4px;
    background-color: white;
    --range: calc(var(--max) - var(--min));
    --ratio: calc((var(--value) - var(--min)) / var(--range));
    --sx: calc(0.5 * 2em + var(--ratio) * (100% - 2em));

    &::-webkit-slider-thumb {
        appearance: none;
        border-radius: 20px;
        width: 24px;
        height: 24px;
        // FIXME - fix slider
        background: url(${img}) no-repeat center white;
        box-shadow: 0px 2px 3px 1px darkgray;
        cursor: ew-resize;
    }
    &::-webkit-slider-runnable-track {
        background: linear-gradient(#1e2a41, #1e2a41) 0 / var(--sx) 100% no-repeat,
            white;
    }
`
const Range = styled.div`
    width: 75%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Min = styled.div`
    font-size: 12px;
    color: #737373;
`
const Max = styled.div`
    font-size: 12px;
    color: #737373;
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
