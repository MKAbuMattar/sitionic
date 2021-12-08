import { Fragment, useState, useRef, useCallback } from 'react'
import useGetData from '../../hooks/useGetData'

const Main = () => {
  const [page, setPage] = useState(1)

  const { data, loading, error, hasMore } = useGetData(page)

  const observer = useRef()

  const lastDataElementRef = useCallback(
    (node) => {
      if (loading) return

      if (observer.current) observer.current.disconnect()

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1)
        }
      })

      if (node) observer.current.observe(node)
    },
    [loading, hasMore],
  )

  return (
    <Fragment>
      <section className="container">
        <div className="cards">
          {data.length > 0 ? (
            <Fragment>
              {data.map((result, idx) => (
                <Fragment>
                  {data.length === idx + 1 ? (
                    <Fragment>
                      <div ref={lastDataElementRef} key={idx} className="card">
                        <img
                          src={result.thumbnail}
                          alt={result.name}
                          title={result.name}
                          className="cardImg"
                        />
                        <div className="cardBody">
                          <p>Name: {result.name}</p>
                          <a
                            href={result.image}
                            title={result.name}
                            download={result.image}
                            target="__blank"
                          >
                            Download
                          </a>
                          <p>Resolution: {result.resolution}</p>
                          <p>Tags: {result.tags}</p>
                        </div>
                      </div>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <div key={idx} className="card">
                        <img
                          src={result.thumbnail}
                          alt={result.name}
                          title={result.name}
                          className="cardImg"
                        />
                        <div className="cardBody">
                          <p>Name: {result.name}</p>
                          <a
                            href={result.image}
                            title={result.name}
                            download={result.image}
                            target="__blank"
                          >
                            Download
                          </a>
                          <p>Resolution: {result.resolution}</p>
                          <p>Tags: {result.tags}</p>
                        </div>
                      </div>
                    </Fragment>
                  )}
                </Fragment>
              ))}
            </Fragment>
          ) : (
            <Fragment></Fragment>
          )}
        </div>

        {loading && (
          <Fragment>
            <h1>loading...</h1>
          </Fragment>
        )}
      </section>
    </Fragment>
  )
}

export default Main
