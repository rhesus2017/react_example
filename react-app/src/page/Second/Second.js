// react
import React from 'react';

// component
import Header from '../../component/Header/Header';
import Main from '../../component/Main/Main';
import Footer from '../../component/Footer/Footer';

// css
import './Second.css';

const Second = (props) => {

  return(
    <div className="second">
      <Header></Header>
      <Main title={props.title} name={props.name}></Main>
      <Footer></Footer>
    </div>
  )

}

export default Second;