import React, { useState,useEffect, useContext  } from 'react';
import { Navbar, Nav, NavDropdown ,Container, Row ,Col} from "react-bootstrap";
import Recherche from "./Recherche";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Movie from './Movie';
import MoviesList from './MoviesList';
import { StateContext } from "./State";

import "./index.css";
import "./assets/bootstrap/css/bootstrap.min.css";
 

export default function App() {
  console.log(StateContext);
  const [state, dispatch] = useContext(StateContext);

  const TMDB_BASE_URL = `https://api.themoviedb.org/3`;
  const constructUrlG = (path) => {
    return `${TMDB_BASE_URL}/movie/${path}?api_key=e10d4a17679f35fc3b259c917bdf9e12`;
  };

  // popular fetching
  useEffect(() => {
    fetch(constructUrlG("popular"))
      .then((response) => response.json())
      .then((data) => dispatch({ type: "SET_Movies", payload: data.results }));
  }, []);


  return (
    <Router>
      <div className="App">
        
      
       <Container id="cont" className="justify-content-md-center">
       <Row md={2} lg={9} className="HeaderRow"><div ><Recherche /></div></Row>
      <Row>
      <Col className="col-sm-3"><MoviesList /></Col>  
      <Col  className="col-sm-9">
        <Route path="/movie/:id" component={Movie} /></Col> 
         
      </Row>
    </Container>
    
      </div>
    </Router>
  );
}
