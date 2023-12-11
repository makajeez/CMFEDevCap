import React from 'react';
import BookingForm from './BookingForm';

 const Booking = (props) => {
  return (
  <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} Submitform={props.Submitform}/>

  );
}

export default Booking;