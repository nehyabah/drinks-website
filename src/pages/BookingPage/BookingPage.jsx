import { useState } from "react";
import DatePicker, { TimePicker } from "sassy-datepicker";
import "./styles.css";

function DateInput() {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    console.log(`New date selected - ${newDate.toString()}`);
    setDate(newDate);
  };

  return <DatePicker onChange={onChange} value={date} />;
}

function TimeInput() {
  const [time, setTime] = useState({ hours: 15, minutes: 30 });

  const onChange = (newTime) => {
    console.log(`New time selected - ${newTime}`);
    setTime(newTime);
  };

  return <TimePicker onChange={onChange} value={time} />;
}

export default function BookingPage() {
  return (
    <>
      <DateInput />
      <TimeInput />
    </>
  );
}
