import React, {useState} from 'react'
import TweetInput from './TweetInput'

const Tweet = () => {
  const [data, setData] = useState([])
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  return (
    <div className='twt'>
      <TweetInput
        data={data}
        setData={setData}
        name={name}
        setName={setName}
        text={text}
        setText={setText}

      />
    </div>
  )
}

export default Tweet
