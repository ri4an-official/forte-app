import styled from 'styled-components'
import { AppStore } from '../assets/icons/extra-info/AppStore'
import { GooglePlay } from '../assets/icons/extra-info/GogglePlay'
import { Question } from '../assets/icons/extra-info/Question'
import earth from './../assets/icons/extra-info/earth.png'
import phone from './../assets/icons/extra-info/phone.png'
import phonefs from './../assets/icons/extra-info/phone-full-screen.png'
export const ExtraInfo = () => (
    <StyledInfo>
        <div>
            <p>
                <Block>
                    <h1>Перевод с карты на любую карту мира</h1>
                    {document.documentElement.clientWidth > 375 ? (
                        <LightButton>Подробнее</LightButton>
                    ) : (
                        <img className='earth' src={earth} alt='' />
                    )}
                </Block>
                {document.documentElement.clientWidth > 375 ? (
                    <img className='earth' src={earth} alt='' />
                ) : (
                    <DarkButton>Подробнее</DarkButton>
                )}
            </p>
            <p>
                <Block>
                    <h1>Оплата платежей online</h1>
                    <span>
                        Оплата штрафов, коммунальных услуг, услуг сотовых операторов и
                        многое другое
                    </span>
                    {document.documentElement.clientWidth <= 375 ? (
                        <DarkButton>Произвести платеж</DarkButton>
                    ) : (
                        <PhoneImg src={phone} alt='' />
                    )}
                </Block>
                {document.documentElement.clientWidth > 375 ? (
                    <DarkButton>Произвести платеж</DarkButton>
                ) : (
                    <PhoneImg src={phone} alt='' />
                )}
            </p>
        </div>
        <p>
            <aside>
                <Question />
                <h1>Как проверить, наложен ли на счет арест/ПТП?</h1>
                <p>
                    Информацию о том, наложен ли арест на ваш счёт вы можете узнать: -
                    на сайте Министерства юстиции РК в реестре должников по
                    исполнительным производствам; - в личном кабинете на портале
                    электронного правительства e-gov.kz.
                </p>
            </aside>
            <aside>
                <Question />
                <h1>Где посмотреть выписку по карте?</h1>
                <p>
                    Выписку по карте вы сможете посмотреть в своем Мобильном приложении
                    либо, обратившись в ближайшее отделение Банка.
                </p>
            </aside>
            <aside>
                <Question />
                <h1>Где посмотреть выписку по карте?</h1>
                <p>
                    CVC2/CVV2 — это трехзначный код, указанный на оборотной стороне
                    карты, на панели для подписи.
                </p>
            </aside>
        </p>
        <Mobile>
            <div>
                <h2>Попробуйте мобильное приложение Forte</h2>
                <ul>
                    <li>Оплата платежей</li>
                    <li>Денежные переводы</li>
                    <li>Управление лимитами</li>
                </ul>
                <p>
                    <AppStore />
                    <GooglePlay />
                </p>
            </div>
            <Phonefs src={phonefs} />
        </Mobile>
    </StyledInfo>
)
const StyledInfo = styled.div`
    div {
        display: flex;
        justify-content: center;
        @media (max-width: 375px) {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        & > p {
            height: 278px;
            width: 45%;
            @media (max-width: 375px) {
                width: 100%;
                height: 457px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                * {
                    width: 100%;
                }
                padding: 10px;
            }
            padding: 27px;
            background-color: #f2f2f2;
            .earth {
                margin-top: 60px;
                @media (max-width: 375px) {
                    margin-top: 0;
                }
                width: 240px;
                height: 170px;
            }
        }
    }
    p {
        display: flex;
        justify-content: space-between;
        @media (max-width: 375px) {
            flex-direction: column;
            flex-grow: 1;
            * {
                margin-top: 20px;
            }
        }
        aside {
            width: 31%;
            @media (max-width: 375px) {
                margin-top: 20px;
                width: 100%;
            }
            background-color: #f2f2f2;
            h1 {
                font-size: 18px;
            }
            p {
                font-size: 16px;
            }
            * {
                margin: 15px;
            }
        }
    }
`
const Mobile = styled.aside`
    display: flex;
    justify-content: center;
    background-color: #f2f2f2;
    @media (max-width: 375px) {
        width: 100%;
        margin-top: 10px;
        flex-wrap: wrap;
        height: 668px;
        & > div > p {
            height: 20%;
            display: flex;
            justify-content: space-between;
            flex-direction: row;
        }
    }
    & > div {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        margin-top: 100px;
        width: 100%;
        @media (max-width: 375px) {
            margin-top: 5px;
            width: 100%;
            height: 50%;
        }
        height: 100%;
        flex-direction: column;
        h2 {
            font-size: 24px;
        }
        ul {
            li {
                font-size: 16px;
                margin-top: 10px;
            }
        }
    }
`
const Phonefs = styled.img`
    width: 270px;
    height: 570px;
    z-index: 10;
    @media (max-width: 375px) {
        width: 176px;
        height: 350px;
    }
`
const PhoneImg = styled.img`
    width: 162px !important;
    height: 326px !important;
    @media (max-width: 375px) {
        width: 142px !important;
        height: 285px !important;
        margin-top: 0;
        margin-top: 10px;
    }
    object-fit: cover;
`
const Block = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80%;
    width: 44%;
    @media (max-width: 375px) {
        width: 100%;
        justify-content: center;
        align-items: center;
    }
    h1 {
        margin-top: 0;
        font-size: 24px;
    }
    p {
        font-size: 16px;
    }
`
const LightButton = styled.button`
    width: 153px;
    height: 44px;
    font-size: 16px;
    border-radius: 4px;
    border: none;
    background-color: white;
    color: #0e2b91;
`
const DarkButton = styled.button`
    width: 244px;
    height: 44px;
    font-size: 16px;
    border-radius: 4px;
    border: none;
    background-color: #1e2a41;
    color: white;
    @media (max-width: 375px) {
        width: 244px !important;
        height: 44px !important;
    }
`
