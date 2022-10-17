import { useState } from "react";
import RatingCard from "./components/RatingCard";
import ThankYouCard from "./components/ThankYouCard";
function App() {
    const [rating, setRating] = useState(0);

    return (
        <div className="app">
            <main>
                <div className="card-container">
                    {rating === 0 ? (
                        <RatingCard setRating={setRating} />
                    ) : (
                        <ThankYouCard rating={rating} />
                    )}
                </div>
            </main>
        </div>
    );
}

export default App;
