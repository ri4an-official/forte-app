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
                    <LightButton>Подробнее</LightButton>
                </Block>
                <img className='earth' src={earth} alt='' />
            </p>
            <p>
                <Block>
                    <h1>Оплата платежей online</h1>
                    <span>
                        Оплата штрафов, коммунальных услуг, услуг сотовых операторов и
                        многое другое
                    </span>
                    <DarkButton>Произвести платеж</DarkButton>
                </Block>
                <img className='phone' src={phone} alt='' />
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
            <img className='phonefs' src={phonefs} alt='' />
        </Mobile>
    </StyledInfo>
)
const StyledInfo = styled.div`
    div {
        display: flex;
        justify-content: space-between;
        & > p {
            height: 278px;
            width: 44%;
            padding: 27px;
            background-color: #f2f2f2;
            .earth {
                margin-top: 60px;
                width: 240px;
                height: 170px;
            }
            // FIXME - cut phone
            .phone {
                width: 162px;
                height: 326px;
                object-fit: cover;
            }
        }
    }
    p {
        display: flex;
        justify-content: space-between;
        height: 350px;
        aside {
            width: 31%;
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
// FIXME - fix img align, add width full screen
const Mobile = styled.aside`
    display: flex;
    * {
        flex-grow: 1;
    }
    div {
        padding: 20px;
        margin-top: 100px;
        width: 100%;
        height: 323px;
        background-color: #f2f2f2;
        flex-direction: column;
        h2 {
            font-size: 24px;
        }
        ul {
            li {
                font-size: 16px;
                margin: 10px;
            }
        }
        p {
            display: flex;
            justify-content: flex-start;
        }
    }
    .phonefs {
        width: 270px;
        height: 570px;
    }
`
const Block = styled.div`
    display: flex;
    flex-direction: column;
    width: 49%;
    h1 {
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
`
