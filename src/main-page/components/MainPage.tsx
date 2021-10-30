import styled from 'styled-components'
import { Banner } from './Banner'
import { Calculator } from './Calculator'
import { Cards } from './Cards/Cards'
import { Convert } from './Convert'
import { ExtraInfo } from './ExtraInfo'
import { Footer } from './Footer'
import { Header } from './Header'
import { Tubs } from './Tubs'

export const MainPage = () => (
    <StyledMainPage>
        <Header />
        <Tubs />
        <Banner />
        <Margin>
            <Cards />
            <Calculator />
            <ExtraInfo />
            <Convert />
        </Margin>
        <Footer />
    </StyledMainPage>
)
const StyledMainPage = styled.div`
    font-family: 'Rubik';
    font-style: normal;
    color: #303030;
    @media (max-width: 375px) {
        display: flex;
        justify-content: center;
        flex-direction: column;
        max-width: 375px;
        * {
            max-width: 375px;
        }
        overflow-x: hidden;
    }
    img {
        object-fit: cover;
    }
`
const Margin = styled.div`
    margin-left: 100px;
    margin-right: 100px;
    @media (max-width: 375px) {
        margin-left: 20px;
        margin-right: 20px;
    }
`
