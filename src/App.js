//your code goes here
import React, { useState } from 'react';
import { render } from 'react-dom';
// import Pet from './Pet';
import SearchParams from './searchParams';
import { Link, Router } from '@reach/router';
import Details from './Details';
import ThemeContext from './ThemeContext';

//"eslint-disable-line warning-name" - to disable eslint warning

const App = () => {
  // return React.createElement(
  //     'div', {}, //second argument is for attributes that "div" should have
  //     [
  //         React.createElement('h1', {}, 'Adopt Me'),
  //         React.createElement(Pet, {
  //             name: 'Luna',
  //             breed: 'Havanese',
  //             animal: 'Dog',
  //         }),
  //         React.createElement(Pet, {
  //             name: 'Pepper',
  //             breed: 'Cockatiel',
  //             animal: 'Bird',
  //         }),
  //         React.createElement(Pet, {
  //             name: 'Doink',
  //             breed: 'Mixed',
  //             animal: 'Cat',
  //         }),
  //     ]
  // ); // third argument for child of "div"

  const themeHook = useState('darkblue');

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          {/* <Pet name={'Luna'} breed={'Havanese'} animal={'Dog'} />{' '}
      <Pet name={'Pepper'} breed={'Cockatiel'} animal={'Bird'} />{' '}
      <Pet name={'Doink'} breed={'Mixed'} animal={'Cat'} />{' '} */}
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById('root'));
