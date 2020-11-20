import { React } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Layout } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
// import Loading from './components/Loading';
import './App.css';

const App = () => {
  return (
    // <Suspense fallback={Loading}>
      <BrowserRouter>
        <Layout>
          <Header/>
          <Main/>
          <Footer/>
        </Layout>
      </BrowserRouter>
    // </Suspense>
  );
}

export default App;
