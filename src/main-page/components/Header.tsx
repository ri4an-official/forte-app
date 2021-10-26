import styled from 'styled-components'
import { Logo } from '../assets/icons/header/Logo'
import { Location } from '../assets/icons/header/Location'
import { Phone } from '../assets/icons/header/Phone'
import { Profile } from '../assets/icons/header/Profile'
import { SelectArrow } from '../assets/icons/header/SelectArrow'

export const Header = () => (
    <StyledHeader>
        <ToRight>
            <Logo />
            <span>Рус</span>
            <SelectArrow />
        </ToRight>
        <SideTubs>
            <Location />
            Усть-Каменогорск
        </SideTubs>
        <div className='active'>Банк</div>
        <div>Маркет</div>
        <div>Mobile</div>
        <div>Путешествия</div>
        <div>Бизнес</div>
        <div>Club</div>
        <ToRight>
            <Phone />
            7575
        </ToRight>
        <SideTubs>
            <Profile />
            Войти
        </SideTubs>
    </StyledHeader>
)
const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    background-color: #f8f8f8;
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        flex-grow: 1;
        font-size: 16px;
        font-weight: 500;
        margin: 10px;
    }
    div.active {
        color: #9d2550;
        border-bottom: 2px solid #9d2550;
    }
`
const SideTubs = styled.p`
    margin: 10px;
    display: flex;
    align-items: center;
    height: 100%;
    flex-grow: 2;
    font-size: 14px;
    font-weight: 400;
    * {
        margin: 7px;
    }
`
const ToRight = styled(SideTubs)`
    justify-content: right;
`
