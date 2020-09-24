import React, { Component } from "react";
import style from "./Rows.module.scss";
import Price from "../../assets/Price.png";
import file from "../../assets/file.png";
import report from "../../assets/report.png";
import calendar from "../../assets/calendar.png";
import { changeDateFormat, getDays } from "../../utils";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setRowData } from "../../reducer/rows/rows.actions";
import { setEventTypes } from "../../reducer/events/events.actions";

const mapStateToProps = (store) => {
  const events = store.eventsReducer.data;
  return {
    events,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      setRowData,
      setEventTypes
    },
    dispatch
  );
};
class Rows extends Component {
  state = {
    showDatePicker: false,
  };
  openCalendar = () => {
    this.setState({
      showDatePicker: !this.state.showDatePicker,
      selectedDate: null,
    });
  };
  handleDateChange = (date, id) => {
    console.log("...........", new Date(date).getTime(), id);
    let { events } = this.props;
    let selectedRow = events.find((ele) => ele.id === id);
    selectedRow.createdOn = new Date(date).getTime();
    console.log(events);
    this.setState({
      selectedDate: date,
    });
    this.props.setEventTypes(events)
  };
  onCloseCalendar = () => {};
  render() {
    let { data } = this.props;
    let { showDatePicker, selectedDate } = this.state;
    return (
      <>
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
            <div className={style.wrapper} onClick={this.openCalendar}>
              <img className={style.calendarImg} src={calendar} alt=""></img>
              <span className={style.calendar}>Schedule Again</span>
            </div>
          </div>
        </div>
        <label style={{ display: "none" }}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              open={showDatePicker}
              value={selectedDate}
              onClose={this.openCalendar}
              onChange={(date) => this.handleDateChange(date, data.id)}
            />
          </MuiPickersUtilsProvider>
        </label>
      </>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Rows);
