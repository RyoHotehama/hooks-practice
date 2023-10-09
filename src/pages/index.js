import Head from 'next/head'
// useStateを使えるようにする
import { useState } from 'react'

export default function Home() {
  /**
   * stateの初期化
   * const [ 値1, 値2 ] = useState(初期値)
   * 値1 = 現在のステート
   * 直2 = ステートを更新するための関数(set〇〇と表すことが多い)
   */
  const [ count, setCount ] = useState(0)
  return (
    <>
      <Head>
        <title>React Hooks Practice</title>
        <meta name="description" content="Hooksの練習" />
      </Head>
      <div>
        <p>
          {count}回Clickしました。
        </p>
      </div>
      <div>
        <button
          onClick={() => setCount((count) => count + 1)}
        >
          Click
        </button>
      </div>
    </>
  )
}
