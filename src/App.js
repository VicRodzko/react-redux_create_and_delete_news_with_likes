import React from 'react';

import Form from './Form';
import NewsList from './NewsList';

function App(props) {
  return (
    <div className="container">
      <h1>Новости века</h1>
      <div className="row">
        <div className="col-md-6">
          <Form />
        </div>
        <div className="col-md-6">
          <NewsList />
        </div>
      </div>
    </div>
  );
}

export default App;