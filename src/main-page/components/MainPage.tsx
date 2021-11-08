import styled from 'styled-components'
import { Banner } from './Banner'
import { Calculator } from './Calculator'
import { Cards } from './Cards/Cards'
import { Convert } from './Convert'
import { ExtraInfo } from './ExtraInfo'
export const MainPage = () => (
    <StyledMainPage>
        <Banner />
        <Margin>
            <Cards />
            <Calculator />
            <ExtraInfo />
            <Convert />
        </Margin>
    </StyledMainPage>
)
const StyledMainPage = styled.div``
export const Margin = styled.div`
    margin-left: 100px;
    margin-right: 100px;
    @media (max-width: 375px) {
        margin-left: 20px;
        margin-right: 20px;
    }
`
