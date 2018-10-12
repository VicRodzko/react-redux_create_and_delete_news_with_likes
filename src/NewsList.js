import React from 'react';
import { connect } from 'react-redux';

import { deleteNews, getLikes } from './actions';
import './NewsList.css';

function NewsList(props) {
  return (
    <div className="container">
      {props.news_to_component.map((item)=>{
        return (
          <div key={item.id} className="newNews border form-group rounded">
            <h2>{item.title}</h2>
            <p>{item.content}</p>
            <p><i><b>Автор: </b>{item.getAuthor}</i></p>
            <p><span>{item.likes}</span></p>
            <button className="btn btn-danger" onClick={() => {props.getLikes(item.id)}}>+</button>
            <button className="btn btn-danger" onClick={() => {props.deleteNews(item.id)}}>Delete</button>
          </div>
        );
      })}
    </div>
  ); 
}

function mapStateToProps(state) {
  return {
    news_to_component: state.news
  }
}

export default connect(mapStateToProps, { deleteNews, getLikes })(NewsList);