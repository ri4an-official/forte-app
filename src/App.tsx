import styled from 'styled-components'
import { PasswordForm } from './components/PasswordForm'

export const App = () => (
    <StyledApp>
        <PasswordForm />
    </StyledApp>
)
const StyledApp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
