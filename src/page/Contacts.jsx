import React from 'react';
import mapImage from '../img/map.png';
import './Contacts.css';
import Footer from '../components/Footer'; // Импортируем Footer

const Contacts = () => {
    return (
        <>
            <div className="contacts-page">
                <div className="map-container">
                    <img src={mapImage} alt="Карта с местоположением" className="map-image" />
                </div>

                <div className="contact-info">
                    <h2>Свяжись с нами</h2>
                    <p>
                        У тебя есть вопросы, предложения или нужна помощь? Мы всегда рады помочь! Напиши нам – и мы ответим в ближайшее время.
                    </p>

                    <h3>Контакты:</h3>
                    <p>Email: <a href="mailto:support@dontbeamokey.com">support@dontbeamokey.com</a></p>
                    <p>Телефон: +1 (123) 456-7890</p>

                    <p>
                        Хотите стать нашим партнером или предложить сотрудничество?<br />
                        Пишите на <a href="mailto:partners@dontbeamokey.com">partners@dontbeamokey.com</a> – мы открыты к новым возможностям!
                    </p>
                </div>
            </div>

            {/* Footer внизу страницы */}
            <Footer />
        </>
    );
};

export default Contacts;
