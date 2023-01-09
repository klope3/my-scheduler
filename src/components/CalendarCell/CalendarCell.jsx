import React from "react";
import "./CalendarCell.css";

class CalendarCell extends React.Component {
    render() {
        const {
            cellData: {
                dayNumber,
                events,
            }
        } = this.props;
        return (
            <div className="cell">
                {dayNumber}
                {events && events.map(event => <div>{event.name}</div>)}
            </div>
        )
    }
}

export default CalendarCell;