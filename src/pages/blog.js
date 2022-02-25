import Prismic from 'prismic-javascript';
import { Link } from 'react-scroll';
import { client } from "../../prismicConfiguration";
import Header from "../components/Header/index";
import styles from '../styles/blog/index.module.scss'
//import Footer from "../components/Footer/index";

export default function Blog({publicacoes}) {
    const lastPost = publicacoes[0]
    const morePosts = publicacoes.slice(1)
    console.log(publicacoes)
    return(
        <>
            <div className={styles.containerBlog}>
                <div className={styles.containerTitleBlog}>
                    <h1>Blog.</h1>
                </div>
                <section>
                    <div>
                        <div className={styles.containerImg}>
                            <Link href="#section2">
                                <img src={lastPost.data.imagem_do_post.url}/>
                            </Link>
                        </div>
                        <div className={styles.containerInfoBlog}>
                            <div className={styles.containerTitle}>
                                <h3>{lastPost.data.titulo[0].text}</h3>
                            </div>
                            <div className={styles.containerText}>
                                <p>{lastPost.data.texto_do_post[0].text}</p>
                                <p>{lastPost.slugs[0]}</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className={styles.containerMoreHistory}>
                    <h2>Mais Histórias</h2>
                    <div className={styles.containerGrid}>
                        {morePosts.map((titulos) => {
                            return(
                                <div key={titulos.id}>
                                    <div>
                                        <Link href="/">
                                            <img src={titulos.data.imagem_do_post.url}/>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href="/">
                                            <h3>{titulos.data.titulo[0].text}</h3>
                                        </Link>
                                        <p>{titulos.data.texto_do_post[0].text}</p>
                                        <p>{titulos.slugs[0]}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
                
                {/* <Footer /> */}
            </div>
        </>
    );
}

export const getServerSideProps = async () => {
    const publicacoes = await client().query([
        Prismic.Predicates.at('document.type', 'blog_post')
    ])

    return {
        props: {
            publicacoes: publicacoes.results
        }
    }
}