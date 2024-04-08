import React from 'react';

import './App.css'
import Landing from './components/Landing';

//Routes
import { createBrowserRouter, 
          createRoutesFromElements,
          Route, 
          RouterProvider } from 'react-router-dom';
import NavbarLayout from './components/NavbarLayout';
import AboutMe from './components/NavComponents/AboutMe'
import Artworks from './components/NavComponents/Artworks'
import Cards from './components/NavComponents/Cards'
import Contact from './components/NavComponents/Contact'
import Story from './components/NavComponents/Story'




const router = createBrowserRouter (
  createRoutesFromElements (
    // Wrap all the routes within the website
    <Route path='/' element={<NavbarLayout/>}> 
      <Route index element={<Landing />}/>
        <Route path='Aboutme' element={<AboutMe />}/>
        
        <Route path='Contact' element={<Contact />}/>
        
        <Route path='Home' element={<Landing/>}/>

        <Route path='Artworks' element={<Artworks />}>
          <Route path='Cards' element={<Cards/>}/>
          <Route path='Story' element={<Story/>}/>
        </Route>
    </Route>
  )
) 

function App() {

  return (
    <div className="App">
      <div>
        <RouterProvider router={router}/>
      </div>
      
      
    </div>
  );

}

export default App;
