import styled from 'styled-components'
import { BackArrow } from '../assets/icons/banner/BackArrow'
import { BgImage } from '../assets/icons/banner/BgImage'
import { NextArrow } from '../assets/icons/banner/NextArrow'
import { PaginationItem } from '../assets/icons/banner/PaginationItem'

// FIXME - change first item and bg-color
export const Banner = () => (
    <StyledBanner>
        <WithArrow>
            <BackArrow />
            <Block>
                <Name>
                    <span>Forte</span> - Bank
                </Name>
                <h1>До 3 000 000 &#8376;</h1>
                <p>Покупки без процентов</p>
                <StyledButton>Подробнее</StyledButton>
                <Pagination>
                    <PaginationItem></PaginationItem>
                    <PaginationItem></PaginationItem>
                    <PaginationItem></PaginationItem>
                    <PaginationItem></PaginationItem>
                </Pagination>
            </Block>
        </WithArrow>
        <WithArrow>
            <BgImage />
            <NextArrow />
        </WithArrow>
    </StyledBanner>
)
const WithArrow = styled.div`
    height: 100%;
    display: flex;
    flex-grow: 1;
    align-items: center;
`
const Pagination = styled.div`
    * {
        margin: 4px;
    }
    &:first-child {
        color: #1e2a41;
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
`
const StyledBanner = styled.div`
    display: flex;
    align-items: center;
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
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-left: 200px;
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
`
