import { useContext } from 'react'
import { TitleContext } from '..'

export default function Sample4() {
  // useContextの利用
  const title = useContext(TitleContext)
  return (
    <>
      <div>
        <p>{title}</p>
      </div>
    </>
  )
}
