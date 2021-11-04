import styled from 'styled-components'
import { Logo } from '../assets/icons/header/Logo'
import { Location } from '../assets/icons/header/Location'
import { Phone } from '../assets/icons/header/Phone'
import { Profile } from '../assets/icons/header/Profile'
import { SelectArrow } from '../assets/icons/header/SelectArrow'
import { Menu } from '../assets/icons/header/Menu'

export const Header = () => (
    <StyledHeader>
        {document.documentElement.clientWidth > 375 ? (
            <ToRight>
                <Logo />
                <span>Рус</span>
                <SelectArrow />
            </ToRight>
        ) : (
            <Mobile>
                <Left>
                    <span>
                        <Menu />
                    </span>
                    <Logo />
                </Left>
                <Right>
                    <Profile />
                    Войти
                </Right>
            </Mobile>
        )}

        {document.documentElement.clientWidth > 375 && (
            <>
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
            </>
        )}
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
        font-size: 16px;
        font-weight: 500;
        margin: 10px;

        &.active {
            color: #9d2550;
            border-bottom: 2px solid #9d2550;
        }
        &:hover {
            cursor: pointer;
            color: #9d2550;
        }
        &:focus {
            color: #9d2550;
            border-bottom: 2px solid #9d2550;
        }
    }

    @media (max-width: 375px) {
        width: 375px;
        display: flex;
        justify-content: space-between;
        align-content: space-between;
    }
    @media (max-width: 320px) {
        width: 320px;
    }
`
const Mobile = styled.div`
    display: flex;
    div > * {
        flex-grow: 1;
        margin: 5px;
    }
`
const Left = styled.div`
    align-self: left;
`
const Right = styled.div`
    margin-left: 170px !important;
    @media (max-width: 320px) {
        margin-left: 120px !important;
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
