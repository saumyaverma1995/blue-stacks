import React from "react";
import style from "./ManageCampaigns.module.scss";
import { Tabs } from "../Tabs/Tabs.component.js";
import { Table } from "../Table/Table.component.js";
export const ManageCampaigns = () => (
  <div className={style.outerDiv}>
    <h2>Manage Campaigns</h2>
    <Tabs />
    <Table />
  </div>
);
