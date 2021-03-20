import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Table from '../components/Table';

function TableContainer() {
  const [people, setPeople] = useState([]);
  const [term, setTerm] = useState('');

  const handleSearchTermChanged = (e) => {
    setTerm(e.target.value);
  }

  useEffect(() => {
    const url = term ? 'https://swapi.dev/api/people/?search=' + term : 'https://swapi.dev/api/people/';
    axios.get(url)
    .then(res => {
      setPeople(res.data.results);
    });
  }, [term])

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" aria-label="search-bar" type="text" onChange={(e) => handleSearchTermChanged(e)} value={term}/>
      
      <Table data={people} />
    </div>
  )
}

export default TableContainer
