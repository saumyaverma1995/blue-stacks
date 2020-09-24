import React, { Component } from "react";
import style from "./Rows.module.scss";
import Price from "../../assets/Price.png";
import file from "../../assets/file.png";
import report from "../../assets/report.png";
import calendar from "../../assets/calendar.png";
import { changeDateFormat, getDays } from "../../utils";
class Rows extends Component {
  render() {
    let { data } = this.props;
    return (
      <div className={style.row}>
        <div className={style.date}>
          <span className={style.dateText}>
            {changeDateFormat(data.createdOn)}
          </span>
          <span className={style.days}>{getDays(data.createdOn)}</span>
        </div>
        <div className={style.campaign}>
          <img src={`${data.image_url}`} alt=""></img>
          <div className={style.info}>
            <span className={style.campaignName}>{data.name}</span>
            <span className={style.region}>{data.region}</span>
          </div>
        </div>
        <div className={style.view}>
          <img src={Price} alt=""></img>
          <span className={style.pricing}>View Pricing</span>
        </div>
        <div className={style.action}>
          <div className={style.wrapper}>
            <img className={style.csv} src={file} alt=""></img>
            <span className={style.file}>CSV</span>
          </div>
          <div className={style.wrapper}>
            <img className={style.reportImg} src={report} alt=""></img>
            <span className={style.report}>Report</span>
          </div>
          <div className={style.wrapper}>
            <img
              className={style.calendarImg}
              src={calendar}
              alt=""
            ></img>
            <span className={style.calendar}>Schedule Again</span>
          </div>
        </div>
      </div>
    );
  }
}
export default Rows;
