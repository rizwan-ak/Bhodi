import React, { Component } from "react";

import "./Chat.css";
import ProfileIcon from "../../assets/profileIcon.png";
import ArrowIcon from "../../assets/arrowIcon.png";
import BackArrowIcon from "../../assets/backArrowIcon.png";
import dp from "../../assets/dp.jpg";

import ChatList from "../../components/chatList/ChatList";

export default class Chat extends Component {
  state = {
    showList: true,
    showChat: true,
    height100: "",
    height90: "",
    height10: "",
    isMob: false,
  };

  toggleFn() {
    this.setState({
      showChat: !this.state.showChat,
      showList: !this.state.showList,
    });
  }
  componentDidMount() {
    console.log(window.screen.width);
    console.log(window.screen.height);

    if (window.screen.width <= 420) {
      this.setState({
        showChat: !this.state.showChat,
        height100: "100vh",
        height90: "90vh",
        isMob: true,
        height10: "10vh",
      });
    }
  }
  render() {
    const { showList } = this.state;
    const { showChat } = this.state;

    return (
      <div className="chatBG">
        <div
          className="container-fluid d-flex align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <div
            className="row px-md-3"
            style={{ width: "100vw", overflowY: "hidden" }}
          >
            <div className="col-12 col-md-1"></div>
            {showList && (
              <div className="col-md-3 col-12 px-0 px-md-4 px-xl-5">
                <div
                  className="bg-white rounded-md shadow p-3"
                  style={{ height: this.state.height100 }}
                >
                  <div className="pt-3" style={{ height: this.state.height10 }}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                  </div>
                  <div
                    className="myOverFlow pt-2"
                    style={{ height: this.state.height90 }}
                  >
                    <div className="d-none d-md-block">
                      <img alt="dp" height="22" src={ProfileIcon} />
                      <span className="ml-3 small font-weight-bold">
                        75 CONTACTS
                      </span>
                      <hr />
                    </div>
                    <div
                      onClick={this.state.isMob ? () => this.toggleFn() : null}
                    >
                      <ChatList seen />
                    </div>
                    <div
                      onClick={this.state.isMob ? () => this.toggleFn() : null}
                    >
                      <ChatList />
                    </div>
                    <div
                      onClick={this.state.isMob ? () => this.toggleFn() : null}
                    >
                      <ChatList />
                    </div>
                    <div
                      onClick={this.state.isMob ? () => this.toggleFn() : null}
                    >
                      <ChatList />
                    </div>
                    <div
                      onClick={this.state.isMob ? () => this.toggleFn() : null}
                    >
                      <ChatList />
                    </div>
                    <div
                      onClick={this.state.isMob ? () => this.toggleFn() : null}
                    >
                      <ChatList />
                    </div>
                    <div
                      onClick={this.state.isMob ? () => this.toggleFn() : null}
                    >
                      <ChatList />
                    </div>
                    <div
                      onClick={this.state.isMob ? () => this.toggleFn() : null}
                    >
                      <ChatList />
                    </div>
                    <div
                      onClick={this.state.isMob ? () => this.toggleFn() : null}
                    >
                      <ChatList />
                    </div>
                    <div
                      onClick={this.state.isMob ? () => this.toggleFn() : null}
                    >
                      <ChatList />
                    </div>
                    <div
                      onClick={this.state.isMob ? () => this.toggleFn() : null}
                    >
                      <ChatList />
                    </div>
                    <div
                      onClick={this.state.isMob ? () => this.toggleFn() : null}
                    >
                      <ChatList />
                    </div>
                    <div
                      onClick={this.state.isMob ? () => this.toggleFn() : null}
                    >
                      <ChatList />
                    </div>
                    <div
                      onClick={this.state.isMob ? () => this.toggleFn() : null}
                    >
                      <ChatList />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showChat && (
              <div className="col-md-6 col-12 px-0 px-md-4 px-xl-5">
                <div
                  className="bg-white rounded-md shadow  pr-md-5  p-3"
                  style={{ height: this.state.height100 }}
                >
                  <div
                    className="d-block d-md-none px-3"
                    style={{ position: "absolute" }}
                    onClick={() => this.toggleFn()}
                  >
                    <img src={BackArrowIcon} width="25px" alt="" />
                  </div>
                  <div
                    className="myOverFlow"
                    style={{ height: this.state.height90 }}
                  >
                    <div className="row p-2">
                      <div className="col-3 col-md-2"></div>
                      <div className="col-9 col-md-10 myBGColor p-2 px-3">
                        <h6>MEMBER NAME</h6>
                        <p className="small text-muted">10-10-2020 02.30 am</p>
                        <p className="mt-n2">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quod quia nihil dignissimos laudantium magnam
                          deleniti odit.
                        </p>
                      </div>
                    </div>

                    <div className="row p-2">
                      <div className="col-3 col-md-2"></div>
                      <div className="col-9 col-md-10">
                        <img
                          alt="dp"
                          width="75px"
                          src={dp}
                          className="rounded mr-3"
                        />
                        <img
                          alt="dp"
                          width="75px"
                          src={dp}
                          className="rounded mr-3"
                        />
                        <img
                          alt="dp"
                          width="75px"
                          src={dp}
                          className="rounded mr-3"
                        />
                        <img
                          alt="dp"
                          width="75px"
                          src={dp}
                          className="rounded mr-3"
                        />
                      </div>
                    </div>

                    <div className="row p-2">
                      <div className="col-3 col-md-2 d-flex align-self-center justify-content-center">
                        <img
                          alt="dp"
                          width="40px"
                          height="40px"
                          src={dp}
                          className="rounded-circle"
                        />
                      </div>
                      <div className="col-9 col-md-10 speechBubble p-2 px-3">
                        <h6>MEMBER NAME</h6>
                        <p className="small text-muted">10-10-2020 02.30 am</p>
                        <p className="mt-n2">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quod quia nihil dignissimos laudantium magnam
                          deleniti odit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row p-2 px-3">
                    <div className="col-md-2"></div>
                    <div className="col-12 d-flex align-self col-md-10 p-0">
                      <div className="input-group myBGColor">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Send"
                        />
                        <div>
                          <span
                            className="myBGColor input-group-text"
                            style={{ border: 0 }}
                          >
                            <img alt="dp" height="23" src={ArrowIcon} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="col-12 col-md-2 "></div>
          </div>
        </div>
      </div>
    );
  }
}
