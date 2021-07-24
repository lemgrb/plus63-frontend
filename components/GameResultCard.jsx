import { Card } from "react-bootstrap";
import styles from "../styles/GameResultCard.module.scss"
import Link from 'next/link'
import clsx from 'clsx'
import { FacebookShareButton, FacebookIcon } from 'react-share'

const GameResultCard = (props) => {

  const resultBrokenIntoDigits = props.result.split("-");

  return (
    <Card className={`${styles.gameresultcard} ${clsx(styles.lottoSection)}`}>
      <Link href={"/resulthistory/"+props.game.seopath}>
        <a className={styles.cardLink}>
          <Card.Img variant="top" src={props.game?.img_url} alt={`${props.game.Name} official logo`} aria-label="Link"/>
        </a>
      </Link>
      <Card.Title>
        <h1>{props.game.Name} <time>{new Date(props.datetime).toLocaleString("en-US", {weekday: "short"})} {new Date(props.datetime).toLocaleString("en-US", {dateStyle: "long"})}</time></h1>
      </Card.Title>
      { props.jackpot ?
        <Card.Subtitle>
            <p className={clsx(!props.showInfo && 'd-none', 'text-muted')}>{props.game.Description}</p>
            <p>Jackpot prize: <span className={styles.jackpot}>₱{new Number(props.jackpot).toLocaleString()}</span></p>
        </Card.Subtitle>
        : <Card.Subtitle></Card.Subtitle>
      }
      <Card.Body className={styles.cardBody}>
        <p className={styles.result}>
          {
            resultBrokenIntoDigits.map(digit => <span key={digit} className={styles.resultDigit}>{digit}</span>)
          }
        </p>
      </Card.Body>
      <Card.Footer className={styles.cardFooter}> SHARE: <FacebookShareButton url="https://pcsoresults.today" quote={`${props.game.Name} result (${new Date(props.datetime).toLocaleString("en-US", {weekday: "long"})} ${new Date(props.datetime).toLocaleString("en-US", {dateStyle: "long"})}): ${props.result}`}  hashtag={props.game.fbhashtag}><FacebookIcon size={32} round={true} /></FacebookShareButton>
      </Card.Footer>
    </Card>
  )
};

export default GameResultCard;
