import articleStyles from "../styles/Article.module.css"
import Link from "next/link"

const ArticleListItem = ({ article }) => {
    return (
        <Link href="/articles/[id]" as={`/articles/${article.id}`}>
            <a className={articleStyles.card}>
                <h3>{article.title}</h3>
                <p>{article.body}</p>
            </a>
        </Link>
    )
}

export default ArticleListItem
