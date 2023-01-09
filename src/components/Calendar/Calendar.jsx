import React from "react";
import { getDayCountInMonth, getMonthName } from "../../utility";
import CalendarCell from "../CalendarCell/CalendarCell";
import "./Calendar.css";

class Calendar extends React.Component {
    render() {
        const {
            month,
            year,
            events,
        } = this.props;
        const firstDay = new Date(year, month, 1);
        const firstDayIndex = firstDay.getDay();
        const dayCount = getDayCountInMonth(month, year);
        const days = [];
        for (let i = 0; i < dayCount; i++) {
            days.push([]);
        }
        for (const event of events) {
            const dayIndices = event.getDayIndices();
            for (const dayIndex of dayIndices) {
                console.log("Trying to access index " + dayIndex + " of array length " + dayIndices.length);
                days[dayIndex].push(event);
            }
        }
        console.log(days);
        const cells = [];
        for (let i = 0; i < 7 * 6; i++) {
            const thisDayNumber = i >= firstDayIndex && i < firstDayIndex + dayCount ? i - firstDayIndex + 1 : undefined;
            cells.push({
                dayNumber: thisDayNumber,
                events: thisDayNumber ? days[thisDayNumber - 1] : undefined,
            });
        }
        return (
            <div className="calendar-container">
                <h1>{getMonthName(firstDay.getMonth())}</h1>
                <div className="calendar">
                    {cells.map((cell, index) => <CalendarCell key={index} cellData={cell} />)}
                </div>
            </div>
        )
    }
}

export default Calendar;