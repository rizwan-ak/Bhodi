import React, { Component } from "react";

import dp from "../../assets/dp.jpg";
import TickIcon from "../../assets/tickIcon.png";

import "./ChatList.css";

export default class ChatList extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-2">
          <img alt="dp" width="40" src={dp} className="rounded-circle" />
        </div>
        <div className="col-10 px-4">
          <div className="d-flex justify-content-between">
            <h6>ALEX BEXTER</h6>
            <span className="text-muted">
              {this.props.seen ? (
                <img
                  alt="dp"
                  width="20"
                  src={TickIcon}
                  className="rounded-circle"
                />
              ) : (
                "Send"
              )}
            </span>
          </div>
          <p className="text-muted inLine mt-n2 w-75">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
            saepe cumque esse
          </p>
        </div>
      </div>
    );
  }
}
