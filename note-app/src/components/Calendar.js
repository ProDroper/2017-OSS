import React from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

export default class Calendar extends React.Component {
    render() {
      var today = new Date();
      var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    return (
      <InfiniteCalendar
        width={400}
        height={400}
      />
    );
  }
}
