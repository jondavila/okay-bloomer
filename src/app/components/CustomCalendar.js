import React, { useState } from "react";
import styles from "../customcalendar.module.css";

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function CustomCalendar() {
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const changeMonth = (offset) => {
        setCurrentMonth((prevState) => {
            const updatedState = new Date(prevState.valueOf());
            updatedState.setMonth(prevState.getMonth() + offset);
            return updatedState;
        });
    };

    const startDayOfMonth = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        1
    ).getDay();

    const daysInMonth = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + 1,
        0
    ).getDate();

    let dates = [...Array(daysInMonth)].map((_, i) => i + 1);
    dates = Array(startDayOfMonth).fill(null).concat(dates);
    const weeks = [];
    while (dates.length) weeks.push(dates.splice(0, 7));

    return (
        <div className={styles.customCalendar}>
            <header className={styles.header}>
                <button className={styles.prevNextButton} onClick={() => changeMonth(-1)}>Prev</button>
                <h2 className={styles.monthYearHeader}>
                    {currentMonth.toLocaleString("default", {
                        month: "long",
                        year: "numeric",
                    })}
                </h2>
                <button className={styles.prevNextButton} onClick={() => changeMonth(1)}>Next</button>
            </header>
            <table>
                <thead>
                    <tr>
                        {DAYS_OF_WEEK.map((day, index) => (
                            <th className={styles.dayOfWeek} key={index}>{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {weeks.map((week, index) => (
                        <tr key={index}>
                            {week.map((day, index) => (
                                <td key={day ? `day-${day}` : `empty-${index}`}>
                                    <div className={styles.day}>
                                        <span>{day}</span>
                                    </div>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
