import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (formData.name && formData.email && formData.message) {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log('Форма отправлена', formData);
          setSubmitted(true);
          // Сбросить форму после отправки
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        } else {
          const errorData = await response.json();
          console.error('Ошибка при отправке формы:', errorData);
          setError(errorData.message || 'Произошла ошибка при отправке формы.');
        }
      } catch (error) {
        console.error('Ошибка при отправке запроса:', error);
        setError('Произошла ошибка при отправке формы. Попробуйте еще раз.');
      } finally {
        setLoading(false);
      }
    } else {
      setError('Пожалуйста, заполните все поля.');
      setLoading(false);
    }
  };

  return (
    <div>
      {submitted ? (
        <div className="success-message">Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.</div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}
          <div className="form-group">
            <label htmlFor="name">Имя</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Электронная почта</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Сообщение</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Отправка...' : 'Отправить'}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;