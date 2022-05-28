import React, { useRef } from "react";
import Header from "../header/Header";
import { RiContactsFill } from "react-icons/ri";
import "./Contact.scss";

import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {Loader} from 'react-loaders'

const Contact = () => {
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_98ettf8",
        "template_9g6b8a4",
        refForm.current,
        "TJdhrrnEyQe-qJhv1"
      )
      .then(
        () => {
          alert("Message succesfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send message, please try again");
        }
      );
  };
  return (
    <>
      <div className="contact">
        <Header headerText="Contact" icon={<RiContactsFill size={40} />} />
      </div>
      <div className="container">
          
        <div className="contact-left">
            
          <form className="contact-form" ref={refForm} onSubmit={sendEmail}>
            <h1>Lets Talk</h1>
            <ul>
              <li>
                <input
                  type="text"
                  name="user_name"
                  className="half"
                  placeholder="Name"
                  required
                />
              </li>
              <li>
                <input
                  type="email"
                  name="user_email"
                  className="half"
                  placeholder="Email"
                  required
                />
              </li>
              <li>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </li>
              <li>
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>
              </li>
              <li>
                <button className="flat-button" type="submit">
                  Send
                </button>
              </li>
            </ul>
          </form>
        </div>
        <div className="contact-right">
          <div className="map-wrap">
            <MapContainer
              center={[-33.9596, 18.3743]}
              zoom={13}
              scrollWheelZoom={true}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[-33.9596, 18.3743]}>
                <Popup>
                  Sean is here, let's grab coffee!
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
      <Loader type="pacman"/>
    </>
  );
};

export default Contact;
