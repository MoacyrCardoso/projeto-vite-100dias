import { useEffect, useState, useRef } from 'react'
export default function useAxios(configRequest) {
    const { axiosInstance, method, url, othersConfig = {} } = configRequest
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const effectRun = useRef(false)

    useEffect(() => {
        const controller = new AbortController()

        const fetchData = async() => {
            try {
                const res = await axiosInstance[method.toLowerCase()](url, {
                    ...othersConfig,
                    signal: controller.signal
                })
                console.log(res.data)
                setData(res.data)


            } catch (err) {
                console.log(err.message)
                setError(err.message)

            } finally {
                setLoading(false)

            }

        }

        if (effectRun.current)
            fetchData()
        return () => {
            controller.abort()
            effectRun.current = true
        }

    }, [])

    return [data, loading, error]
}