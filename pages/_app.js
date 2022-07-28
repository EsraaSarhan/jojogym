import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
// import { Routes, Route, BrowserRouter as Router } from "react-router";
import PreLoader from "../src/layouts/PreLoader";
import {
  Customers,
  NewCustomer,
  Services
} from "../src/layouts/header/Menus";
import "../styles/globals.css";




const App = ({ Component, pageProps }) => {
  const [loader, setLoader] = useState(true);
  const [isLoggedIn, setisLoggedIn] = useState(null);
 const logIn = () => {
 setisLoggedIn(true);
 };
 const logOut = () => {
 setisLoggedIn(false);
 };

  useEffect(() => {
    if(localStorage.getItem('token')){
      setisLoggedIn(true);
      document.loggedUserName = localStorage.getItem('loggedUserName');
      document.userToken = localStorage.getItem('token');
    }
    else{
      setisLoggedIn(false);
      localStorage.clear();
    }
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);
  return (
    <Fragment>
      <Head>
        <title>جوجو جيم</title>
        <link rel="shortcut icon" href="assets/images/favicon.ico" />
        <link
          rel="apple-touch-icon-precomposed"
          href="assets/images/Favicon.png"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Salsa&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdn.rtlcss.com/bootstrap/v4.5.3/css/bootstrap.min.css" integrity="sha384-JvExCACAZcHNJEc7156QaHXTnQL3hQBixvj5RV5buE7vgnNEzzskDtx9NQ4p6BJe" crossOrigin="anonymous" async />
        <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.6.0.slim.min.js" integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous"></script>
                <script src="https://cdn.rtlcss.com/bootstrap/v4.5.3/js/bootstrap.bundle.min.js" integrity="sha384-40ix5a3dj6/qaC7tfz0Yr+p9fqWLzzAXiwxVLt9dw7UjQzGYw6rWRhFAnRapuQyK" crossOrigin="anonymous" async></script>
      </Head>
      {loader && <PreLoader />}
      <Component {...pageProps} />
 
      
    </Fragment>
  );
};
export default App;
