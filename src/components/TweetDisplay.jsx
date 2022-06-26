import React from 'react'

const TweetDisplay = ({ text, name }) => {
  return (
    <div className="twt-con">
      <section>
        <span className="material-symbols-outlined userLogo">
          account_circle
        </span>
      </section>
      <section>
        <div className='userInfo'>
          <h4 className="username">{name} </h4>
          <span>{`@${name.replace(/\s/g, '') }`}</span>
        </div>
        <h3 className="text">{text}</h3>
      </section>
    </div>
  )
}

export default TweetDisplay
