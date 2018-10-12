export let addNews = news => ({type: "ADD_NEWS", data: news});
export let deleteNews = id => ({type: "DELETE_NEWS", id: id});
export let getLikes = id => ({type: "GET_LIKES", id: id});