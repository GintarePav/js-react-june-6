import "bootstrap/dist/css/bootstrap.css";
import "./CarouselItem.scss"

const CarouselItem = (props) => {
  return (
    <div className={`carousel-item ${props.className} custom-carousel`}>
      <article>
        <div>
          <div className="custom-carousel__image-container">
            <img src="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQTPVTYNB9WPqDverRKirxqxOfEzs2mzUAHOU6Iv4IQEn6h2oC8ieEjXkeSNuRqf85_cAOmpNkMsBV9MFdnK1W3ee3quOpL2IRiBjX29QZ9986U7q5cdYqpIRuibU2AE9ZjUyyWQ3PdN7D4WBAd6HEKsF3zQ.jpg?r=0c4" alt="dummy author icon"></img>
          </div>
        </div>
        <div className="custom-carousel__text-container">
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="rgb(95, 158, 160)" class="bi bi-quote" viewBox="0 0 16 16">
  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
</svg>
            {props.quote}
          </p>
          <p>
            <span>&mdash; </span>
            {props.author}
          </p>
        </div>
      </article>
    </div>
  );
};

export default CarouselItem;
