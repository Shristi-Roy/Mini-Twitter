import React from 'react';
import TweetItem from './TweetItem';

export default function TweetList({ tweets, deleteTweet, toggleLike, toggleEdit }) {
  return (
    <div className="tweet-list">
      {tweets.length === 0 && <p>No tweets yet!</p>}
      {tweets.map(tweet => (
        <TweetItem 
          key={tweet.id} 
          tweet={tweet} 
          deleteTweet={deleteTweet} 
          toggleLike={toggleLike} 
          toggleEdit={toggleEdit} 
        />
      ))}
    </div>
  );
}
