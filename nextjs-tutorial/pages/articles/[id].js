import { useRouter } from "next/router"
import Link from "next/link"

// export const getServersideProps = async () => {
//     const router = useRouter()
//     const { id } = router.query
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
//     const data = await res.json();
//     console.log(data);

//     return {
//         props: {
//             data
//         }
//     }
// }

export const getStaticProps = async (context) => {
    // console.log("context= ", context);
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const article = await res.json();

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const allArticles = await res.json();

    const ids = allArticles.map(article => article.id)
    const paths = ids.map((id) => ({ params: { id: id.toString() } }))

    return {
        paths,
        fallback: false
    }
}

const Article = ({ article }) => {
    const router = useRouter()
    const { id } = router.query
    // const article = props.data
    // console.log("article= ", article);
    return (
        <>
            Article ID by Router {id}
            <br />
            Article ID by props {article?.id || "N\A"}
            { article &&
                <>
                    <h1>{article.title}</h1>
                    <p>{article.body}</p>
                    <br />
                    <Link href="/articles">Go Back</Link>
                </>
            }
        </>
    )
}



export default Article
