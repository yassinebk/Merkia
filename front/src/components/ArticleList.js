import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import Button from"./Basic/Atomic/Button"
import { loadArticles } from "../redux/actions/actions"
import { Link } from "react-router-dom"

const Article = ({ article }) => {
  return( 
  <div class="card lg:card-side bordered flex-row">
  <div class="card-body ">
              <h2 className="text-primray_100 font-bold text-5xl">{article.title}</h2>
  </div>
    <div class="card-actions">
          <Link to={`/article/${article._id}`}><Button variant="primary"class="btn btn-primary">Read</Button></Link>
      <Button variant="secondary"class="btn btn-ghost">More info</Button>
    </div>
</div>)


}
const ArticleList= (props) => {
  useEffect(() => {
    props.loadArticles()
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

    return (
        <div className="flex flex-col items-stretch">
        <Link to="/" className="w-full m-8 px-24 flex flex-col">
          <Button variant="secondary" classes=" flex flex-row justify-evenly self-end w-48 profile-username ">
          <p className="text-3xl lg:text-5xl"> Back</p>
<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-12 md:w-12 lg:md-16 lg:md-16 profile-username" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
</svg>
        </Button></Link>
                {props.articles.map((article) => <Article article={article} />)}
</div>

    )
}
const mapDispatchToProps = {
  loadArticles
}
const mapStateToProps = (state) => {
    return ({
        articles:state.articles.articles
    })
}
export default connect(mapStateToProps,mapDispatchToProps)(ArticleList)
