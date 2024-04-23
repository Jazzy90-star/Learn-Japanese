import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

function Home() {
  return (
    <>
      <div>
        <Container>
          <h1> Welcome to Learn Japanese</h1>
        </Container>
        <Container>
          <Row>
            <h2>Hiragana</h2>
            <Col sm={4}>
              <p>
                "Hiragana is the basic Japanese phonetic alphabet. It represents
                every sound in the Japanese language. Therefore, you can
                theoretically write everything in hiragana. However, because
                Japanese is written with no spaces, this will create nearly
                indecipherable text. There are 46 hiragana symbols in Japanese,
                each with a particular sound but with no independent meaning."
              </p>
            </Col>

            <Col sm={6}>
              <Image
                id="image1"
                src="https://mochidemy.com/kana/_next/image?url=%2Fkana%2F_next%2Fstatic%2Fmedia%2Fhiragana-chart-japanese-alphabet.f1932a8c.webp&w=1200&q=75"
              />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <h2> Katakana</h2>
            <Col sm={6}>
              <Image
                id="image2"
                src="https://ih1.redbubble.net/image.861682601.9157/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
              />
            </Col>
            <Col sm={4}>
              <p>
                Around the 9th century, the Japanese developed their own writing
                system based on syllables: hiragana and katakana (together:
                kana). Of the two kana systems, hiragana is more cursive, while
                katakana characters are more angular. Hiragana and katakana each
                consist of 46 signs which originally were kanji but were
                simplified over the centuries.These days, katakana is used
                mainly for writing loan words and the names of foreign persons
                and geographical places that cannot be written in kanji.
              </p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <h2> Kanji</h2>
            <Col sm={6}>
              Kanji (漢字), one of the three scripts used in the Japanese
              language, are Chinese characters, which were first introduced to
              Japan in the 5th century via the Korean peninsula. Kanji are
              ideograms, i.e. each character has its own meaning and corresponds
              to a word. By combining characters, more words can be created. For
              example, the combination of "electricity" with "car" means
              "train". There are tens of thousands of characters, of which 2000
              to 3000 are required to understand newspapers. A set of 2136
              characters has been officially declared as the "kanji for everyday
              use. Before the introduction of Chinese characters, no Japanese
              writing system existed. When adopting the characters, the Japanese
              did not only introduce the characters' original Chinese
              pronunciations, but also associated them with the corresponding,
              native Japanese words and their pronunciations. Consequently, most
              kanji can still be pronounced in at least two ways, a Chinese
              (on-yomi) and a Japanese (kun-yomi) way, which considerably
              further complicates the study of the Japanese language. Kanji are
              used for writing nouns, adjectives, adverbs and verbs. But unlike
              the Chinese language, Japanese cannot be written entirely in
              kanji. For grammatical endings and words without corresponding
              kanji, two additional, syllable-based scripts are being used,
              hiragana and katakana, each consisting of 46 syllables.
            </Col>
            <Col sm={6}>
              <Image
                id="image3"
                src="https://as2.ftcdn.net/v2/jpg/00/03/09/55/1000_F_3095569_vK03jFDgds39ynOLJlRPMKm6HEC9h0.jpg"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
