import Head from 'next/head'
// useState, useEffectを使えるようにする
import { useEffect, useState } from 'react'

export default function Home() {
  /**
   * stateの初期化
   * const [ 値1, 値2 ] = useState(初期値)
   * 値1 = 現在のステート
   * 直2 = ステートを更新するための関数(set〇〇と表すことが多い)
   */
  const [ count, setCount ] = useState(0)

  // オブジェクト型も保持することが可能
  const [ person, setPerson ] = useState({
    name: '田中',
    age: 20,
    isMale: true
  })

  // 性別を変える
  const updateMale = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      isMale: !prevPerson.isMale
    }))
  }

  /**
   * useEffect
   * 第1引数 実行させたい内容を記述
   * 第2引数 useEffectを発火させたい対象のデータを入れる(空にすると初回のみ実行される)
   */
  useEffect(() => {
    console.log(`${count}回clickされました。`)
  }, [count])

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
      <div>
        <ul>
          <li>私の名前は{person.name}です</li>
          <li>年齢は{person.age}歳です</li>
          <li>性別は{person.isMale ? '男' : '女'}です</li>
        </ul>
      </div>
      <div>
        <button
          onClick={updateMale}
        >
          性別を変える
        </button>
      </div>
    </>
  )
}
