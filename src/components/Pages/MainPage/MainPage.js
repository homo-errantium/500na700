import './MainPage.sass';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Main from '../../Main/Main';
import Slider from '../../Slider/Slider';
import sliderData from '../../DataBase/sliderData';
import newsData from '../../DataBase/newsData';
import NewsCard from '../../NewsCard/NewsCard';
import AccordeonFAQ from '../../Accordeon/AccordeonFAQ/AccordeonFAQ';

function MainPage() {
    return (
        <div className='page'>
            <Header />
            <Main>
                {/* <div className='container container_column'> */}
                <section className='promo-slider container container_column'>
                    <Slider data={sliderData} />
                </section>
                <section className='news container container_column'>
                    <h2 className='news__title'>Новости</h2>
                    <div className='news__card-container'>
                        {newsData.map((item) => {
                            return <NewsCard key={item.id} card={item} />;
                        })}
                    </div>
                </section>
                <section className='faq container '>
                    <h2 className='faq__title'>faq</h2>
                    <div className='faq__info'>
                        <AccordeonFAQ />
                    </div>
                </section>
                <section className='subscription'>
                    <div className='container'>
                        <div className='subscription__text-container'>
                            <h2 className='subscription__title'>
                                Подпишись на рассылку
                            </h2>
                            <p className='subscription__subtitle'>
                                Отправляем анонсы новых статей, выпусков и
                                трансляций
                            </p>
                        </div>
                    </div>
                    <div className='subscription__form-container'>
                        <form action='' method='get'>
                            <p>
                                <label for='email'>Электронная почта</label>
                                <input
                                    type='email'
                                    name='email'
                                    id='email'
                                    required
                                />
                            </p>
                            <p>
                                <label for='phone'>Телефон</label>
                                <input
                                    type='text'
                                    name='phone'
                                    id='phone'
                                    required
                                />
                            </p>
                            <button type='submit'>Отправить</button>
                        </form>
                    </div>
                </section>
                {/* </div> */}
            </Main>
            <Footer />
        </div>
    );
}

export default MainPage;
