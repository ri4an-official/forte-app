export const PasswordForm = () => (
    <div className='password-form'>
        <p className='header'>Проверка пароля</p>
        <form>
            <h1>Пароль</h1>
            <div>Придумайте пароль</div>
            <input placeholder='Придумайте пароль*' />
            <input placeholder='Поавторите пароль*' />
            <div className='conditions'>
                <p>Пароль должен содержать:</p>
                <ul>
                    <li>латинские буквы</li>
                    <li>1 заглавную латинскую букву</li>
                    <li>цифры 0-9</li>
                    <li>символы (#№$%:?*())</li>
                    <li>запрет последовательности букв (qwerty), цифр (123456)</li>
                </ul>
            </div>
            <div className='warning'>
                Введеный пароль будет паролем для ЭЦП. <br />
                Запомните введеные данные
            </div>
            <button type='submit'>Подтвердить</button>
        </form>
    </div>
)
