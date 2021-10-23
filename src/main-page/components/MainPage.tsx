import styled from 'styled-components'
import { Banner } from './Banner'
import { Calculator } from './Calculator'
import { Cards } from './Cards/Cards'
import { Header } from './Header'
import { Tubs } from './Tubs'

export const MainPage = () => {
    return (
        <StyledMainPage>
            <Header />
            <Tubs />
            <Banner />
            <Cards />
            <Calculator />
        </StyledMainPage>
    )
}
const StyledMainPage = styled.div`
    //! Измени шрифт на Rubik
    font-family: Arial, Helvetica, sans-serif;
`
