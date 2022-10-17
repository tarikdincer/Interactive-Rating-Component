import { useState } from "react";
import star from "../images/icon-star.svg";
const RatingCard = ({ setRating }) => {
    const [activeStars, setActiveStars] = useState(0);
    return (
        <>
            <div className="star-container">
                <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
                        fill="#FC7614"
                    />
                </svg>
            </div>
            <div className="rating-body">
                <h1 className="rating-question">How did we do?</h1>
                <p className="rating-description">
                    Please let us know how we did with your support request. All
                    feedback is appreciated to help us improve our offering!
                </p>
            </div>
            <div className="rating-stars">
                <button
                    className={
                        activeStars === 1
                            ? "rating-star active-star"
                            : "rating-star"
                    }
                    onClick={() => setActiveStars(1)}
                >
                    1
                </button>
                <button
                    className={
                        activeStars === 2
                            ? "rating-star active-star"
                            : "rating-star"
                    }
                    onClick={() => setActiveStars(2)}
                >
                    2
                </button>
                <button
                    className={
                        activeStars === 3
                            ? "rating-star active-star"
                            : "rating-star"
                    }
                    onClick={() => setActiveStars(3)}
                >
                    3
                </button>
                <button
                    className={
                        activeStars === 4
                            ? "rating-star active-star"
                            : "rating-star"
                    }
                    onClick={() => setActiveStars(4)}
                >
                    4
                </button>
                <button
                    className={
                        activeStars === 5
                            ? "rating-star active-star"
                            : "rating-star"
                    }
                    onClick={() => setActiveStars(5)}
                >
                    5
                </button>
            </div>
            <button
                className="submit-btn"
                onClick={() => {
                    if (activeStars > 0) setRating(activeStars);
                }}
            >
                SUBMIT
            </button>
        </>
    );
};

export default RatingCard;
