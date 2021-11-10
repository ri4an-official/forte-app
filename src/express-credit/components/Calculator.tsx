import { Checkbox, Modal } from '@material-ui/core'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { StyledButton } from '../../main-page/components/Banner'
import { InputRange, Max, Min, Range } from '../../main-page/components/Calculator'
import { useInput } from '../../password-form/hooks/useInput'
import { Eye } from '../assets/svg/calculator/Eye'

export const Calculator = () => {
    const input = useInput('3000000')
    const [sum, setSum] = useState(0)
    const [term, setTerm] = useState(6)
    const [checked, setChecked] = useState(false)
    const [iin, showIin] = useState(false)
    const [show, showModal] = useState(false)
    const [procent, setProcent] = useState(16.99)
    const setterm = (term: number) => () => setTerm(term)
    const close = () => showModal(false)
    const open = () => showModal(true)
    useEffect(() => {
        setSum(+input.value / term / (1 + procent / 100))
    }, [input.value, term, procent])
    return (
        <Block>
            <Title>Рассчитать Экспресс-кредит</Title>
            <StyledCalculator>
                <InputBlock>
                    <ShowSum>
                        <div>Сумма кредита</div>
                        <p>{Number(input.value).toLocaleString()} &#8376;</p>
                    </ShowSum>

                    <InputRange
                        {...input}
                        type='range'
                        min='100000'
                        max='7000000'
                        step='300000'
                    />
                    <Range>
                        <Min>100 000 &#8376;</Min>
                        <Max>7 000 000 &#8376;</Max>
                    </Range>
                </InputBlock>
                <TermBlock>
                    <div>Срок кредита</div>
                    <p>
                        <TermButton
                            className={term === 6 ? 'active' : ''}
                            onClick={setterm(6)}
                        >
                            6
                        </TermButton>
                        <TermButton
                            className={term === 12 ? 'active' : ''}
                            onClick={setterm(12)}
                        >
                            12
                        </TermButton>
                        <TermButton
                            className={term === 18 ? 'active' : ''}
                            onClick={setterm(18)}
                        >
                            18
                        </TermButton>
                        <TermButton
                            className={term === 24 ? 'active' : ''}
                            onClick={setterm(24)}
                        >
                            24
                        </TermButton>
                        <TermButton
                            className={term === 36 ? 'active' : ''}
                            onClick={setterm(36)}
                        >
                            36
                        </TermButton>
                        <TermButton
                            className={term === 48 ? 'active' : ''}
                            onClick={setterm(48)}
                        >
                            48
                        </TermButton>
                        <TermButton
                            className={term === 60 ? 'active' : ''}
                            onClick={setterm(60)}
                        >
                            60
                        </TermButton>
                    </p>
                    <text>Срок в месяцах</text>
                </TermBlock>
                <hr />
                <ResultBlock>
                    <Result>
                        <div>
                            <p>Ежемесячный платеж</p>
                            <Sum>{Number(sum.toFixed(0)).toLocaleString()} &#8376;</Sum>
                        </div>
                        <div>
                            <p>Ставка вознаграждения</p>
                            <Sum>{procent.toFixed(2)}%</Sum>
                        </div>
                    </Result>
                    <CheckboxBlock>
                        <Checkbox
                            value={checked}
                            onClick={() => {
                                setChecked(!checked)
                                setProcent((p) => (checked ? p - 3 : p + 3))
                            }}
                        />
                        <p>Я получаю зарплату по карте форте банк</p>
                    </CheckboxBlock>
                </ResultBlock>
                <InputsBlock>
                    <span>
                        <input placeholder='ИИН' type={iin ? 'number' : 'password'} />
                        <EyeButton onClick={() => showIin(!iin)}>
                            <Eye />
                        </EyeButton>
                    </span>
                    <input placeholder='Номер телефона' type='number' />
                    <input placeholder='Основной ежемесяч. доход, ₸' type='number' />
                </InputsBlock>
                <Outer>
                    <p>
                        Продолжая я подтверждаю, что ознакомился с{' '}
                        <span onClick={open}>условиями соглашения</span> и даю согласие
                        на обработку своих персональных данных
                    </p>
                    <Modal open={show} onClose={close}>
                        <StyledModal>
                            <div>
                                <div onClick={close}>X</div>
                                <h1>Пользовательское соглашение</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit. Dolorem eum eveniet fugiat deserunt voluptates
                                    dicta at, delectus odit. Distinctio autem minima
                                    omnis voluptatibus dicta numquam nesciunt atque
                                    eveniet saepe alias?Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Dolorem eum eveniet
                                    fugiat deserunt voluptates dicta at, delectus odit.
                                    Distinctio autem minima omnis voluptatibus dicta
                                    numquam nesciunt atque eveniet saepe alias?Lorem
                                    ipsum dolor sit amet consectetur adipisicing elit.
                                    Dolorem eum eveniet fugiat deserunt voluptates dicta
                                    at, delectus odit. Distinctio autem minima omnis
                                    voluptatibus dicta numquam nesciunt atque eveniet
                                    saepe alias?Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Dolorem eum eveniet fugiat
                                    deserunt voluptates dicta at, delectus odit.
                                    Distinctio autem minima omnis voluptatibus dicta
                                    numquam nesciunt atque eveniet saepe alias?Lorem
                                    ipsum dolor sit amet consectetur adipisicing elit.
                                    Dolorem eum eveniet fugiat deserunt voluptates dicta
                                    at, delectus odit. Distinctio autem minima omnis
                                    voluptatibus dicta numquam nesciunt atque eveniet
                                    saepe alias?
                                </p>
                                <Center>
                                    <CreditButton onClick={close}>Принять</CreditButton>
                                </Center>
                            </div>
                        </StyledModal>
                    </Modal>
                    <div>Для точного расчета необходимо оставить заявку</div>
                    <CreditButton>Оформить кредит</CreditButton>
                </Outer>
            </StyledCalculator>
        </Block>
    )
}
const StyledModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    & > div {
        margin-top: 50px;
        padding: 30px;
        width: 40%;
        min-height: 300px;
        max-height: auto;
        background-color: #fff;
        border-radius: 4px;
        font-family: 'Rubik';
        outline: none;
        text-align: justify;
        h1 {
            text-align: center;
        }
        p {
            line-height: 130%;
        }
        div {
            text-align: right;
            font-weight: 900;
            cursor: pointer;
        }
    }
