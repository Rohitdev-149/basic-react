import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./components/header/header.jsx";
import Hero from "./components/heros/hero.jsx";
import Newcollection from "./components/new-collection/new-collection-header/new-collection.jsx";
import CardDetail from './components/cardDetail/cardDetail';

function App() {
  const cards = [
    { id: "card1", title: 'Card 1', subTitle: 'Subtitle 1', price: '1', description: 'Description 1', image: 'https://images.unsplash.com/photo-1522582324369-31c3f1b8e4c5' },
    { id: "card2", title: 'Card 2', subTitle: 'Subtitle 2', price: '2', description: 'Description 2', image: 'https://images.unsplash.com/photo-1522582324369-31c3f1b8e4c5' },
  
  ];

  return (
    <Router>
      <Switch>
        <div>
          <Header />
          <Hero />
          <Newcollection/>
        </div>
        <Route path="/card/:id">
          <CardDetail cards={cards} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
