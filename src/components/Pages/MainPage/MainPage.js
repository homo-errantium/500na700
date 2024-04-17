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
                <div className='container container_column'>
                    <section className='promo-slider'>
                        <Slider data={sliderData} />
                    </section>
                    <section className='news'>
                        <h2 className='news__title'>Новости</h2>
                        <div className='news__card-container'>
                            {newsData.map((item) => {
                                return <NewsCard key={item.id} card={item} />;
                            })}
                        </div>
                    </section>
                    <section className='faq'>
                        <h2 className='faq__title'>faq</h2>
                        <div className='faq__info'>
                            <AccordeonFAQ />
                        </div>
                    </section>
                    {/* <section className='subscription'></section> */}
                </div>
            </Main>
            <Footer />
        </div>
    );
}

export default MainPage;
