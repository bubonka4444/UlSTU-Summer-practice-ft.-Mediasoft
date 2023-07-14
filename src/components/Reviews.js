import React, { useState, useEffect } from 'react';

const Reviews = () => {
  // Получаем отзывы из локального хранилища при загрузке компонента
  const initialReviews = JSON.parse(localStorage.getItem('reviews')) || [];
  const [reviews, setReviews] = useState(initialReviews);

  // Сохраняем отзывы в локальное хранилище при каждом обновлении
  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  const [currentReview, setCurrentReview] = useState(0);

  const [nickname, setNickname] = useState('');
  const [comment, setComment] = useState('');

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handlePublish = () => {
    const newReview = {
      nickname,
      comment
    };

    setReviews([newReview, ...reviews]);
    setNickname('');
    setComment('');
  };

  const handlePrevReview = () => {
    if (currentReview > 0) {
      setCurrentReview(currentReview - 1);
    }
  };

  const handleNextReview = () => {
    setCurrentReview(currentReview + 1);
  };

  return (
    <div id='reviews'>

    <section className="reviews-container" >
      <h2 className='rev-title'>Отзывы</h2>

      
        
      <button className='prev-rev-button' onClick={handlePrevReview} disabled={currentReview === 0}>← </button>

      {reviews.length === 0 ? (
        <div className="zero-reviews">
          <span className='nickname'><p></p></span>
          <p className='review-text'> Отзывов пока нет. Будьте первым</p>
        </div>
      ) : (
        <div className="review-card">
          <span className='nickname'><p>{reviews[currentReview].nickname}</p></span>
          <p className='review-text'>{reviews[currentReview].comment}</p>
        </div>
      )}
        
      <button className='next-rev-button' onClick={handleNextReview} disabled={currentReview === reviews.length - 1}> →</button>
        
    </section>
      <h2 className='add-rev-title'>Поделитесь своим мнением о нас</h2>
      <div className="add-review-container">
        <input className='add-nickname' type="text" placeholder="Ваше имя" value={nickname} onChange={handleNicknameChange} />
        <textarea className='add-review-text' placeholder="Ваш отзыв" value={comment} onChange={handleCommentChange} />
        <button className='add-rev-button' onClick={handlePublish}>Опубликовать</button>
      </div>
    </div>
  );
};

export default Reviews;
