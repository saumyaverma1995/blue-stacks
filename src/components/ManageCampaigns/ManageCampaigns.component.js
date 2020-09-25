import React, { Component } from "react";
import style from "./ManageCampaigns.module.scss";
import Table from "../Table/Table.component.js";
import data from "./data.js";
import { setEventTypes } from "../../reducer/events/events.actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import isEqual from "lodash/isEqual";

const mapStateToProps = (store) => {
  const events = store.eventsReducer.data;
  return {
    events,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      setEventTypes,
    },
    dispatch
  );
};
class ManageCampaigns extends Component {
  state = {
    selectedTab: 0,
    selectedTabData: [],
    tabs: [
      { key: 0, value: "Upcoming Campaigns" },
      { key: 1, value: "Live Campaigns" },
      { key: 2, value: "Past Campaigns" },
    ],
  };
  componentDidUpdate(prevProps) {
    if (!isEqual(this.props.events, prevProps.events)) {
      this.updateData(this.props.events);
    }
  }
  updateData(events) {
    let currentEvents = [],
      pastEvents = [],
      futureEvents = [];
    events.map((ele) => {
      if (new Date().getDate() === new Date(ele.createdOn).getDate())
        currentEvents.push(ele);
      else if (new Date() > new Date(ele.createdOn)) pastEvents.push(ele);
      else if (new Date() < new Date(ele.createdOn)) futureEvents.push(ele);
    });
    this.setState({
      selectedTabData: [...futureEvents],
      currentEvents: [...currentEvents],
      pastEvents: [...pastEvents],
      futureEvents: [...futureEvents],
    });
  }
  componentDidMount() {
    this.props.setEventTypes(data);
    // let currentEvents = [],
    //   pastEvents = [],
    //   futureEvents = [];
    // data.map((ele) => {
    //   if (new Date().getDate() === new Date(ele.createdOn).getDate())
    //     currentEvents.push(ele);
    //   else if (new Date() > new Date(ele.createdOn)) pastEvents.push(ele);
    //   else if (new Date() < new Date(ele.createdOn)) futureEvents.push(ele);
    // });
    // this.setState({
    //   selectedTabData: [...futureEvents],
    //   currentEvents: [...currentEvents],
    //   pastEvents: [...pastEvents],
    //   futureEvents: [...futureEvents],
    // });
  }
  tabClickHandler = (tab) => {
    let { currentEvents, pastEvents, futureEvents } = this.state;
    switch (tab.key) {
      case 0:
        this.setState({
          selectedTabData: [...futureEvents],
        });
        break;
      case 1:
        this.setState({
          selectedTabData: [...currentEvents],
        });
        break;
      case 2:
        this.setState({
          selectedTabData: [...pastEvents],
        });
        break;
      default:
        console.log("default");
    }
    this.setState({
      selectedTab: tab.key,
    });
  };
  render() {
    let { tabs, selectedTab, selectedTabData } = this.state;
    return (
      <div className={style.outerDiv}>
        <h2>Manage Campaigns</h2>
        <div className={style.wrapperDiv}>
          <div className={style.tabs}>
            {tabs.map((tab, index) => (
              <span
                key={index}
                className={selectedTab === tab.key ? style.active : ""}
                onClick={() => this.tabClickHandler(tab)}
              >
                {tab.value}
              </span>
            ))}
          </div>
        </div>
        <Table selectedTabData={selectedTabData} />
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageCampaigns);
