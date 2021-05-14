import React from "react";
import classes from "./EventPage.module.css";
import { useHistory } from "react-router-dom";
import mockData from "../../constants/mockData";
import queryParams from '../../constants/queryParams'
import appRoutes from '../../constants/appRoutes'
import {FaRegCalendarAlt, FaPhoneSquare, FaRegClock, FaPortrait, FaWarehouse, FaMusic, FaChartBar, FaChalkboard, FaFileAlt} from 'react-icons/fa'

const EventPage = () => {
  const history = useHistory();
  // access to query params from url
  const urlQueryParams = history.location.search;
  // manipulating query params
  const urlParams = new URLSearchParams(urlQueryParams);
  // getting the query params by their name  
  const currentEventIndex = urlParams.get(queryParams.eventId);
  const currentEventData = mockData[currentEventIndex];
  console.log(mockData[currentEventIndex]);

  const goToEventTown = () => {
    history.push({
      pathname: appRoutes.index
    })
  }

  return (
    <div className={classes.background}>
      <div className={classes.eventBox}>
        <div className={classes.eventDetails}>
          <p><FaRegClock /> Time<br/>09:00 AM - 11:00 AM</p>
          {/* {currentEventData.eventTitle} */}
          <p><FaRegCalendarAlt /> Session<br/>Research in Oncology 2021</p>
          <p><FaPortrait /> Speaker<br/>Vasant Narasimhan, CEO</p>
          <p><FaWarehouse /> Venue<br/>Auditorium 1</p>
        </div>
        <hr style={{height: '0.5px', background: 'white', border: 'none', opacity: '.4'}}/>
        <div className={classes.eventDetails}>
          <div className={classes.largeIcons}><FaMusic size={35} /><p>Speak Your Mind</p></div>
          <div className={classes.largeIcons}><FaChartBar size={35} /><p>Mentimeter</p></div>
          <div className={classes.largeIcons}><FaChalkboard size={35} /><p>Whiteboard</p></div>
          <div className={classes.largeIcons}><FaPortrait size={35} /><p>Attendees (250)</p></div>
          <div className={classes.largeIcons}><FaFileAlt size={35} /><p>Resources</p></div>
          <div className={classes.largeIcons}><FaPhoneSquare size={35} /><p>Event Contact</p></div>
        </div>
      </div>
      <div className={classes.controlBox}>
        <button onClick={goToEventTown}>
          Back to Event Town
        </button>
        <button onClick={() => console.log("show details")}>
          Session Details
        </button>
      </div>
    </div>
  );
};

export default EventPage;
