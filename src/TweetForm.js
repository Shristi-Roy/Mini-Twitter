import React, { useState } from 'react';

export default function TweetForm({ addTweet }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTweet(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="tweet-form">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's happening?"
        maxLength={280}
        rows={3}
      />
      <button type="submit">Tweet</button>
    </form>
  );
}
