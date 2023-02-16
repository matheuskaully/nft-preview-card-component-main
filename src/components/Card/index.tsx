import { Container } from "./style"
import { cardData } from "../../main"
import iconClock from "../../assets/icon-clock.svg"
import iconEthereum from "../../assets/icon-ethereum.svg"
export function Card() {
  return (
    <Container className="card">
      <img src={cardData.imgSource} alt="image equilibrium" id="img-source" />
      <div id="card-inf">
        <h2>{cardData.title}</h2>
        <p>{cardData.bio}</p>
        <div id="value-and-day">
          <div>
            <img src={iconEthereum} alt="ethereum icon" />
            <span id="value">
              {cardData.value} ETH
            </span>
          </div>
          
          <div>
            <img src={iconClock} alt="clock icon" />
            <span id="day">
              {cardData.day} days left
            </span>
          </div>
        </div>

        <div id="author">
          <img 
            src={cardData.authorImg} 
            alt={`Photo of ${cardData.authorName}`} 
          />
          <p>Creation of 
            <span id="author-name">
              {cardData.authorName}
            </span>
          </p>
        </div>
      </div>
    </Container>
  )
}