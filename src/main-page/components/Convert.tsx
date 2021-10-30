import { useState } from 'react'
import styled from 'styled-components'
import useAsyncEffect from 'use-async-effect'
import { useInput } from '../../password-form/hooks/useInput'
import { Circle } from '../assets/icons/convert/Circle'
import { Dollar } from '../assets/icons/convert/Dollar'
import { Euro } from '../assets/icons/convert/Euro'
import { Gbp } from '../assets/icons/convert/Gbp'
import { Rub } from '../assets/icons/convert/Rub'
import { Tenge } from '../assets/icons/convert/Tenge'

const USD = 'usd',
    TEN = 'ten'
const BASE_URL = 'https://free.currconv.com/api/v7/convert?q='
const API_KEY = '92e9f85e29ae9d4dd6ce'
type Valute = 'usd' | 'eur' | 'ten' | 'rub' | 'gbp'

export const Convert = () => {
    const inpValue = useInput('0')
    const [result, setResult] = useState(0)

    const [usdCourse, setUsdCourse] = useState(0)
    const [euroCourse, setEuroCourse] = useState(0)
    const [rubCourse, setRubCourse] = useState(0)
    const [gbpCourse, setGpbCourse] = useState(0)

    const [selectedVal1, setSelectedVal1] = useState<Valute>(USD)
    const [selectedVal2, setSelectedVal2] = useState<Valute>(TEN)

    useAsyncEffect(async () => {
        // fetch(`${BASE_URL}USD_KZT&apiKey=${API_KEY}`)
        //     .then((r) => r.json())
        //     .then((r) => setUsdCourse(r.results.USD_KZT.val))
        // fetch(BASE_URL + 'EUR_KZT&apiKey=' + API_KEY)
        //     .then((r) => r.json())
        //     .then((r) => setEuroCourse(r.results.EUR_KZT.val))
        // fetch(BASE_URL + 'RUB_KZT&apiKey=' + API_KEY)
        //     .then((r) => r.json())
        //     .then((r) => setRubCourse(r.results.RUB_KZT.val))
        // fetch(BASE_URL + 'PHP_KZT&apiKey=' + API_KEY)
        //     .then((r) => r.json())
        //     .then((r) => setGpbCourse(r.results.PHP_KZT.val))
    }, [])
    const convert = () => {
        switch (selectedVal1) {
            case 'usd':
                switch (selectedVal2) {
                    case 'usd':
                        setResult(+inpValue.value)
                        break
                    case 'rub':
                        setResult(+inpValue.value * 70)
                        break
                    case 'eur':
                        setResult(+inpValue.value * 1.5)
                        break
                    case 'ten':
                        setResult(+inpValue.value * 426)
                        break
                    case 'gbp':
                        setResult(+inpValue.value * 15)
                        break
                }
                break
            case 'rub':
                switch (selectedVal2) {
                    case 'usd':
                        setResult(+inpValue.value / 70)
                        break
                    case 'rub':
                        setResult(+inpValue.value)
                        break
                    case 'eur':
                        setResult(+inpValue.value / 75)
                        break
                    case 'ten':
                        setResult(+inpValue.value * 6)
                        break
                    case 'gbp':
                        setResult(+inpValue.value / 2)
                        break
                }
                break
            case 'eur':
                switch (selectedVal2) {
                    case 'usd':
                        setResult(+inpValue.value * 0.8)
                        break
                    case 'rub':
                        setResult(+inpValue.value * 65)
                        break
                    case 'eur':
                        setResult(+inpValue.value)
                        break
                    case 'ten':
                        setResult(+inpValue.value * 450)
                        break
                    case 'gbp':
                        setResult(+inpValue.value * 13)
                        break
                }
                break
            case 'ten':
                switch (selectedVal2) {
                    case 'usd':
                        setResult(+inpValue.value / usdCourse)
                        break
                    case 'rub':
                        setResult(+inpValue.value / rubCourse)
                        break
                    case 'eur':
                        setResult(+inpValue.value / euroCourse)
                        break
                    case 'ten':
                        setResult(+inpValue.value)
                        break
                    case 'gbp':
                        setResult(+inpValue.value / gbpCourse)
                        break
                }
                break
            case 'gbp':
                switch (selectedVal2) {
                    case 'usd':
                        setResult(+inpValue.value * 23)
                        break
                    case 'rub':
                        setResult(+inpValue.value / 3)
                        break
                    case 'eur':
                        setResult(+inpValue.value * 130)
                        break
                    case 'ten':
                        setResult(+inpValue.value * 34)
                        break
                    case 'gbp':
                        setResult(+inpValue.value)
                        break
                }
                break
        }
    }
    return (
        <StyledConvert>
            <h2>Курсы безналичной конвертации валют</h2>
            <p>Курс актуален на {new Date().toLocaleDateString()}</p>
            <div>
                <Table>
                    <tr>
                        <td></td>
                        <td>Покупка</td>
                        <td>Продажа</td>
                    </tr>
                    <tr>
                        <td>
                            <Dollar /> <span>USD</span>
                        </td>
                        <td>{usdCourse.toFixed(2)}</td>
                        <td>{(usdCourse + 5).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>
                            <Euro /> <span>EUR</span>
                        </td>
                        <td>{euroCourse.toFixed(2)}</td>
                        <td>{(euroCourse + 25).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>
                            <Rub /> <span>RUB</span>
                        </td>
                        <td>{rubCourse.toFixed(2)}</td>
                        <td>{(rubCourse + 1.5).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>
                            <Gbp /> <span>GBP</span>
                        </td>
                        <td>{gbpCourse.toFixed(2)}</td>
                        <td>{(gbpCourse + 30).toFixed(2)}</td>
                    </tr>
                </Table>
                <ConvertForm>
                    <h4>Конвертация валюты</h4>
                    <LineBox>
                        <div>
                            <div>
                                <input {...inpValue} type='number' />
                            </div>
                            <Icons>
                                <Dollar
                                    click={() => setSelectedVal1('usd')}
                                    cn={selectedVal1 === 'usd' ? 'active' : ''}
                                />
                                <Euro
                                    click={() => setSelectedVal1('eur')}
                                    cn={selectedVal1 === 'eur' ? 'active' : ''}
                                />
                                <Rub
                                    click={() => setSelectedVal1('rub')}
                                    cn={selectedVal1 === 'rub' ? 'active' : ''}
                                />
                                <Gbp
                                    click={() => setSelectedVal1('gbp')}
                                    cn={selectedVal1 === 'gbp' ? 'active' : ''}
                                />
                                <Tenge
                                    click={() => setSelectedVal1('ten')}
                                    cn={selectedVal1 === 'ten' ? 'active' : ''}
                                />
                            </Icons>
                        </div>
                    </LineBox>

                    <StyledCircle onClick={convert}>
                        <Circle />
                    </StyledCircle>

                    <LineBox>
                        <div>
                            <Result>
                                <p className='result'>
                                    {Number(result.toFixed(2)).toLocaleString()}
                                </p>
                                <Icons>
                                    <Dollar
                                        click={() => setSelectedVal2('usd')}
                                        cn={selectedVal2 === 'usd' ? 'active' : ''}
                                    />
                                    <Euro
                                        click={() => setSelectedVal2('eur')}
                                        cn={selectedVal2 === 'eur' ? 'active' : ''}
                                    />
                                    <Rub
                                        click={() => setSelectedVal2('rub')}
                                        cn={selectedVal2 === 'rub' ? 'active' : ''}
                                    />
                                    <Gbp
                                        click={() => setSelectedVal2('gbp')}
                                        cn={selectedVal2 === 'gbp' ? 'active' : ''}
                                    />
                                    <Tenge
                                        click={() => setSelectedVal2('ten')}
                                        cn={selectedVal2 === 'ten' ? 'active' : ''}
                                    />
                                </Icons>
                            </Result>
                        </div>
                    </LineBox>
                </ConvertForm>
            </div>
        </StyledConvert>
    )
}
const StyledConvert = styled.div`
    @media (max-width: 375px) {
        margin-top: 80px;
    }
    & > div {
        display: flex;
        justify-content: space-between;
        flex-grow: 1;
        height: 207px;
        @media (max-width: 375px) {
            flex-wrap: wrap;
            * {
                width: 100%;
            }
        }
    }
    h2 {
        font-size: 30px;
        color: #1e2a41;
        @media (max-width: 375px) {
            font-size: 24px;
        }
    }
    & > div > p {
        font-size: 16px;
        color: #303030;
    }
    input,
    .result {
        width: 80%;
        outline: none;
        font-size: 24px;
        color: #303030;
        background-color: inherit;
        border: none;
    }
`
const Table = styled.table`
    width: 45%;
    height: 207px;
    tr {
        &:first-child {
            font-size: 12px;
        }
        &:nth-child(even) {
            background-color: #f2f2f2;
        }
        font-size: 20px;
        td:first-child {
            display: flex;
            align-items: center;
            * {
                margin-left: 10px;
                margin-top: 8px;
            }
            font-weight: bold;
            @media (max-width: 375px) {
                text-align: right;
            }
        }
        td {
            @media (max-width: 375px) {
                text-align: center;
                margin-left: 15px;
                width: 33%;
            }
        }
    }
`
const ConvertForm = styled.div`
    background-color: #f5f5f5;
    @media (max-width: 375px) {
        width: 100%;
        height: 239px;
        padding-left: 20px;
        padding-right: 20px;
        margin-left: 10px;
    }

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    input {
        line-height: 28.8px;
        margin-bottom: 10px;
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }
    & > * {
        margin-left: 70px;
        @media (max-width: 375px) {
            margin-left: 0;
        }
    }
    h4 {
        margin-top: 20px;
        color: #1e2a41;
        font-size: 24px;
        @media (max-width: 375px) {
            font-size: 18px;
        }
    }
`
const Result = styled.div`
    .result {
        width: 100%;
    }
    @media (max-width: 375px) {
        width: 100%;
    }
`
const LineBox = styled.div`
    border-bottom: 1px solid #737373;
    @media (max-width: 375px) {
        width: 100%;
    }
`
const StyledCircle = styled.div`
    position: absolute;
    top: 3280px;
    right: 530px;
    z-index: 10;
    cursor: pointer;
    @media (max-width: 375px) {
        * {
            width: 40px;
            height: 40px;
        }
        right: 170px;
        top: 4730px;
    }
`
const Icons = styled.div`
    * {
        stroke: #737373;
        cursor: pointer;
    }
    *:hover {
        stroke: #303030;
    }
    *:focus {
        stroke: #303030;
    }
    *.active {
        stroke: black;
        * {
            stroke: black;
        }
    }
`
