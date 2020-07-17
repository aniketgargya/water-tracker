import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { useData } from "./data-context";

const Tracker = () => {
    const { intake, setIntake, goal, cupSize } = useData();

    return (
        <>
            <h1 style={{ textAlign: "center", margin: "30px 0" }}>Water Tracker</h1>
            <div style={{ width: "75%", margin: "0 auto" }}> <CircularProgressbar value={intake} maxValue={goal} minValue={0} text={`${intake} mL`} />
            </div>
            <p
                style={{ width: "75%", margin: "30px auto 0 auto", textAlign: "center", fontSize: "25px", color: intake >= goal ? "#3e98c7" : "black" }}
            >
                Goal: {goal} mL
            </p>
            <div
                style={{ width: "75%", padding: "10px 0", color: "white", margin: "30px auto 0 auto", textAlign: "center", fontSize: "25px", backgroundColor: "#3e98c7", cursor: "pointer" }}
                onClick={() => setIntake(i => i + cupSize)}
            >
                Drink
            </div>
        </>
    );
};

export default Tracker;