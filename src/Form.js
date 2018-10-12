import React from 'react';
import { connect } from 'react-redux';

import { addNews } from './actions';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      content: '',
      author: ['Рэй Бредбери', 'Оскар Уайлд', 'Михаил Булгаков',
                'Анри Гидель', 'Даниэль Пеннак', 'Чак Паланик',
                'Сьюис Кэрролл', 'Туве Янссон', 'Маргарет Митчелл',
                'Константин Леонтьев', 'Илья Ильф', 'Фрэнсис Скотт',
                'Хулио Кортасар', 'Харпер Ли'],
      getAuthor: ''
    }

    this.inputData  = this.inputData.bind(this); 
    this.addNews    = this.addNews.bind(this); 
    this.resetForm  = this.resetForm.bind(this); 
  }

  inputData(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  addNews(e) {
    e.preventDefault();
    
    let new_news = {
      title: this.state.title,
      content: this.state.content,
      getAuthor: this.state.getAuthor,
    }

    this.props.addNews(new_news);

    this.resetForm();
  }

  resetForm() {
    this.setState({
      title: '',
      content: ''
    });
  }
  
  render() {
    return (
      <form onSubmit={this.addNews}>
        <div className="form-group">
          <input value={this.state.title} name="title" className="form-control" placeholder="News title" onChange={this.inputData} />
        </div>
        <div className="form-group">
          <textarea value={this.state.content} name="content" className="form-control" placeholder="News content" onChange={this.inputData}></textarea>
        </div>
        <select className="form-group" name="getAuthor" onChange={this.inputData}>
          <option disabled selected>Выберите автора</option>
          {this.state.author.map( (item, index) => {
            return (
              <option key={index} value={item}>{item}</option>
            );
          })}
        </select> <br></br>
        <button type="submit" className="btn btn-success">Add</button>
        <button type="button" className="btn btn-link" onClick={this.resetForm}>Reset</button>
      </form>
    );
  }
}

export default connect(null, { addNews })(Form);