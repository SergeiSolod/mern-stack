import {useState, useCallback} from 'react'

export const useHttp = () => {
    // асинхронные запросы на сервер через нативный fetch
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)
        try {
            // приводим данные с сервера к строке
            if (body) {
                body = JSON.stringify(body)
                // указываем, что передаём JSON
                headers['Content-Type'] = 'application/json'
            }

            const response = await fetch(url, {
                method, body, headers
            })
            const data = await response.json()
            if (!response.ok) {
                throw new Error(data.message || 'Что-то пошло не так')
            }
            setLoading(false)
            return data
        } catch (e) {
            setLoading(false)
            setError(e.message)
            throw e
        }
    }, [])

    const clearError = useCallback(() => setError(null), [])

    return {loading, request, error, clearError}
}