import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Hiragana from "../utility/hiragana";
import Container from "react-bootstrap/Container";

const FlashCardCarousel = () => {
  return (
    <>
      <Container>
        <h2> Hiragana Flashcards</h2>

        <Carousel slide={false} className="black-buttons">
          {Hiragana.map((card, index) => (
            <Carousel.Item key={index}>
              <div className="flashcard">
                <div className="character">{card.character}</div>
                <div className="Romanji">{card.Romanji}</div>
                <div className="pronunciation">{card.pronouncation}</div>
                <div className="example">{card.example}</div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
      <Container>
        <h2> Katakana and Kanji Coming Soon! </h2>
      </Container>
    </>
  );
};

export default FlashCardCarousel;
