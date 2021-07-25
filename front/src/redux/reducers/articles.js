/* eslint-disable no-case-declarations */

const initialState = {
  articles: [],
  article: {}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_ARTICLES':
      return ({
        ...state,
        articles: action.articles
      })
    case 'VIEW_ARTICLE':
      return ({
        ...state,
        article: action.article
      })

    case 'LIKE_ARTICLE':
      const newArticle = { ...state.article, likes: state.article.likes + 1 }
      //console.log('article', state.article)
      const updatedArticles = state.articles.map(a => a._id === newArticle._id ? newArticle : a)
      return ({
        articles: updatedArticles,
        article: newArticle
      })

    case 'ADD_ARTICLE':
      const newArticles = state.articles.concat(action.data.newArticle)
      return ({ ...state, articles: newArticles })
    case 'COMMENT_ARTICLE':
      const updatedArticle = { ...state.article, comments: state.article.comments.concat(action.newComment) }

      const upArticles = state.articles.map(a => a._id === updatedArticle._id ? updatedArticle : a)
      return ({
        articles: upArticles,
        article: updatedArticle
      })

    default:
      return state
  }
}
