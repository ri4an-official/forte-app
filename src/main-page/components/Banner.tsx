import styled from 'styled-components'
import { BackArrow } from '../assets/icons/banner/BackArrow'
import { BgImage } from '../assets/icons/banner/BgImage'
import { NextArrow } from '../assets/icons/banner/NextArrow'
import { PaginationItem } from '../assets/icons/banner/PaginationItem'
import { SelectedItem } from '../assets/icons/banner/SelectedItem'
import img from './../assets/icons/banner/bg-image.jpeg'
export const Banner = () => (
    <StyledBanner>
        <WithArrow>
            <StyledArrow>
                {document.documentElement.clientWidth > 375 && <BackArrow />}
            </StyledArrow>
            <Block>
                <Name>
                    <span>Forte</span> - Bank
                </Name>
                <h1>До 3 000 000 &#8376;</h1>
                <p>Покупки без процентов</p>
                <div>
                    <StyledButton>Подробнее</StyledButton>
                </div>

                <Pagination>
                    <SelectedItem></SelectedItem>
                    <PaginationItem></PaginationItem>
                    <PaginationItem></PaginationItem>
                    <PaginationItem></PaginationItem>
                </Pagination>
            </Block>
        </WithArrow>
        <WithArrow>
            <Mobile>
                <BgImage />
            </Mobile>
            {document.documentElement.clientWidth > 375 && <NextArrow />}
        </WithArrow>
    </StyledBanner>
)
const StyledArrow = styled.div`
    height: 100%;
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: right;
`
const WithArrow = styled.div`
    cursor: pointer;
    height: 100%;
    display: flex;
    flex-grow: 1;
    align-items: center;
`
const Pagination = styled.div`
    * {
        margin: 4px;
    }
`
const StyledButton = styled.button`
    width: 153px;
    height: 42px;
    font-size: 16px;
    text-transform: none;
    font-weight: 500;
    color: #9d2550;
    background-color: white;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    text-align: center;
    @media (max-width: 375px) {
        margin-top: -30px !important;
        margin-bottom: -20px;
        width: 153px;
        height: 42px;
        background-color: #9d2550;
        color: white;
    }
`
const StyledBanner = styled.div`
    display: flex;
    align-items: center;
    background-image: url(${img});
    color: white;
    min-width: 1200px;
    height: 400px;
    @media (max-width: 375px) {
        min-width: 100%;
        height: 314px;
        div {
            div {
                h1 {
                    font-size: 24px;
                }
                p {
                    font-size: 16px;
                }
            }
        }
    }
`
const Mobile = styled.div`
    @media (max-width: 375px) {
        svg {
            width: 138px;
            height: 121px;
            object-fit: cover;
        }
    }
`
const Name = styled.div`
    font-size: 12px;
    span {
        text-decoration: underline;
    }
`
const Block = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-left: 40px;
    * {
        margin-top: 30px;
        flex-grow: 1;
    }
    h1 {
        font-size: 48px;
        font-weight: 500;
    }
    p {
        font-size: 18px;
    }
    @media (max-width: 375px) {
        margin-left: -40px;
    }
`
