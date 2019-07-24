import React from 'react';
import './search-box.styles.css';

export const Search = ({ searchEventHandler }) => (
  <input
    className='search'
    type='search'
    name='searchField'
    placeholder='SearchByKeyword'
    onChange={searchEventHandler}
  />
);
