import styled from 'styled-components'
import { Banner } from './Banner'
import { Calculator } from './Calculator'
import { Cards } from './Cards/Cards'
import { Header } from './Header'
import { Tubs } from './Tubs'

export const MainPage = () => (
    <StyledMainPage>
        <Header />
        <Tubs />
        <Banner />
        <Cards />
        <Calculator />
    </StyledMainPage>
)
const StyledMainPage = styled.div`
    font-family: 'Rubik';
    font-style: normal;
`
