import React, { Component } from "react";
import style from "./ManageCampaigns.module.scss";
import Table from "../Table/Table.component.js";
import sample from "../../assets/sample.png"
import Bitmap from "../../assets/Bitmap.png"
export class ManageCampaigns extends Component {
  state = {
    selectedTab: 0,
    selectedTabData: [],
    tabs: [
      { key: 0, value: "Upcoming Campaigns", data: [] },
      { key: 1, value: "Live Campaigns", data: [] },
      { key: 2, value: "Past Campaigns", data: [] },
    ],
    data: [
      {
        name: "Test Whatsapp",
        region: "US",
        createdOn: 1559807714999,
        price: "Price info of Test Whatsapp",
        csv: "Some CSV link for Whatsapp",
        report: "Some report link for Whatsapp",
        image_url: Bitmap,
      },
      {
        name: "Super Jewels Quest",
        region: "CA, FR",
        createdOn: 1559806715124,
        price: "Price info of Super Jewels Quest",
        csv: "Some CSV link for Super Jewels Quest",
        report: "Some report link for Super Jewels Ques",
        image_url: Bitmap,
      },
      {
        name: "Mole Slayer",
        region: "FR",
        createdOn: 1559806711124,
        price: "Price info of Mole Slayer",
        csv: "Some CSV link for Mole Slayer",
        report: "Some report link for Mole Slayer",
        image_url: Bitmap,
      },
      {
        name: "Mancala Mix 1",
        region: "JP",
        createdOn: 1600046719886,
        price: "Price info of Mancala Mix 1",
        csv: "Some CSV link for Mancala Mix 1",
        report: "Some report link for Mancala Mix 1",
        image_url: sample,
      },
      {
        name: "Test Whatsapp",
        region: "US",
        createdOn: 1600942760201,
        price: "Price info of Test Whatsapp",
        csv: "Some CSV link for Whatsapp",
        report: "Some report link for Whatsapp",
        image_url: sample,
      },
      {
        name: "Super Jewels Quest",
        region: "CA, FR",
        createdOn: 1600942760201,
        price: "Price info of Super Jewels Quest",
        csv: "Some CSV link for Super Jewels Quest",
        report: "Some report link for Super Jewels Ques",
        image_url: sample,
      },
      {
        name: "Mole Slayer",
        region: "FR",
        createdOn: 1600942760201,
        price: "Price info of Mole Slayer",
        csv: "Some CSV link for Mole Slayer",
        report: "Some report link for Mole Slayer",
        image_url: Bitmap,
      },
      {
        name: "Mancala Mix",
        region: "JP",
        createdOn: 1600942760201,
        price: "Price info of Mancala Mix",
        csv: "Some CSV link for Mancala Mix",
        report: "Some report link for Mancala Mix",
        image_url: Bitmap,
      },
      {
        name: "Mancala Mix 1",
        region: "JP",
        createdOn: 1600942760201,
        price: "Price info of Mancala Mix 1",
        csv: "Some CSV link for Mancala Mix 1",
        report: "Some report link for Mancala Mix 1",
        image_url: Bitmap,
      },
      {
        name: "Mancala Mix 2",
        region: "JP",
        createdOn: 1600942760201,
        price: "Price info of Mancala Mix 2",
        csv: "Some CSV link for Mancala Mix 2",
        report: "Some report link for Mancala Mix 2",
        image_url: Bitmap,
      },
      {
        name: "Test Whatsapp",
        region: "US",
        createdOn: 1601940540697,
        price: "Price info of Test Whatsapp",
        csv: "Some CSV link for Whatsapp",
        report: "Some report link for Whatsapp",
        image_url: Bitmap,
      },
      {
        name: "Super Jewels Quest",
        region: "CA, FR",
        createdOn: 1601940540696,
        price: "Price info of Super Jewels Quest",
        csv: "Some CSV link for Super Jewels Quest",
        report: "Some report link for Super Jewels Ques",
        image_url: Bitmap,
      },
      {
        name: "Mole Slayer",
        region: "FR",
        createdOn: 1601940540695,
        price: "Price info of Mole Slayer",
        csv: "Some CSV link for Mole Slayer",
        report: "Some report link for Mole Slayer",
        image_url: Bitmap,
      },
      {
        name: "Mancala Mix",
        region: "JP",
        createdOn: 1601940540634,
        price: "Price info of Mancala Mix",
        csv: "Some CSV link for Mancala Mix",
        report: "Some report link for Mancala Mix",
        image_url: Bitmap,
      },
      {
        name: "Mancala Mix 3",
        region: "JP",
        createdOn: 1601990570633,
        price: "Price info of Mancala Mix 3",
        csv: "Some CSV link for Mancala Mix 3",
        report: "Some report link for Mancala Mix 1",
        image_url: Bitmap,
      },
    ],
  };
  componentDidMount() {
    let { data } = this.state;
    console.log(data);
    let currentEvents = [],
      pastEvents = [],
      futureEvents = [];
    data.map((ele) => {
      if (new Date().getDate() === new Date(ele.createdOn).getDate())
        currentEvents.push(ele);
      else if (new Date() > new Date(ele.createdOn)) pastEvents.push(ele);
      else if (new Date() < new Date(ele.createdOn)) futureEvents.push(ele);
    });
    this.setState(
      {
        selectedTabData: [...futureEvents],
        currentEvents: [...currentEvents],
        pastEvents: [...pastEvents],
        futureEvents: [...futureEvents],
      },
    );
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
