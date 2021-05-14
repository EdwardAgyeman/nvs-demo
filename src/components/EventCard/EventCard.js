import React from "react";
import classes from "./EventCard.module.css";

const EventCard = ({ eventTitle, eventDescription, index, onClick }) => {
  const currentElement = "card" + (index + 1);

  return (
    <div id={`card${index+1}`} className={[classes.cardWrapper, classes[currentElement]].join(" ")}>
      <h3 className={classes.cardTitle}>{eventTitle}</h3>
      <p>{eventDescription}</p>
      <button onClick={() => {onClick(index)}}>Join Event</button>
    </div>
  );
};

export default EventCard;
