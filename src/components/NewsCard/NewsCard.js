import './NewsCard.sass';

function NewsCard({ card }) {
    return (
        <div className='card'>
            <img src={card.image} alt={card.title} className='card__image' />
            <h3 className='card__title'>{card.title}</h3>
            <p className='card__description'>{card.description}</p>
            <span className='card__date'>{card.date}</span>
        </div>
    );
}

export default NewsCard;