`
const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Outer = styled.div`
    width: 100%;
    * {
        margin-top: 20px;
    }
    p,
    div {
        font-size: 14px;
    }
    p {
        word-spacing: 5px;
        span {
            color: #0e2b91;
            text-decoration: underline;
            cursor: pointer;
        }
    }
    div {
        color: #737373;
    }
`
const CreditButton = styled(StyledButton)`
    width: 200px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #9d2550;
    color: white;
`
const InputsBlock = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 30px;
    width: 100%;
    input {
        height: 16px;
        background-color: #fff;
        padding: 20px;
        margin-top: 20px;
        display: flex;
        align-items: center;
        outline-color: #0e2b91;
        border: 1px solid #bdbdbd;
        border-radius: 4px;
        width: 42% !important;
        font-size: 16px;
        &:first-child {
            width: 100% !important;
        }
    }
    span {
        width: 93% !important;
        position: relative;
        /* &::after {
            content: ' *';
            color: red;
            position: absolute;
            top: -3px;
            left: 5px;
        } */
    }
`
const EyeButton = styled.div`
    position: absolute;
    left: 600px;
    top: 35px;
    cursor: pointer;
`
const CheckboxBlock = styled.div`
    padding: 10px;
    background-color: #e0e0e099;
    display: flex;
`
const ResultBlock = styled.div`
    display: flex;
    justify-content: space-between;
    & > * {
        width: 45%;
    }
`
const Result = styled.div`
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
            font-size: 14px;
        }
    }
`
const Sum = styled.div`
    font-size: 24px;
    color: #1e2a41;
`
const TermBlock = styled.div`
    display: flex;
    flex-direction: column;
    div {
        font-size: 16px;
    }
    text {
        font-size: 12px;
        color: #737373;
    }
    p {
        display: flex;
        justify-content: space-between;
    }
`
const TermButton = styled.button`
    width: 70px;
    height: 36px;
    background-color: #9d255066;
    color: white;
    border-radius: 4px;
    border: none;
    font-size: 18px;
    cursor: pointer;
    &.active {
        background-color: #9d2550;
    }
`
const ShowSum = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
        font-size: 16px;
        align-self: right;
    }
    p {
        padding: 10px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 180px;
        height: 34px;
        font-size: 24px;
        border-radius: 4px;
        background-color: white;
    }
`
const InputBlock = styled.div`
    display: flex;
    flex-direction: column;
    input,
    & > div {
        width: 100% !important;
    }
`
const Block = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > * {
        margin: 10px;
    }
`
const Title = styled.h1`
    font-size: 24px;
    color: #1e2a41;
`
const StyledCalculator = styled.div`
    padding: 20px;
    padding-left: 50px;
    padding-right: 50px;
    width: 60%;
    height: auto;
    background-color: #f2f2f2;
`