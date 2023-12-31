import { useState, useContext } from "react";
import PropTypes from "prop-types";
import FilmContext from "../../FilmContext";
import Plus from "../../images/plus-img.svg";
import "./feedback.css";
import {nanoid} from "nanoid";
import { useEffect } from "react";

function Feedback({ film }) {
  const [textareaValue, setTextareaValue] = useState("");
  const [btnClicked, setClickBtn] = useState(false);
  const { addFeedback } = useContext(FilmContext);

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };
  
  const pushFeedback = async () => {
    if (textareaValue) {
      await addFeedback(film._id, textareaValue, film.id);
      setTextareaValue("");
      setClickBtn(false);
    }
  };

  const handleClick = () => {
    setClickBtn(!btnClicked);
    setTextareaValue("");
  };

  return (
    <div className="feedback-wrapper">
      <ul className="feedback-list">
        {film?.feedback?.length > 0 ? (
          film.feedback.map((el) => (
            <li key={nanoid()}>
              <p className="feedback-el">{el}</p>
            </li>
          ))
        ) : (
          <p>No feedback available.</p>
        )}
      </ul>

      <div className="rate-block-wrapper">
        {btnClicked ? (
          <div>
            <textarea className="review-textarea"
              value={textareaValue}
              onChange={handleTextareaChange}
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <div className="handle-btn-wrapper">
              <button className="handle-new-review-btn" type="button" onClick={() => setClickBtn(false)}>
                Cancel
              </button>
              <button className="handle-new-review-btn" onClick={pushFeedback} type="button">
                Add a Review
              </button>
            </div>
          </div>
        ) : (
          <div className="rate-container">
            <div className="rate">RATE: {film.rating}</div>
            <button onClick={handleClick} className="add-review-btn">
              <div className="review-img-wrapper">
                <img src={Plus} alt="" />
              </div>
              <span className="btn-text">Add a Review</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Feedback.propTypes = {
//   film: PropTypes.shape({
//     _id: PropTypes.string.isRequired,
//     feedback: PropTypes.arrayOf(
//       PropTypes.shape({
//         feedback: PropTypes.string.isRequired
//       })
//     ).isRequired,
//     rating: PropTypes.number.isRequired
//   }).isRequired
// };

export default Feedback;
