import './NewsPage.sass';
import { useEffect, useState } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Main from '../../Main/Main';
import newsData from '../../DataBase/newsData';

function NewsPage() {
    const [newsArr, setNewsArr] = useState([]);
    function renderNewsSection(data) {
        return data.map((item) => {
            return (
                <section className='newsPage' key={item.id}>
                    <div className='container newsPage-container'>
                        <img
                            src={item.image}
                            alt={item.title}
                            className='newsPage__image'
                        />
                        <div className='newsPage__text-container'>
                            <h2 className='newsPage__title'>{item.title}</h2>
                            <p className='newsPage__date'>{item.date}</p>
                            <p className='newsPage__subtitle'>
                                {item.description}
                            </p>
                            <p className='newsPage__news-text'>
                                {item.description}
                            </p>
                        </div>
                    </div>
                </section>
            );
        });
    }

    useEffect(() => {
        const arr = renderNewsSection(newsData);
        setNewsArr(arr);
    }, []);

    return (
        <div className='page'>
            <Header />
            <Main>{newsArr}</Main>
            <Footer />
        </div>
    );
}

export default NewsPage;
