import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import { CreditPage } from './express-credit/components/CreditPage'
import { Footer } from './main-page/components/Footer'
import { Header } from './main-page/components/Header'
import { MainPage } from './main-page/components/MainPage'
import { Tubs } from './main-page/components/Tubs'
// import { PasswordForm } from './password-form/components/PasswordForm'

export const App = () => (
    <StyledApp>
        <Header />
        <Tubs />
        <main>
            <Routes>
                <Route path='/credit' element={<CreditPage />} />
                <Route path='/' element={<MainPage />} />
            </Routes>
        </main>

        <Footer />
    </StyledApp>
)
const StyledApp = styled.div`
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
    a {
        text-decoration: none;
        color: inherit;
    }
    hr {
        display: block;
        height: 1px;
        border: 0;
        border-top: 1px solid #e0e0e0;
        margin: 1em 0;
        padding: 0;
    }
    input {
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }
`
