import './Card.scss';
import { useNavigate } from 'react-router-dom';

export const Card = ({ img, data, type }) => {


    const navigate = useNavigate();

    const showMoviesDetails = async () => {
        navigate(`/details/${data.id}`,{state : {type}});
    }
    const handleKeyPress = (e)=>{
        e.preventDefault();
        if(e.key === 'Enter' || e.key === ' ')
            {
                showMoviesDetails();
            }
    }

    return (
        <div
            role='button'
            tabIndex={0}
            className="Card"
            onClick={showMoviesDetails}
            onKeyDown={handleKeyPress}
        >

            <img className="card" src={img} alt="CARD" />
        </div>

    )
}
