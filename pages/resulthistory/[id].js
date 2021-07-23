import axios from 'axios'

const History = (props) => {
  return (
    <>
    <h1>{props.post[0].game.Name} Results History</h1>
    <table className="table striped table-striped">
      <thead>
        <tr>
          <th>Date and Time</th>
          <th>Result</th>
          <th>Jackpot</th>
        </tr>
      </thead>
      <tbody>
        {
          props.post.map(row =>
            <tr key={row.id}>
              <td><time>{new Date(row.datetime).toLocaleString("en-US", {dateStyle: "medium", timeStyle: "medium"})}</time></td>
              <td>{row.result}</td>
              <td>{new Number(row.jackpot).toLocaleString()}</td>
            </tr>
          )
        }
      </tbody>
    </table>
    </>
  )
}

export async function getStaticPaths() {
  const resp = await axios.get('http://localhost:1337/games');
  const games = resp.data;
  const paths = games.map((game) => ({
    params: { id: game.seopath },
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const res = await fetch(`http://localhost:1337/game-results?game.seopath=${params.id}&_sort=datetime:DESC`)
  const post = await res.json()
  return { props: { post } }
}

export default History
