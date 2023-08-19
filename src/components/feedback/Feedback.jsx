import "./feedback.css";
import {nanoid} from 'nanoid';
import { useState } from "react";
import Plus from "../../images/plus-img.svg";
import { useContext } from "react";
import FilmContext from "../../FilmContext";

function Feedback({film}) {
  console.log(film.feedback, film)
  const [ textareaValue, setTextareaValue ] = useState('');
  const [ btnClicked, setClickBtn ] = useState(false);
  const { addFeedback } = useContext(FilmContext); 
  
  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
    console.log(textareaValue, film)
  }

  const pushFeedback = (id, film) => {
    film.feedback.push(textareaValue);
    setTextareaValue("");
    setClickBtn(false)
    addFeedback(id, film)
    console.log(textareaValue, film)
  }
  const handleClick = () => {
    setClickBtn(!btnClicked);
    setTextareaValue("");
    console.log(btnClicked);
  };
  
  return (
    <div className="feedback-wrapper">
      {film.feedback.length > 0 ? <ul className="feedback-list">
        {film.feedback.map((el) => (
          <li key={nanoid()}>
            <p className="feedback-el">{el}</p>
          </li>
          ))
        }
      </ul> : <div className="feedback-list"> 
          <div>ASKDMSDMSADKMKADM</div>
          <div>ASKDMSDMSADKMKADM</div>
          <div>ASKDMSDMSADKMKADM</div>
          <div>ASKDMSDMSADKMKADM</div>
          <div>ASKDMSDMSADKMKADMÍ</div>
        </div>}
      <div className="rate-block-wrapper">
        { btnClicked ? 
              <div>
                <textarea  
                  value={textareaValue}
                  onChange={handleTextareaChange}
                  name="" id="" cols="30" rows="10">
                </textarea>
                <button >cancel</button>
                <button onClick={() => pushFeedback(film._id, film)}>Add Review</button>
              </div> : 
              <div className="rate-container">
                <div className="rate">
                  RATE: {film.rating}
                </div>
                <button onClick={handleClick} className="add-review-btn">
                  <div className="review-img-wrapper"><img src={Plus} alt="" /></div>
                  <span className="btn-text">Add a Review</span>
                </button>
          </div>
        }
      </div>
    </div>
  )
}

export default Feedback;