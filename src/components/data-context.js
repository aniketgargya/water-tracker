import React, { useState, useEffect, useContext, createContext } from "react";

const DataContext = createContext({
    intake: 0,
    setIntake: () => { },
    goal: 1050,
    setGoal: () => { },
    cupSize: 100,
    setCupSize: () => { }
});

const datesAreOnSameDay = (x, y) => {
    const first = new Date(x);
    const second = new Date(y);
    return first.getFullYear() === second.getFullYear() &&
        first.getMonth() === second.getMonth() &&
        first.getDate() === second.getDate();
};

export const DataContextProvider = ({ children }) => {
    const [intake, setIntake] = useState(0);
    const [goal, setGoal] = useState(1050);
    const [cupSize, setCupSize] = useState(100);

    useEffect(() => {
        const storedIntake = parseInt(localStorage.getItem("intake"));
        const storedLastIntakeTime = parseInt(localStorage.getItem("lastIntake")) || 0;
        setIntake(datesAreOnSameDay(Date.now(), storedLastIntakeTime) ? storedIntake : 0);

        setGoal(parseInt(localStorage.getItem("goal")) || 1000);
        setCupSize(parseInt(localStorage.getItem("cupSize")) || 100);
    }, [setIntake, setGoal, setCupSize]);

    useEffect(() => {
        if (!isNaN(parseInt(intake))) localStorage.setItem("intake", intake);
        localStorage.setItem("lastIntake", Date.now());
    }, [intake]);

    useEffect(() => {
        if (!isNaN(parseInt(goal))) localStorage.setItem("goal", goal);
    }, [goal]);


    useEffect(() => {
        if (!isNaN(parseInt(cupSize))) localStorage.setItem("cupSize", cupSize);
    }, [cupSize]);

    return (
        <DataContext.Provider value={{ intake, setIntake, goal, setGoal, cupSize, setCupSize }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);