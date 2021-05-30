import articleStyles from "../styles/Article.module.css"
import ArticleListItem from "./ArticleListItem"

const ArticleList = ({ data }) => {
    return (
        <div className={articleStyles.grid}>
            {data && data.map((article) => (
                <ArticleListItem article={article} key={article.id} />
            ))}
        </div>
    )
}

export default ArticleList
