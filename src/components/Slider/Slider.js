import './Slider.sass';
import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import Slide from './Slide/Slide';
import sliderButtonLeft from '../../images/vectorLeft.svg';
import sliderButtonRight from '../../images/vectorRight.svg';

function Slider({ data }) {
    const [slideWidth, setslideWidth] = useState(100);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);

    function handleChangeCardWidth() {
        switch (true) {
            case window.innerWidth >= 1360:
                setslideWidth(1360);
                break;
            case window.innerWidth < 1360:
                setslideWidth(window.innerWidth);
                break;
            default:
                setslideWidth(window.innerWidth);
                console.log('HZ');

                break;
        }
    }

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        handleChangeCardWidth();
        // Trigger this function on resize
        window.addEventListener('resize', handleChangeCardWidth);
        console.log('🚀 ~ useEffect ~ window.innerWidth:', window.innerWidth);
        //  Cleanup for componentWillUnmount
        return () =>
            window.removeEventListener('resize', handleChangeCardWidth);
    }, [slideWidth, windowWidth]);

    function handleBtnRedirect() {
        <Navigate to='/' replace={true} />;
    }

    function handleRightClick() {
        setOffset(() => {
            const newOffset = offset - slideWidth;
            const maxOffset = -(slideWidth * (pages.length - 1));
            return Math.max(newOffset, maxOffset);
        });
    }

    function handleLeftClick() {
        setOffset(() => {
            const newOffset = offset + slideWidth;
            return Math.min(newOffset, 0);
        });
    }

    // <Slide key={slide.id} {...slide} width={`${slideWidth}vw`} />
    useEffect(() => {
        const slides = data.map((slide) => (
            <div key={slide.id} className='slide'>
                <div className='slide__text-container'>
                    <p className='slide__title'>{slide.title}</p>
                    <p className='slide__description'>{slide.description}</p>
                </div>
                <img
                    src={slide.image}
                    alt={slide.title}
                    className='slide__image'
                />
            </div>
        ));
        setPages(slides);
    }, [windowWidth, data, slideWidth]);

    return (
        <div className='slider'>
            <button
                className='slider__button-website'
                type='button'
                onClick={handleBtnRedirect}
            >
                cайты
            </button>
            <div className='slider__window'>
                <div
                    className='slider__slides'
                    style={{ transform: `translateX(${offset}px)` }}
                >
                    {pages}
                </div>
            </div>
            <div className='slider__control-buttons'>
                <button
                    className='slider__button slider__button_left'
                    type='button'
                    onClick={handleLeftClick}
                >
                    <img
                        src={sliderButtonLeft}
                        alt='стрелка слайдера'
                        className='slider__button-image'
                    />
                </button>
                <button
                    className='slider__button slider__button_right'
                    type='button'
                    onClick={handleRightClick}
                >
                    <img
                        src={sliderButtonRight}
                        alt='стрелка слайдера'
                        className='slider__button-image'
                    />
                </button>
            </div>
        </div>
    );
}

export default Slider;
