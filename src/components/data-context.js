import React, { useState, useEffect, useContext, createContext } from "react";

const DataContext = createContext({
    intake: 0,
    setIntake: () => { },
    goal: 1050,
    setGoal: () => { },
    cupSize: 100,
    setCupSize: () => { }
});

export const DataContextProvider = ({ children }) => {
    const [intake, setIntake] = useState(0);
    const [goal, setGoal] = useState(1050);
    const [cupSize, setCupSize] = useState(100);

    useEffect(() => {
        setIntake(parseInt(localStorage.getItem("intake")) || 0);
        setGoal(parseInt(localStorage.getItem("goal")) || 1000);
        setCupSize(parseInt(localStorage.getItem("cupSize")) || 100);
    }, [setIntake, setGoal, setCupSize]);

    useEffect(() => {
        localStorage.setItem("intake", intake);
    }, [intake]);

    useEffect(() => {
        localStorage.setItem("goal", goal);
    }, [goal]);


    useEffect(() => {
        localStorage.setItem("cupSize", cupSize);
    }, [cupSize]);

    return (
        <DataContext.Provider value={{ intake, setIntake, goal, setGoal, cupSize, setCupSize }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);