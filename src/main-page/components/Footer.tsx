import styled from 'styled-components'
import { DownArrow } from '../assets/icons/footer/DownArrow'
import { Eye } from '../assets/icons/footer/Eye'
import { Facebook } from '../assets/icons/footer/Facebook'
import { Instagram } from '../assets/icons/footer/Instagram'
import { TikTok } from '../assets/icons/footer/Tiktok'
import { YouTube } from '../assets/icons/footer/YouTube'

export const Footer = () => (
    <StyledFooter>
        {document.documentElement.clientWidth > 375 ? (
            <>
                <aside>
                    <div>
                        <p>Банк</p>
                        <p>Кредиты</p>
                        <p>Карты</p>
                        <p>Депозиты</p>
                        <p>Переводы</p>
                        <p>Мобильное приложение</p>
                        <p>Тарифы</p>
                        <p>Сейфовые ячейки</p>
                    </div>
                    <div>
                        <p>О нас</p>
                        <p>Информация</p>
                        <p>Руководство</p>
                        <p>Отчетность</p>
                        <p>Документы</p>
                        <p>Контакты</p>
                        <p>Отделения и банкоматы </p>
                        <p>Отделения в период карантина</p>
                        <p>Вакансии</p>
                    </div>
                    <div>
                        <p>Пресс-Центр</p>
                        <p>Новости</p>
                        <p>Пресс-релизы</p>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href='#'>press@forte.bank</a>
                    </div>
                    <div>
                        <p>Дополнительно</p>
                        <p>Premier</p>
                        <p>International Relations</p>
                        <p>Реализация имущества </p>
                        <p>175-летие Абая</p>
                        <p>Apple Pay</p>
                        <p>Samsung Pay</p>
                        <p>ForteForex</p>
                        <p>Специальные предложения</p>
                    </div>
                </aside>
                <hr />
            </>
        ) : (
            <Mobile>
                <p>
                    <span>Частным клиентам</span> <DownArrow />
                </p>
                <p>
                    <span>О нас</span> <DownArrow />
                </p>
                <p>
                    <span>Пресс-Центр</span> <DownArrow />
                </p>
                <p>
                    <span>Дополнительно</span> <DownArrow />
                </p>
            </Mobile>
        )}
        <aside>
            <div>
                <h4>Оставить обратную связь</h4>
                <p>Все права защищены © forte 2020</p>
            </div>
            <div>
                <Instagram />
                <Facebook />
                <YouTube />
                <TikTok />
            </div>
            <div>
                <StyledButton>
                    Версия для слобовидящих: <Eye />
                </StyledButton>
            </div>
        </aside>
    </StyledFooter>
)
const Mobile = styled.div`
    display: flex;
    flex-direction: column;
    p {
        width: 100%;
        svg {
            text-align: right;
        }
    }
`
const StyledFooter = styled.div`
    margin-top: 50px;
    width: 100%;
    height: 479px;
    background-color: #f8f8f8;
    display: flex;
    flex-direction: column;
    @media (max-width: 375px) {
        padding: 20px;
        flex-direction: column;
        margin-top: 300px;
        margin-left: 10px;
        margin-right: 10px;
        height: 412px;
    }
    aside {
        margin-left: 100px;
        margin-right: 100px;
        @media (max-width: 375px) {
            flex-direction: column;
            margin-left: 0;
            margin-right: 60px;
            text-align: center;
        }
        display: flex;
        justify-content: space-between;
        div > p:hover:not(:first-child),
        div > svg:hover {
            color: #9d2550;
            stroke: #9d2550;
            fill: #9d2550;
            cursor: pointer;
        }
        div > a {
            text-decoration: none;
            color: #0e2b91;
        }
        div > * {
            margin: 10px;
        }
        div {
            & > h4 {
                font-size: 16px;
                color: #0e2b91;
            }
            & > p {
                margin-top: 20px;
                font-size: 14px;
                color: #303030;
                &:first-child {
                    font-weight: 500;
                    font-size: 16px;
                }
            }
        }
    }
`
const StyledButton = styled.button`
    padding: 5px;
    width: 312px;
    height: 50px;
    font-size: 16px;
    background-color: #303030;
    color: white;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    * {
        margin: 5px;
    }
`
