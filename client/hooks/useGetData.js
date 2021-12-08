import { useState, useEffect } from 'react'

import axios from 'axios'

const useGetData = (pageNumber) => {
  const url = process.env.NEXT_PUBLIC_SERVER_URL

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(false)

    let cansle
    axios({
      method: 'GET',
      url: `${url}/api`,
      params: { page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cansle = c)),
    })
      .then((res) => {
        setData((prev) => {
          return [...new Set([...prev, ...res.data.data])]
        })
        setHasMore(res.data.data.length > 0)
        setLoading(false)
      })
      .catch((e) => {
        if (axios.isCancel(e)) return
        setError(true)
      })
    return () => cansle()
  }, [pageNumber])

  return { data, loading, error, hasMore }
}

export default useGetData
