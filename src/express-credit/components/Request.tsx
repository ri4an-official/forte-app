import styled from 'styled-components'
import { Facebook } from '../../main-page/assets/icons/footer/Facebook'
import { Instagram } from '../../main-page/assets/icons/footer/Instagram'
import { TikTok } from '../../main-page/assets/icons/footer/Tiktok'
import { YouTube } from '../../main-page/assets/icons/footer/YouTube'
import { StyledButton } from '../../main-page/components/Banner'
import { AppStore } from '../assets/svg/calculator/AppStore'
import { GooglePlay } from '../assets/svg/calculator/GogglePlay'
import img from '../assets/icons/bg-image-success.png'
import { useNavigate } from 'react-router-dom'

export const Request = () => {
    const nav = useNavigate()
    return (
        <StyledRequest>
            <div>
                <h3>Ваша заявка отправлена</h3>
                <p>
                    Спасибо, что вы с нами в Fortовые дни!Мы сейчас посмотрим вашу
                    заявку и перезвоним.
                </p>
            </div>
            <div>
                <AppStore />
                <GooglePlay />
            </div>
            <div>
                <text>
                    Пока предлагаем скачать наше мобильное приложение или подписаться на
                    соцсети.
                </text>
            </div>
            <div>
                <Facebook />
                <Instagram />
                <TikTok />
                <YouTube />
            </div>
            <Close onClick={() => nav(-1)}>Закрыть</Close>
        </StyledRequest>
    )
}
const StyledRequest = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
    background-image: url(${img});
    background-repeat: no-repeat;
    * {
        margin: 10px;
    }
    div {
        h3 {
            font-size: 18px;
            color: #1e2a41;
        }
        p {
            font-size: 14px;
        }
        text {
            font-size: 12px;
            color: #737373;
        }
    }
`
const Close = styled(StyledButton)`
    margin-top: 10px !important;
    width: 132px !important;
    width: 44px;
    background-color: #1e2a41;
    color: white;
`
