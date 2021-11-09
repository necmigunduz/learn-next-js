import Layout from '../components/layout';

function HomePage() {
    return (
    <Layout>
        <h1>Welcome to <strong>Next.js!</strong></h1>
        <p>Explanation</p>
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

export default HomePage;