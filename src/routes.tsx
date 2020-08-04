import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TearcherList from './pages/TeacherList';
import TearcherForm from './pages/TeacherForm';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/study" component={TearcherList} />
      <Route path="/give-classes" component={TearcherForm} />
    </BrowserRouter>
  );
}

export default Routes;