import './MainPage.sass';
import { useEffect, useState } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Main from '../../Main/Main';
import Slider from '../../Slider/Slider';
import sliderData from '../../DataBase/sliderData';
import newsData from '../../DataBase/newsData';
import NewsCard from '../../NewsCard/NewsCard';
import AccordeonFAQ from '../../Accordeon/AccordeonFAQ/AccordeonFAQ';
import RegistrationForm from '../../Register/RegistrationForm/RegistrationForm';

function MainPage({ handleConnectPopup }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    function handleWindowWith() {
        setWindowWidth(window.innerWidth);
    }

    function chooseNewsFormat() {
        if (windowWidth > 768) {
            return newsData.map((item) => {
                return <NewsCard key={item.id} card={item} />;
            });
        } else {
            return <Slider data={newsData} />;
        }
    }
    useEffect(() => {
        window.addEventListener('resize', () => {
            handleWindowWith();
        });
    }, []);

    return (
        <div className='page'>
            <Header
                handleConnectPopup={handleConnectPopup}
                windowWidth={windowWidth}
                handleWindowWith={handleWindowWith}
            />
            <Main>
                <section className='promo-slider container container_column'>
                    <Slider data={sliderData} />
                </section>
                <section className='news container container_column'>
                    <h2 className='news__title'>Новости</h2>
                    <div className='news__card-container'>
                        {chooseNewsFormat()}
                    </div>
                </section>
                <section className='faq container '>
                    <h2 className='faq__title'>faq</h2>
                    <div className='faq__info'>
                        <AccordeonFAQ />
                    </div>
                </section>
                <section className='subscription'>
                    <div className='container container_subscription'>
                        <div className='subscription__text-container'>
                            <h2 className='subscription__title'>
                                Подпишись на рассылку
                            </h2>
                            <p className='subscription__subtitle'>
                                Отправляем анонсы новых статей, выпусков и
                                трансляций
                            </p>
                        </div>
                        <RegistrationForm />
                    </div>
                </section>
            </Main>
            <Footer />
        </div>
    );
}

export default MainPage;
