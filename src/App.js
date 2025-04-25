import React, { useState, useEffect } from 'react';
import TweetForm from './TweetForm';
import TweetList from './TweetList';

export default function App() {
  const [tweets, setTweets] = useState(() => {
    const saved = localStorage.getItem('tweets');
    return saved ? JSON.parse(saved) : [];
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem('tweets', JSON.stringify(tweets));
  }, [tweets]);

  const addTweet = (text) => {
    const newTweet = {
      id: Date.now(),
      text,
      liked: false,
      createdAt: new Date().toLocaleString(),
    };
    setTweets([newTweet, ...tweets]);
  };

  const deleteTweet = (id) => {
    setTweets(tweets.filter(tweet => tweet.id !== id));
  };

  const toggleLike = (id) => {
    setTweets(
      tweets.map(tweet =>
        tweet.id === id ? { ...tweet, liked: !tweet.liked } : tweet
      )
    );
  };

  const toggleEdit = (id, newText) => {
    setTweets(tweets.map(tweet => (tweet.id === id ? { ...tweet, text: newText } : tweet)));
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const filteredTweets = tweets.filter(tweet =>
    tweet.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app" style={{ backgroundColor: isDarkMode ? '#333' : '#ff9a8b', color: isDarkMode ? '#fff' : '#fff' }}>
      <h1>Mini Twitter 🐦</h1>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <input
        type="text"
        placeholder="Search tweets..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '10px', borderRadius: '5px', marginBottom: '20px' }}
      />
      <TweetForm addTweet={addTweet} />
      <TweetList tweets={filteredTweets} deleteTweet={deleteTweet} toggleLike={toggleLike} toggleEdit={toggleEdit} />
    </div>
  );
}
