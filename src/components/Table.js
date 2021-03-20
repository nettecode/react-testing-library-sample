import React from 'react'

import './Table.css'

function Table(props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
          </tr>
        </thead>
        <tbody>
          {!!props.data.length && props.data.map(el => (
            <tr key={el.url}>
              <td>{el.name}</td>
              <td>{el.height}</td>
              <td>{el.mass}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
