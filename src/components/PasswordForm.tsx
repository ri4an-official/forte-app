import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useInput } from '../models/hooks/useInput'
import { WarningIcon } from './icons/WarningIcon'
export const PasswordForm = () => {
    const password = useInput()
    const newPassword = useInput()
    const [equalPasswords, setEqualPasswords] = useState(true)
    useEffect(() => {
        setEqualPasswords(
            !!password.value &&
                !!newPassword.value &&
                password.value === newPassword.value &&
                !password.error &&
                !newPassword.error
        )
    }, [password.value, password.error, newPassword.value, newPassword.error])
    return (
        <Form>
            <Header>Проверка пароля</Header>
            <h1>Пароль</h1>
            <Wish>Придумайте новый пароль</Wish>
            <Input
                defaultValue=' '
                className={password.error && 'error'}
                {...password}
                placeholder='Придумайте пароль*'
            />
            {password.error && <Error>{password.error}</Error>}
            <Input
                defaultValue=' '
                className={newPassword.error && 'error'}
                {...newPassword}
                placeholder='Повторите пароль*'
            />
            {newPassword.error && <Error>{newPassword.error}</Error>}
            <Conditions>
                <p>Пароль должен содержать:</p>
                <ul>
                    <li>латинские буквы</li>
                    <li>1 заглавную латинскую букву</li>
                    <li>цифры 0-9</li>
                    <li>символы (#№$%:?*())</li>
                    <li>запрет последовательности букв (qwerty), цифр (123456)</li>
                </ul>
            </Conditions>
            <Warning>
                <p>
                    <Icon>
                        <WarningIcon />
                    </Icon>
                </p>
                <p>
                    Введеный пароль будет являться паролем для выпущенной ЭЦП.
                    <br />
                    Запомните введеные данные!
                </p>
            </Warning>
            {!equalPasswords && <Error>Пароли не равны!</Error>}
            <Button
                onClick={() => alert('Пароль успешно изменен!')}
                disabled={!equalPasswords}
            >
                Подтвердить
            </Button>
        </Form>
    )
}
const Error = styled.label`
    font-size: 14px;
    color: red;
    margin-bottom: -10px;
`
const Icon = styled.svg`
    width: 24px;
    height: 24px;
    fill: darkgray;
`
const Header = styled.div`
    font-size: 14px;
    margin-bottom: 30px;
`
const Wish = styled.div`
    color: darkgray;
    font-size: 17px;
`
const Conditions = styled.div`
    width: 55%;
`
const Warning = styled.div`
    display: flex;
    border: 1px solid darkgray;
    border-radius: 11px;
    color: darkgray;
    width: 55%;
    font-size: 13px;
`
const Input = styled.input`
    &::placeholder {
        color: darkgray;
    }
    &.error {
        border-color: red;
    }
    font-weight: bold;
    font-size: 14px;
    width: 50%;
    border: 1px solid darkgray;
    border-radius: 11px;
    padding: 13px;
`
const Form = styled.div`
    padding: 10px;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 600px;
    * {
        margin: 10px;
    }
    li {
        color: darkgray;
        font-size: 14px;
        &::marker {
            font-size: 20px;
            color: gray;
        }
    }
`
const Button = styled.button`
    &:disabled {
        background-color: darkgray;
        cursor: default;
    }
    cursor: pointer;
    margin-top: 20px;
    width: 30%;
    height: 50px;
    padding: 5px;
    font-size: 15px;
    background-color: #ee1d75;
    color: white;
    border-radius: 11px;
    border: none;
`
