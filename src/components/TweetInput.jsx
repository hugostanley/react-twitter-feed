import React from 'react'
import TweetDisplay from './TweetDisplay'

const TweetInput = props => {
  const { name, setName, data, setData, text, setText } = props

  const handleSubmit = e => {
    e.preventDefault()
    if (name && text) {
      const tweet = { id: new Date().getTime().toString(), name, text }
      setData(prevData => {
        return [...prevData, tweet]
      })
      setName('')
      setText('')
    }
  }
  return (
    <div >
      <form onSubmit={handleSubmit}>
        <input
          className="twt-login"
          value={name}
          id="user"
          placeholder="Input name here"
          onChange={e => setName(e.target.value)}
        ></input>
        <div className="input-con">
          <textarea
            className="twt-input"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="What's happening?"
          ></textarea>
          <button type="submit" className="twt-btn">
            Tweet
          </button>
        </div>
      </form>
      {data.map(item => {
        const { id, name, text } = item
        return <TweetDisplay key={id} name={name} text={text} />
      })}
    </div>
  )
}

export default TweetInput
