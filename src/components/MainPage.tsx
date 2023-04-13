import Article from "./Article"
import { IArticle } from "../interfaces/IArticle"
import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
//qui la main che conterrrà le varie article section AB

const MainPage = () => {
    const endpoint = "https://api.spaceflightnewsapi.net/v4/articles"
    const [articles, setArticles] = useState<IArticle[]>([])
    
    const fetchArticles = async () => {
        try {
            const response = await fetch(endpoint)
            if(response.ok){
                const articlesFetched = await response.json()
                setArticles(articlesFetched.results)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        fetchArticles()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
        <>
            <h1 className="text m-4">SpaceFlight News!</h1>
            <Row className="g-1">
                {articles.map((article)=>(
                    <Col md={6} lg={3} key={article.id}>
                        <Article articles={article} id={article.id}/>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default MainPage;