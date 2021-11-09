import Layout from '../components/layout';
import unfetch from 'isomorphic-unfetch';
import Link from 'next/link';

function HomePage({ characters }) {
    return (
    <Layout>
        <h1>Welcome to <strong>The Rick and Morty</strong></h1>
        <ul>
        {characters.results.map(character => (
        <div>
                <li key={character.id}>Character name: <Link  href={character.image}><a>{character.name}</a></Link></li>
                <li key={Math.random()}>Species: {character.species}</li><br/>
        </div>
        ))}
        </ul>

        <style jsx>{`
            h1 {
                color: red;
            }
            p {
                color: white;
            }
            strong {
                font-weight: 900;
                color: black;
                font-size: 45px;    
            }
            `}</style>
        <style global jsx>{`
            body {
                background-color: lightblue ;
                text-align: center;
            }
            footer {
                width: 100%;
                padding: 10px;
                background-color: Black;
                color: #ffffff;
                position: fixed;
                bottom: 0;
                text-align: center;
                margin-left: auto;
                margin-right: auto;
            }
        `}

        </style>
    </Layout>
    )
}

export async function getStaticProps() {
    // data fetch
    const data  = await unfetch('https://rickandmortyapi.com/api/character');
    const characters = await data.json();

    return {
        props: {
            characters: characters
        }
    }
}

export default HomePage;