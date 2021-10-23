import styled from 'styled-components'
import { BgImage } from '../assets/icons/banner/BgImage'

export const Banner = () => (
    <StyledBanner>
        <Name>
            <span>Forte</span> - Bank
        </Name>
        <BgImage />
    </StyledBanner>
)
const StyledBanner = styled.div`
    background-color: blue;
    color: white;
    width: 100%;
    height: 400px;
`
const Name = styled.div`
    font-size: 12px;
    span {
        text-decoration: underline;
    }
`
const Block = styled.div`
    height: 100%;
    * {
        margin: 10px;
    }
`
