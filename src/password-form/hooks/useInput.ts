import { useEffect, useState } from 'react'

export const useInput = (initValue = '') => {
    const [value, setValue] = useState(initValue)
    const [error, setError] = useState('')
    const [firstInp, setFirstInp] = useState(false)
    useEffect(() => {
        if (
            value &&
            (value.includes('#') ||
                value.includes('№') ||
                value.includes('$') ||
                value.includes('%') ||
                value.includes(':') ||
                value.includes('?') ||
                value.includes('*') ||
                value.includes('(') ||
                value.includes(')')) &&
            !value.includes('qwerty') &&
            !value.includes('123456') &&
            /d/.test(value) &&
            /[A-Z]/.test(value)
        )
            setError('')
        else if (firstInp && value.split('').some((s) => s !== s.toUpperCase()))
            setError('Пароль не соответствует требованиям безопасности')
    }, [firstInp, value])
    return {
        value,
        onChange: (e: any) => {
            setValue(e.target.value)
            setFirstInp(true)
        },
        error,
    }
}
