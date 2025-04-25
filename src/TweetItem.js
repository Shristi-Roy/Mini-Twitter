import React, { useState } from 'react';

export default function TweetItem({ tweet, deleteTweet, toggleLike, toggleEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(tweet.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    toggleEdit(tweet.id, editedText);
    setIsEditing(false);
  };

  return (
    <div className="tweet-item">
      {isEditing ? (
        <div>
          <textarea
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            rows="3"
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <p>{tweet.text}</p>
      )}
      <div className="tweet-meta">
        <span>{tweet.createdAt}</span>
        <button onClick={() => toggleLike(tweet.id)}>
          {tweet.liked ? '❤️' : '🤍'}
        </button>
        <button onClick={() => deleteTweet(tweet.id)}>🗑️</button>
        {!isEditing && <button onClick={handleEdit}>✏️</button>}
      </div>
    </div>
  );
}
