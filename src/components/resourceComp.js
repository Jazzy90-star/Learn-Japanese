import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Comments from "./comments";

function ResourceComp() {
  return (
    <>
      <Container>
        <h2>Extra Resources</h2>
      </Container>
      <Container>
        <Row>
          <h3> Books </h3>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://m.media-amazon.com/images/I/61I7nyAHeLL._SL1000_.jpg"
              />
              <Card.Body>
                <Card.Title>
                  GENKI 1: An Integrated Course in Elementary Japanese
                </Card.Title>
                <Card.Text>
                  GENKI: An Integrated Course in Elementary Japanese is a study
                  resource for people who are starting to learn Japanese. It is
                  designed to comprehensively build communication competencies
                  across all four skill areas--listening, speaking, reading, and
                  writing. GENKI consists of 23 lessons, divided into two
                  volumes of textbooks and workbooks. Vol. 1 contains Lessons
                  1-12, and Vol. 2 covers Lessons 13-23. The audio material of
                  the textbooks and workbooks can be downloaded and played on
                  mobile devices by using an app called OTO Navi.
                </Card.Text>
                <Card.Link href="https://www.amazon.com/Genki-Vol-1-Textbook-3e-ed/dp/4789017303?pd_rd_w=Yhtpm&pf_rd_p=2419a049-62bf-452e-b0d0-ca5b7e35a7b4&pf_rd_r=ZCQ2NCEB0GBNYVVMGTQ5&pd_rd_r=277d897b-c62c-48fd-9ca3-1442330176c7&pd_rd_wg=rDjUY&pd_rd_i=4789017303&psc=1&linkCode=sl1&tag=peraperaorg-20&linkId=41810e27939574abd596229c3d50f733&language=en_US&ref_=as_li_ss_tl">
                  Click here
                </Card.Link>
                <Comments />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://m.media-amazon.com/images/I/61GyLIQYFgL._SL1167_.jpg"
              />
              <Card.Body>
                <Card.Title>A Dictionary of Basic Japanese Grammar</Card.Title>
                <Card.Text>
                  This ever-popular series of dictionary-style grammar guides
                  comprises three volumes--basic, intermediate, and
                  advanced--with each presenting some 200 key grammar items,
                  along with analysis of sentence patterns, abundant example
                  sentences, and easy-to-understand explanations in English. The
                  books also thoroughly explains common pitfalls and the
                  distinctions in usage of similar expressions, helping users to
                  develop an even stronger grasp of Japanese grammar. A
                  must-have reference for learners and teachers alike.
                </Card.Text>
                <Card.Link href="https://www.amazon.com/Dictionary-Basic-Japanese-Grammar/dp/4789004546/ref=sr_1_1?dib=eyJ2IjoiMSJ9.gjvXOhWQdWSvhOSf3A2RQ9SkNgLYquf8fiyXBPjrJ7YVY3LAQpagdUUP5vtqj-4ideoaWnIowU6P1zNtYzIBBrGHzTQsZAsU__Lv5DYTXVmEDJr1bFJrEi1VrNhOysswcvtAWN9l_sulYGaMs6ecRKcDra8A5kj6ZFZ7DpMYTfjH-3e7qQJD0X4D-j_mXt1uirjtC7_wVsqa0GodFp4z6telb4HozMqoRZ1E9ZvAFis.YkuhO9MersirdWQTkMud9ZyPLJe1MBRx2JL96D6YzC8&dib_tag=se&keywords=Dictionary+of+Basic+Japanese+Grammar&linkCode=sl2&linkId=5241a0407250347777657c3c230c29cb&qid=1713375833&sr=8-1">
                  Click here
                </Card.Link>
                <Comments />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://m.media-amazon.com/images/I/612UJcw3HkL._SL1303_.jpg"
              />
              <Card.Body>
                <Card.Title>
                  Japanese from Zero! 1: Proven Techniques to Learn Japanese for
                  Students and Professionals
                </Card.Title>
                <Card.Text>
                  The lessons and techniques used in this series have been
                  taught successfully for over ten years in classrooms
                  throughout the world. Using up-to-date and easy-to-grasp
                  grammar, Japanese From Zero! is the perfect course for current
                  students of Japanese as well as absolute beginners
                </Card.Text>
                <Card.Link href="https://www.amazon.com/Japanese-Zero-Techniques-Students-Professionals/dp/0976998122/ref=sr_1_3?crid=DDVBOWO6WCNG&dib=eyJ2IjoiMSJ9.J9I-Ky3flBFWnKl6Vlsl7PxGPKcHD6piehGM3Tgsd6VVbV9n4B_sYFvIGnP8IFviz2ediQ1MYcFTRRkuBbWQ4DuleZk87ZhF65e0t-zuZmxrYYJcmoELFx13vubrh_RBK0RiiXTm2eSCYM9pBU9cp9mXfDyAdKcDOFPkS89Mxwx17e3W-DKO9nOsIPd9HJjETv05AII-PKzwzXtzYudg9xv5BRFwwCVrlpAx9EcagVVzET5nc2EuKYwzxM3-DY345RaiXbvYSXq2Uamj2gq4S9BqYGzBmQln1rfSvSKeao0.fwpTKJ-r6-kYSJImgfbJ2Cp6ephF3aXx5PRarFLmZzA&dib_tag=se&keywords=learn+japanese&qid=1713376056&sprefix=learn+japa%2Caps%2C153&sr=8-3">
                  Click Here
                </Card.Link>
                <Comments />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container>
        <h3> Videos</h3>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>
                  Learn ALL Hiragana in 1 Hour - How to Write and Read Japanese
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  JapanesePod101
                </Card.Subtitle>
                <Card.Text>
                  In this video, you’ll learn how to be able to perfectly WRITE
                  and READ all Hiragana, characters of the Japanese alphabet. We
                  will teach you those Japanese Kana using simple steps, showing
                  you the correct stroke order, helpful tricks for memorization,
                  and proper usage in common Japanese words. If you want to get
                  started reading and writing Japanese, this is THE place to
                  start.
                </Card.Text>
                <Card.Link href="https://www.youtube.com/watch?v=6p9Il_j0zjc">
                  Click Here
                </Card.Link>
                <Comments />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Learn Japanese From Zero! </Card.Title>
                <Card.Text>
                  From Zero's lessons, videos, games, and community help
                  students from around the world learn practical Japanese that
                  you can use! Members can ask a teacher any question about any
                  lesson!
                </Card.Text>
                <Card.Link href="https://www.youtube.com/@japanesefromzero">
                  Click here
                </Card.Link>
                <Comments />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Learn Japanese</Card.Title>
                <Card.Text>
                  Learning Japanese is a YouTube video series with the sole
                  purpose of providing Japanese lessons online for free for
                  anyone at any level! Find 300+ videos of various topics
                  including grammar, vocabulary, kanji, culture, anime, and
                  more!
                </Card.Text>
                <Card.Link href="https://www.youtube.com/@learnjapanesebod/videos">
                  Click Here
                </Card.Link>
                <Comments />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container>
        <h3>Apps</h3>{" "}
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Anki</Card.Title>
                <Card.Text>
                  Anki is a program which makes remembering things easy. Because
                  it's a lot more efficient than traditional study methods, you
                  can either greatly decrease your time spent studying, or
                  greatly increase the amount you learn.
                </Card.Text>
                <Card.Link href="https://apps.ankiweb.net/">
                  Get App Here
                </Card.Link>
                <Comments />
              </Card.Body>
            </Card>{" "}
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Clozemaster</Card.Title>
                <Card.Text>
                  Clozemaster is something between a game and a reading
                  exercise. You're given loads of sentences and phrases and
                  asked to fill in the missing Japanese word. What’s great about
                  Clozemaster is the use of context. Unlike some other apps, the
                  words you learn are never to you in isolation. Instead, the
                  main focus is to get you familiar with vocabulary in actual
                  sentences and phrases.
                </Card.Text>
                <Card.Link href="https://www.clozemaster.com/">
                  Click Here to get the App
                </Card.Link>
                <Comments />
                <br></br>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>
                  Learn Hiragana & Katakana Mnemonics With Dr Moku
                </Card.Title>
                <Card.Text>
                  What blew my mind was how Dr Moku drilled the kana into my
                  head through funny mnemonics in just a couple of hours. In
                  this app, Dr Moku associates all the kana with funny pictures,
                  which makes it impossible for you to forget them.
                </Card.Text>
                <Card.Link href="https://www.drmoku.com/">
                  Click Link to get this App
                </Card.Link>
                <Comments />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default ResourceComp;
