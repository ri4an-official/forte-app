import { useState } from 'react'
import styled from 'styled-components'
import { Plus } from '../assets/svg/calculator/Minus'

export const Questions = () => {
    const lorem = `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Repudiandae provident quae enim saepe accusantium voluptatem ab,
                    nihil aliquid corrupti amet officia quos blanditiis aperiam dolore
                    in at porro officiis tempora.`
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    const [show5, setShow5] = useState(false)
    const [show6, setShow6] = useState(false)
    const [show7, setShow7] = useState(false)
    const [show8, setShow8] = useState(false)
    return (
        <StyledQuestions>
            <h1>Частые вопросы про кредит</h1>
            <hr />
            <Item onClick={() => setShow1(!show1)} active={show1}>
                <p>Переоформить кредит на другого человека?</p>
                <Plus />
            </Item>
            {show1 && <text>{lorem}</text>}
            <hr />
            <Item onClick={() => setShow2(!show2)} active={show2}>
                <p>Что необходимо для выпуска карты?</p>
                <Plus />
            </Item>
            {show2 && <text>{lorem + lorem}</text>}
            <hr />
            <Item onClick={() => setShow3(!show3)} active={show3}>
                <p>Отказаться от кредита?</p>
                <Plus />
            </Item>
            {show3 && <text>{lorem + lorem + lorem}</text>}
            <hr />
            <Item onClick={() => setShow4(!show4)} active={show4}>
                <p>Узнать номер кредитного договора?</p>
                <Plus />
            </Item>
            {show4 && <text>{lorem}</text>}
            <hr />
            <Item onClick={() => setShow5(!show5)} active={show5}>
                <p>Получить отсрочку по кредиту?</p>
                <Plus />
            </Item>
            {show5 && <text>{lorem}</text>}
            <hr />
            <Item onClick={() => setShow6(!show6)} active={show6}>
                <p>Узнать о поступлении платежа по кредиту?</p>
                <Plus />
            </Item>
            {show6 && <text>{lorem}</text>}
            <hr />
            <Item onClick={() => setShow7(!show7)} active={show7}>
                <p>Заплатить за кредит другого человека?</p>
                <Plus />
            </Item>
            {show7 && <text>{lorem}</text>}
            <hr />
            <Item onClick={() => setShow8(!show8)} active={show8}>
                <p>Погасить досрочно без штрафов и комиссий?</p>
                <Plus />
            </Item>
            {show8 && <text>{lorem}</text>}
            <hr />
            <Outer>
                Если не нашли ответа на свой вопрос, позвоните на <span>7575</span> или
                напишите на электронный адрес <span>callcenter@forte.bank</span>
            </Outer>
        </StyledQuestions>
    )
}
const Outer = styled.aside`
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 12px;
    color: #999999;
    span {
        color: #0e2b91;
        text-decoration: underline;
    }
`
const StyledQuestions = styled.p`
    display: flex;
    flex-direction: column;
    h1 {
        font-size: 24px;
    }
    text {
        padding-left: 20px;
        font-size: 15px;
        color: #737373;
        animation: showtext 0.5s;
        @keyframes showtext {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
    }
`
const Item = styled.div<{ active?: boolean }>`
    margin: 0;
    padding-top: 0;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    p {
        font-size: 16px;
    }
    svg {
        transform: rotate(0deg);
        transform: ${({ active }) => active && 'rotate(135deg)'};
        transition: all 0.5s ease-in-out;
    }
`
