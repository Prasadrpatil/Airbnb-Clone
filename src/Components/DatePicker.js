import React, { useState } from "react";
import "../css/DatePicker.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import { DateRangePicker } from "react-date-range";
import { useHistory } from "react-router-dom";


const DatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [persons, setPersons] = useState(2);
  const history = useHistory();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(range) {
    setStartDate(range.selection.startDate);
    setEndDate(range.selection.endDate);
  }
  return (
    <div className="datePicker">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number of guest <PeopleIcon />
      </h2>
      <input
        min={2}
        defaultValue={2}
        type="number"
        onChange={(e) => setPersons(e.target.value)}
      />
      <Button
        onClick={() => history.push("/search", { persons, startDate, endDate })}
      >
        Search Airbnb
      </Button>
    </div>
  );
};

export default DatePicker;
