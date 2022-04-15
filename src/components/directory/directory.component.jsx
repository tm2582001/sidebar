import React from "react";
import DateData from "../date-data/date-data.component";
import SlotData from "../slot-data/slot-data.component";
import "./directory.styles.css";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      bookingData: [],
      selectedDay: 0,
      selectedSlot: 0,
    };
  }

  componentDidMount() {
    fetch(
      "https://mentorplus.s3.ap-south-1.amazonaws.com/config/availability.json"
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({ bookingData: res }, () => {
          this.setState(
            (prevState) => {
              prevState.bookingData.map(
                (state) => (state.date = new Date(state.date).toString())
              );
              return { bookingData: prevState.bookingData };
            },
            () => {
            //   console.log(this.state.bookingData);
            }
          );
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  dateSelected = (id)=>{
    this.setState({
        selectedDay:id,
        selectedSlot:0
    })
  }

  slotSelected = (id)=>{
      this.setState({
          selectedSlot:id
      })
  }

  render() {
    return (
      <div className="directory">
        <div className="directory-heading">
          <h1>Book Demo Session Slot</h1>
        </div>
        <div className="date-slot-div">
          <h2>Select Date</h2>
          <div className="slot-div">
            {this.state.bookingData.map((data, index) => (
              <DateData
                handleClick={this.dateSelected}
                key={index}
                date={data.date}
                id={index}
                isActive={index === this.state.selectedDay}
              />
            ))}
          </div>
          <h2>Select Slot</h2>
          <div className="slot-div">
            {this.state.bookingData[this.state.selectedDay]?.available.map(
              (data, index) => (
                <SlotData
                  handleClick={this.slotSelected}
                  id={index}
                  key={index}
                  slotData={data}
                  isActive={index === this.state.selectedSlot}
                />
              )
            )}
          </div>
          <button className="booking">Proceed to pay</button>
        </div>
      </div>
    );
  }
}

export default Directory;
