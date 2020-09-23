import React from "react";
import style from "./Tabs.module.scss";
export const Tabs = () => (
  <div className={style.wrapperDiv}>
    <div className={style.tabs}>
        <span>Upcoming Campaigns</span>
        <span>Live Campaigns</span>
        <span>Past Campaigns</span>
    </div>
  </div>
);
