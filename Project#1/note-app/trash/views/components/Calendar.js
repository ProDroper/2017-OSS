import React from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

export default class Calendar extends React.Component {
    render() {
    return (
      <InfiniteCalendar
        width={400}
        height={400}
      />
    );
  }
}
