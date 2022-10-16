import React, { useEffect, useState } from "react";
import { eventData } from "./eventData";
import EventCard from "./EventCard/EventCard";

import "./Event.css";
import { Fade } from "react-awesome-reveal";

const Event = () => {
  const [day, setDay] = useState("ALL");
  const [elements, setElements] = useState(eventData);
  const [query, setQuery] = useState("");
  

 
  useEffect(() => {
    setElements(
      eventData.map((ele) => {
        const events = ele.info.filter(
          (eve) =>
            (String(eve.day) === day || day === "ALL") &&
            eve.name.toLowerCase().includes(query.toLowerCase())
        );
        return {
          ...ele,
          info: events,
        };
      })
    );
  }, [day,query]);

  const handleDay = (e) => {
    setDay(e.target.value);
  };
  return (
    <div className="event">
      <div className="event-container">
        <h1 className="heading">
          EVENTS <div className="bottom_line"></div>
        </h1>
        <div className="event-types ">
          <ul>
            <li key={1}>
              <a href="#Technical">Technical Events</a>
            </li>
            <li key={2}>
              <a href="#Cultural">Cultural Events</a>
            </li>
            <li key={3}>
              <a href="#Other Events">Other Events</a>
            </li>
            <li key={4}>
              <a href="#Workshop">Workshops</a>
            </li>
          </ul>
        </div>

        <form action="">
          <input
            type="search"
            className="input-field"
            placeholder="Search Events"
            onChange={(e) => setQuery(e.target.value)}
          ></input>
        </form>

        <div className="event-day-filter">
          <button
            onClick={handleDay}
            className={`${day === "ALL" ? "active" : ""}`}
            value={"ALL"}
          >
            ALL
          </button>
          <button
            onClick={handleDay}
            className={`${day === "1" ? "active" : ""}`}
            value={"1"}
          >
            DAY1
          </button>
          <button
            onClick={handleDay}
            className={`${day === "2" ? "active" : ""}`}
            value={"2"}
          >
            DAY2
          </button>
          <button
            onClick={handleDay}
            className={`${day === "3" ? "active" : ""}`}
            value={"3"}
          >
            DAY3
          </button>
        </div>
      </div>

      <div className="event-section">
        {elements.map((value) => {
          console.log(value.info)
          if (value.info.length > 0) {
           
            return (
            <div className="event-type">
              <h1 className="heading" id={value.type}>
                {value.type} <div className="bottom_line"></div>
              </h1>
              <div className="event-type-cards">
                {value.info.map((value, index) => {
                  return <EventCard key={index} data={value} />;
                })}
              </div>
            </div>
          );}
        })}

        {elements.filter((ele)=>ele.info.length===0).length==elements.length && (
          <Fade>
            <div className="no-event">
              <h6>No events found!</h6>
              <p>Try changing up the filters</p>
            </div>
          </Fade>
        )}
      </div>
    </div>
  );
};

export default Event;
