import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentMessage, setCurrentMessage] = useState(null);
  const [usedMessages, setUsedMessages] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [hearts, setHearts] = useState([]);

  // Your messages - you can add more here!
  const messages = [
    {
      type: 'text',
      content: 'Every moment with you feels like a beautiful dream I never want to wake up from.'
    },
    {
      type: 'text',
      content: 'You make my world brighter just by being in it. Happy Valentine\'s Day, my love! 💕'
    },
    {
      type: 'text',
      content: 'I fall for you more and more every single day.'
    },
    {
      type: 'text',
      content: 'You\'re not just my Valentine, you\'re my forever.'
    },
    {
      type: 'text',
      content: 'Thank you for being the most amazing person in my life. I love you!'
    },
    // To add an image, use this format:
    // {
    //   type: 'image',
    //   src: '/images/photo1.jpg',
    //   caption: 'Remember this day? ❤️'
    // }
  ];

  const generateHeart = () => {
    const newHeart = {
      id: Date.now() + Math.random(),
      left: Math.random() * 100,
      animationDuration: 3 + Math.random() * 2,
      size: 20 + Math.random() * 20,
    };
    
    setHearts(prev => [...prev, newHeart]);
    
    setTimeout(() => {
      setHearts(prev => prev.filter(h => h.id !== newHeart.id));
    }, 5000);
  };

  const getRandomMessage = () => {
    if (messages.length === 0) return null;
    
    let availableMessages = messages.filter((_, index) => !usedMessages.includes(index));
    
    if (availableMessages.length === 0) {
      setUsedMessages([]);
      availableMessages = messages;
    }
    
    const randomIndex = Math.floor(Math.random() * availableMessages.length);
    const selectedMessage = availableMessages[randomIndex];
    const originalIndex = messages.indexOf(selectedMessage);
    
    setUsedMessages(prev => [...prev, originalIndex]);
    
    return selectedMessage;
  };

  const handleButtonClick = () => {
    // Generate hearts
    for (let i = 0; i < 5; i++) {
      setTimeout(() => generateHeart(), i * 100);
    }

    // Show new message
    setShowMessage(false);
    setTimeout(() => {
      const message = getRandomMessage();
      setCurrentMessage(message);
      setShowMessage(true);
    }, 300);
  };

  return (
    <div className="app">
      {/* Floating hearts animation */}
      <div className="hearts-container">
        {hearts.map(heart => (
          <div
            key={heart.id}
            className="floating-heart"
            style={{
              left: `${heart.left}%`,
              animationDuration: `${heart.animationDuration}s`,
              fontSize: `${heart.size}px`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="content">
        <h1 className="title">
          <span className="heart-icon">💝</span>
          For My Valentine
          <span className="heart-icon">💝</span>
        </h1>

        <p className="subtitle">Tap the button to discover how much you mean to me</p>

        {/* Message display */}
        <div className={`message-container ${showMessage ? 'show' : ''}`}>
          {currentMessage && (
            <>
              {currentMessage.type === 'text' ? (
                <p className="message-text">{currentMessage.content}</p>
              ) : (
                <div className="message-image">
                  <img src={currentMessage.src} alt="Memory" />
                  {currentMessage.caption && (
                    <p className="image-caption">{currentMessage.caption}</p>
                  )}
                </div>
              )}
            </>
          )}
        </div>

        {/* The button */}
        <button className="valentine-button" onClick={handleButtonClick}>
          <span className="button-text">Show Me Love</span>
          <span className="button-heart">💖</span>
        </button>

        <p className="counter">
          {usedMessages.length > 0 && (
            <span className="message-count">
              {usedMessages.length} of {messages.length} messages revealed
            </span>
          )}
        </p>
      </div>

      {/* Background decoration */}
      <div className="background-hearts">
        <div className="bg-heart" style={{ top: '10%', left: '10%' }}>💕</div>
        <div className="bg-heart" style={{ top: '20%', right: '15%' }}>💗</div>
        <div className="bg-heart" style={{ bottom: '15%', left: '20%' }}>💓</div>
        <div className="bg-heart" style={{ bottom: '25%', right: '10%' }}>💖</div>
        <div className="bg-heart" style={{ top: '50%', left: '5%' }}>💝</div>
        <div className="bg-heart" style={{ top: '60%', right: '8%' }}>💕</div>
      </div>
    </div>
  );
}

export default App;