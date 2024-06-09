import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import CarouselItem from "../carouselItem/CarouselItem";
import "./QuoteSection.scss";

const QuoteSection = () => {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    try {
      fetch("https://strangerthings-quotes.vercel.app/api/quotes/50")
        .then((response) => response.json())
        .then((data) => setQuotes(data));
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <section className="quote-section">
      <div
        id="carouselExample"
        class="carousel carousel-dark slide quote-section__carousel-container"
      >
        <div className="carousel-inner w-100 h-100 d-flex justify-content-center align-items-center">
          {quotes.map((quote, index) => (
            <CarouselItem
              key={index}
              quote={quote.quote}
              author={quote.author}
              className={index === 0 ? "active" : ""}
            />
          ))}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default QuoteSection;
