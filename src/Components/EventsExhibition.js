import React, { useState } from "react";
import Navbar from "./Navbar";
import "../CSS/Events.css";
import image from "../Images/aziz-acharki-gv3VWXwKrrA-unsplash.jpg";
import { data } from "../constants";
import Events from "./Events";

const EventsExhibition = () => {

  const [searchTerm, setSearchTerm]=useState("");

  return (
    <div>
      <Navbar />
      <div className="search-event">
        <div className="form-group">
          <i className="fa fa-search"></i>
          <input
            type="text"
            className="form-control"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for an Event.."
          />
        </div>
      </div>

      <div className="events-and-exhibitions">
        <div className="row">
          <div className="col-md-8">
            <Events searchTerm={searchTerm} data={data}/>
          </div>
          <div className="col-md-4">
            <div className="event-slider">
              <div className="event-image">
                <img src={image} alt="" />
                <div className="event-name">The Art of Land</div>
                <div className="event-desc">
                  Lorem ipsum dolor sit amet. 09:00 AM- 11:00 AM
                </div>
              </div>
              <div className="event-image">
                <img src={image} alt="" />
                <div className="event-name">The Art of Land</div>
                <div className="event-desc">
                  Lorem ipsum dolor sit amet. 09:00 AM- 11:00 AM
                </div>
              </div>
              <div className="event-image">
                <img src={image} alt="" />
                <div className="event-name">The Art of Land</div>
                <div className="event-desc">
                  Lorem ipsum dolor sit amet. 09:00 AM- 11:00 AM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsExhibition;
