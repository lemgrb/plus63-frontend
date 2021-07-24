import Head from 'next/head'
import GameResultCard from '../components/GameResultCard'
import GameMultipleResultCard from '../components/GameMultipleResultCard'
import { Row, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Home = (props) => {
  
  const [showInfo, setShowInfo] = useState(false);
 
  const LottoResults4D = props.data.filter(result => result.game.Name == "4D Lotto");
  const LottoResults3D = props.data.filter(result => result.game.Name == "3D Lotto");
  const LottoResults2D = props.data.filter(result => result.game.Name == "2D Lotto");
  const LottoResults6D = props.data.filter(result => result.game.Name == "6D Lotto");
  
  // Visayas
  
  const STLParesVisayas = props.data.filter(result => result.game.Name == "STL Pares (Visayas)");
  const STLSwer2Visayas = props.data.filter(result => result.game.Name == "STL Swer2 (Visayas)");
  const STLSwer3Visayas = props.data.filter(result => result.game.Name == "STL Swer3 (Visayas)");
  
  // Mindanao
  
  const STLParesMindanao = props.data.filter(result => result.game.Name == "STL Pares (Mindanao)");
  const STLSwer2Mindanao = props.data.filter(result => result.game.Name == "STL Swer2 (Mindanao)");
  const STLSwer3Mindanao = props.data.filter(result => result.game.Name == "STL Swer3 (Mindanao)");
  const STLSwer4Mindanao = props.data.filter(result => result.game.Name == "STL Swer4 (Mindanao)");

  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem('showInfo'));
    setShowInfo(data);
  },[]);

  useEffect(()=>{
    localStorage.setItem('showInfo', showInfo);
  },[showInfo]);

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  }


  return (
    <>
    <Head>
      <meta name="description" content="PCSO Lotto and Swertres results today (Philippines)" />
      <meta property="og:url" content="https://pcsoresults.today" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="PCSO Lotto and Swertres results today (Philippines)" />
      <meta property="og:description" content="PCSO Lotto and Swertres results today (Philippines)" />
      <meta property="og:image" content="https://pcsoresults.today/fbog.webp.gz" />
      <title>PCSOResults.today | PCSO Lotto and Swertres Results Today</title>
    </Head>
    <main>
      <Row>
        <Col>
          <div className="callout callout-info">Note: <strong>Tap/Click game logos to view results history</strong>. Use the browser/device back button to go back to previous page.</div>
        </Col>
      </Row>
      <Row className="pb-2">
        <Col>
          <button className="btn btn-primary btn-sm" onClick={handleInfoClick}>{showInfo?"Hide more details":"Show more details"}</button>
        </Col>
      </Row>
      <Row className="g-2">
        {
          props.data.filter(result => !result.game.Region
              && result.game.Name != "3D Lotto"
              && result.game.Name != "2D Lotto"
              && result.game.Name != "4D Lotto"
              && result.game.Name != "6D Lotto")
            .map(result=>(
            <Col md={4} key={result.id}> 
              <GameResultCard {...result} section="lotto" showInfo={showInfo}/>
            </Col>
          ))
        }
      </Row>
      <Row className="p-2">
        <Col>
          <h2>Mini lotto</h2>
        </Col>
      </Row>
      <Row className="g-2">
        <Col md={4}> 
          <GameMultipleResultCard results={LottoResults3D} section={"digit"} showInfo={showInfo}/>
        </Col>
        <Col md={4}> 
          <GameMultipleResultCard results={LottoResults2D} section={"digit"} showInfo={showInfo}/>
        </Col>
        <Col md={4}> 
          <GameMultipleResultCard results={LottoResults6D} section={"digit"} showInfo={showInfo}/>
        </Col>
        <Col md={4}> 
          <GameMultipleResultCard results={LottoResults4D} section={"digit"} showInfo={showInfo}/>
        </Col>
      </Row>
      <Row className="p-2">
        <Col>
          <h2>STL Results (VISAYAS)</h2>
        </Col>
      </Row>
      <Row className="g-2">
        <Col md={4}> 
          <GameMultipleResultCard results={STLParesVisayas} section={"stlVisayas"} showInfo={showInfo}/>
        </Col>
        <Col md={4}> 
          <GameMultipleResultCard results={STLSwer2Visayas} section={"stlVisayas"} showInfo={showInfo}/>
        </Col>
        <Col md={4}> 
          <GameMultipleResultCard results={STLSwer3Visayas} section={"stlVisayas"} showInfo={showInfo}/>
        </Col>
      </Row>
      <Row className="p-2">
        <Col>
          <h2>STL Results (MINDANAO)</h2>
        </Col>
      </Row>
      <Row className="g-2">
        <Col md={4}> 
          <GameMultipleResultCard results={STLParesMindanao} section={"stlMindanao"} showInfo={showInfo}/>
        </Col>
        <Col md={4}> 
          <GameMultipleResultCard results={STLSwer2Mindanao} section={"stlMindanao"} showInfo={showInfo}/>
        </Col>
        <Col md={4}> 
          <GameMultipleResultCard results={STLSwer3Mindanao} section={"stlMindanao"} showInfo={showInfo}/>
        </Col>
        <Col md={4}> 
          <GameMultipleResultCard results={STLSwer4Mindanao} section={"stlMindanao"}/>
        </Col>
      </Row>
    </main>
    </>
  )
}

export async function getStaticProps() {
  const resp = await axios.get('http://localhost:1337/game-results?latest=true&_sort=datetime:DESC');
  const data = resp.data;

  // Pass data to the page via props
  return { props: { data } }
}

export default Home
