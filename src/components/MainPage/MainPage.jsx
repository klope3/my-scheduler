import React from "react";
import { monthEvents } from "../../monthEvents";
import Calendar from "../Calendar/Calendar";

const useTestEvents = true;

class MainPage extends React.Component {
    getMonthEvents = () => {
        if (useTestEvents) return monthEvents;
    }

    render() {
        return (
            <>
                <Calendar month={1} year={2023} events={this.getMonthEvents()} />
            </>
        )
    }
}

export default MainPage;