import React, { useState } from 'react';
import './AddListingPage.css'; // Ensure this CSS file exists and is styled appropriately

const categories = [
  'Электроника',
  'Автомобили',
  'Недвижимость',
  'Услуги'
];

const AddListingPage = ({ onAddListing }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setImages(imageUrls);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newListing = { id: Date.now(), title, description, price, category, images };
    onAddListing(newListing);
    setTitle('');
    setDescription('');
    setPrice('');
    setCategory(categories[0]);
    setImages([]);
    alert('Объявление добавлено!');
  };

  return (
    <div className="container add-listing-page">
      <h1>Добавить объявление</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Название:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Описание:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Цена:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Категория:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Фотографии:</label>
          <input
            type="file"
            multiple
            onChange={handleImageChange}
          />
        </div>
        <button type="submit" className="submit-button">Добавить</button>
      </form>
    </div>
  );
};

export default AddListingPage;
