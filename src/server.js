const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Настройка multer для хранения файлов
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

// Маршрут для загрузки файлов
app.post('/upload', upload.array('images', 10), (req, res, next) => {
  const files = req.files;
  if (!files) {
    console.error('Файлы не были загружены.');
    return res.status(400).send('Файлы не были загружены.');
  }
  const urls = files.map(file => `http://localhost:${port}/uploads/${file.filename}`);
  res.status(200).json({ urls });
});

// Обработка остальных ошибок
app.use((err, req, res, next) => {
  console.error('Произошла ошибка:', err.stack);
  res.status(500).send('Что-то пошло не так!');
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
