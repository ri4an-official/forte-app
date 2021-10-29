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
`
const Margin = styled.div`
    margin-left: 100px;
    margin-right: 100px;
    @media (min-width: 375px) {
        max-width: 375px;
        margin-left: 10px;
        margin-right: 10px;
        display: flex;
        flex-direction: column;
    }
`
