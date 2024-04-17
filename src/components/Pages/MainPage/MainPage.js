import './MainPage.sass';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Main from '../../Main/Main';
import Slider from '../../Slider/Slider';
import sliderData from '../../DataBase/sliderData';

function MainPage() {
    return (
        <div className='page'>
            <Header />
            <Main>
                <div className='container container_column'>
                    <section className='promo-slider'>
                        <Slider data={sliderData} />
                    </section>
                    {/* <section className='news'></section>
                    <section className='faq'></section>
                    <section className='subscription'></section> */}
                </div>
            </Main>
            <Footer />
        </div>
    );
}

export default MainPage;
