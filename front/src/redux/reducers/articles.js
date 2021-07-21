/* eslint-disable no-case-declarations */

const initialState = {
  articles: [],
  article: {}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_ARTICLES':
      return {
        ...state,
        articles: action.articles
      }
    case 'VIEW_ARTICLES':
      return {
        ...state,
        article: action.article
      }

    case 'CLAP_ARTICLE':
      const article = Object.assign({}, state.article)
      article.claps++
      console.log('article', article)
      return {
        ...state,
        article: article
      }
    default:
      return state
  }
}
