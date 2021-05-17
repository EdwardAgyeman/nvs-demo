import React, { useState } from "react";
import EventCard from "../EventCard/EventCard";
import { useHistory } from "react-router-dom";
import appRoutes from "../../constants/appRoutes";
import queryParams from "../../constants/queryParams";
import classes from "./LandingPage.module.css";
// import eventData from "../../constants/mockData";

// Context Menu Import
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import "../../styles/react-contextmenu.css";

const LandingPage = () => {
  const [eventData, seteventData] = useState([
    {
      eventTitle: "Event 1",
      eventDescription:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    },
    {
      eventTitle: "Event 2",
      eventDescription:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    },
    {
      eventTitle: "Event 3",
      eventDescription:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    },
  ]);

  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [index, setIndex] = useState(undefined);

  const history = useHistory();

  const onClickHandler = (eventId) => {
    setShouldAnimate(true);
    setIndex(eventId + 1);
    setTimeout(() => {
      history.push({
        pathname: appRoutes.events,
        search: `${queryParams.eventId}=${eventId}`,
      });
    }, 2000);
  };

  const handleClick = (event, data) => {
    console.log(`clicked`, { event, data });
    console.log("CLICK");
    // Push a new EVENT CARD
    seteventData([
      ...eventData,
      {
        eventTitle: "Event X",
        eventDescription:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
      },
    ]);
  };

  const ID = "ID";

  const attributes = {
    className: "custom-root",
    disabledClassName: "custom-disabled",
    dividerClassName: "custom-divider",
    selectedClassName: "custom-selected",
  };

  return (
    <>
      <ContextMenuTrigger id={ID}>
        <div
          className={[
            classes.background,
            shouldAnimate && index && classes[`card${index}zoom`],
          ].join(" ")}
        >
          {eventData.map((event, index) => {
            return (
              <EventCard
                eventTitle={event.eventTitle}
                eventDescription={event.eventDescription}
                key={index}
                index={index}
                onClick={onClickHandler}
              />
            );
          })}
        </div>
      </ContextMenuTrigger>
      <ContextMenu id={ID}>
        <MenuItem
          data={{ action: "Add Event" }}
          onClick={handleClick}
          attributes={attributes}
        >
          Add Event
        </MenuItem>
        {/* <MenuItem
          data={{ action: "Edit Event" }}
          onClick={handleClick}
          attributes={attributes}
        >
          Edit Event
        </MenuItem>
        <MenuItem divider />
        <MenuItem
          data={{ action: "Delete Event" }}
          onClick={handleClick}
          attributes={attributes}
        >
          Delete Event
        </MenuItem> */}
      </ContextMenu>
    </>
  );
};

export default LandingPage;
