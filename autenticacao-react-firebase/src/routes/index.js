import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Signin } from '../pages/Signin/signin';
import { Siginup } from '../pages/Signup/siginup';

const Private = ({ Item }) => {
  const signed = false;

  return signed > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path='/home' element={<Private Item={Home} />} />
          <Route path='/' element={<Signin />} />
          <Route exact path='/signup' element={<Siginup />} />
          <Route path='*' element={<Signin />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};
export default RoutesApp;
