import api from '../lib/api'
import { Method } from 'axios'
import { useState } from 'react'

interface Props {
  method: Method
  url: string
}

type UseQueryReturnType<T> = [
  (body?: T) => Promise<void>,
  T | null,
  boolean,
  boolean
]

const useQuery = <T,>({ method, url }: Props): UseQueryReturnType<T> => {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isFail, setIsFail] = useState<boolean>(false)

  const query = async (body: any) => {
    setIsFail(false)
    try {
      setIsLoading(true)
      const { data } = await api<T>({ method, url, data: body })
      setData(data)
      setIsLoading(false)
    } catch (e) {
      setIsLoading(false)
      setIsFail(true)
    }
  }

  return [query, data, isLoading, isFail]
}

export default useQuery
