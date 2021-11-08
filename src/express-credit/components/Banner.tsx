import styled from 'styled-components'
import {
    Block,
    Name,
    StyledBanner,
    StyledButton,
} from '../../main-page/components/Banner'
import { BgImage } from '../assets/svg/banner/BgImage'

export const Banner = () => (
    <StyledBannerCredit>
        <Block>
            <Name>
                <span>Forte</span> - Bank - Кредиты - Экспресс-кредит
            </Name>
            <h1>Экспресс-кредит</h1>
            <p>Кредит без залога</p>
            <aside>
                <StyledButtonCredit>Подробнее</StyledButtonCredit>
            </aside>
        </Block>
        <Block>
            <BgImage />
        </Block>
    </StyledBannerCredit>
)

const StyledBannerCredit = styled(StyledBanner)`
    background-image: none;
    background-color: #f2f2f2;
    color: #1e2a41;
    div:first-child {
        margin-left: 200px;
        div {
            margin-left: 0;
        }
    }
`
const StyledButtonCredit = styled(StyledButton)`
    color: white;
    background-color: #9d2550;
`
