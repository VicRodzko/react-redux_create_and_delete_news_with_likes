const initialState = {
  news: [],
  uniqueId: 1
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_NEWS":
      return {
        news: [
          ...state.news, 
          {
            title: action.data.title,
            content: action.data.content,
            getAuthor: action.data.getAuthor,
            id: state.uniqueId,
            likes: 0
          }
        ],
        uniqueId: state.uniqueId + 1
      };
    
    case "DELETE_NEWS":
      return {
        ...state,
        news: state.news.filter(news => news.id != action.id)
      };

    case "GET_LIKES":
      return {
        ...state,
        news: state.news.map( news => {
          if (news.id === action.id) {
            return { ...news, likes: news.likes + 1 };
          } else {
            return news;
          }
        }) 
      };

    default:
      return state;
  }
}

export default reducer;