import { Card } from "react-bootstrap";
import styles from "../styles/GameResultCard.module.scss"
import Link from 'next/link'
import clsx from 'clsx'
import { FacebookShareButton, FacebookIcon } from 'react-share'

const GameMultipleResultCard = (props) => (
  <Card className={`${styles.gameresultcard} ${clsx(props.section=='digit' && styles.digitSection,
        props.section=='stlVisayas' && styles.stlVisayasSection,
        props.section=='stlMindanao' && styles.stlMindanaoSection)}`}>
    <Link href={"/resulthistory/"+props.results[0].game.seopath}>
      <a className={styles.cardLink}>
      {props.results[0].game?.img_url?<Card.Img variant="top" src={props.results[0].game?.img_url} alt={`${props.results[0].game.Name} official logo`}
aria-label="Link"/>:""}
      </a>
    </Link>

    <Card.Title>
      <h1>{props.results[0].game.Name} <time>{new Date(props.results[0].datetime).toLocaleString("en-US", {weekday: "short"})} {new Date(props.results[0].datetime).toLocaleString("en-US", {dateStyle: "long"})}</time></h1>
    </Card.Title>
    
    <Card.Subtitle>
    <p className={clsx(!props.showInfo && 'd-none', 'text-muted')}>{props.results[0].game.Description}</p>
    { props.results[0].jackpot ?
          <p>Jackpot prize: <span className={styles.jackpot}>₱{new Number(props.results[0].jackpot).toLocaleString()}</span></p>:""
    }
    </Card.Subtitle>
    <Card.Body className={styles.cardBody}>
      <ul>
        {props.results.map(result =>
          <li key={result.id}>{new Date(result.datetime)
                               .toLocaleString("en-US", {timeStyle: "short"}) 
          + " - "}<strong>{result.result}</strong></li>)
        }
      </ul>
    </Card.Body>
  <Card.Footer className={styles.cardFooter}> SHARE: <FacebookShareButton url="https://pcsoresults.today" quote={`${props.results[0].game.Name} result (${new Date(props.results[0].datetime).toLocaleString("en-US", {weekday: "long"})} ${new Date(props.results[0].datetime).toLocaleString("en-US", {dateStyle: "long"})}): ${props.results.map(result => new Date(result.datetime).toLocaleString("en-US", {timeStyle:"short"}) + ' : ' + result.result)} `}  hashtag={props.results[0].game.fbhashtag}><FacebookIcon size={32} round={true} /></FacebookShareButton>
    <Link href={"/resulthistory/"+props.results[0].game.seopath} passHref={true}>
      <button className="btn btn-secondary btn-sm ms-1">
         View history
      </button>
    </Link>
  </Card.Footer>
  </Card>
);

export default GameMultipleResultCard;
