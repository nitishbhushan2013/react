import React, { Component } from 'react';

class BookList extends Component {
  render() { 
    return ( 
      <div className="book-list">
        <ul>
          <li>Hamlet</li>
          <li>War and Peace</li>
          <li>The Sound and the Fury</li>
        </ul>
      </div>
    );
  }
}
 
export default BookList;