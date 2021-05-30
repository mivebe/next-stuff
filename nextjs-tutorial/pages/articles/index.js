import ArticleList from "../../components/ArticleList"

//we must fetch here because we need to use the title excerpt and id info of the articles
//as for the article pages themselves we will fetch them in the pages folder
export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
    const data = await res.json()

    return {
        props: {
            data
        }
    }
}

const ArticlesPlural = ({ data }) => {
    return (
        <div>
            <ArticleList data={data} />
        </div>
    )
}

export default ArticlesPlural
