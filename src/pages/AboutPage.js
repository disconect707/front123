import React from 'react';
import './AboutUs.css'; // Подключение CSS файла для стилей

const AboutUs = () => {
  return (
    <div className="about-us">
      
      <h2>Добро пожаловать на OLX Клон – ваш универсальный онлайн-рынок для покупки и продажи товаров!</h2>
      
      <section>
        <h2>Кто мы</h2>
        <p>
          OLX Клон – это платформа, созданная для того, чтобы сделать процесс покупки и продажи товаров максимально простым и удобным. Наш сайт предлагает пользователям возможность быстро находить нужные товары и услуги, а также легко и безопасно продавать свои вещи.
        </p>
      </section>
      
      <section>
        <h2>Наша миссия</h2>
        <p>
          Наша миссия – предоставить пользователям безопасную, удобную и эффективную платформу для торговли. Мы стремимся объединить людей и дать им возможность обмениваться товарами и услугами, создавая тем самым сообщество, основанное на доверии и взаимопомощи.
        </p>
      </section>
      
      <section>
        <h2>Что мы предлагаем</h2>
        <ul>
          <li>Широкий ассортимент товаров: От электроники и автомобилей до недвижимости и услуг – у нас вы найдете все, что вам нужно.</li>
          <li>Простота использования: Интуитивно понятный интерфейс позволяет легко создавать и находить объявления.</li>
          <li>Безопасность: Мы заботимся о безопасности наших пользователей и предоставляем различные инструменты для защиты ваших данных и сделок.</li>
          <li>Поддержка пользователей: Наша команда поддержки всегда готова помочь вам с любыми вопросами и проблемами.</li>
        </ul>
      </section>
      
      <section>
        <h2>Почему выбирают нас</h2>
        <ul>
          <li>Бесплатные объявления: Размещайте объявления бесплатно и привлекайте внимание покупателей.</li>
          <li>Удобный поиск и фильтры: Быстро находите нужные товары с помощью расширенного поиска и удобных фильтров.</li>
          <li>Мобильная версия: Наш сайт оптимизирован для использования на мобильных устройствах, чтобы вы могли покупать и продавать товары в любое время и в любом месте.</li>
          <li>Сообщество: Присоединяйтесь к нашему сообществу, делитесь отзывами и рекомендациями, чтобы помочь другим пользователям сделать правильный выбор.</li>
        </ul>
      </section>
      
      <section>
        <h2>Наши ценности</h2>
        <ul>
          <li>Прозрачность: Мы стремимся к открытости и честности во всем, что мы делаем.</li>
          <li>Инновации: Мы постоянно работаем над улучшением нашего сервиса и внедрением новых технологий.</li>
          <li>Ответственность: Мы ответственно относимся к каждому пользователю и каждому объявлению на нашем сайте.</li>
        </ul>
      </section>
      
      <p>Спасибо, что выбрали OLX Клон! Мы надеемся, что наш сайт станет для вас надежным партнером в мире онлайн-торговли.</p>
    </div>
  );
};

export default AboutUs;