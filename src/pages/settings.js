import React, { useState, useEffect } from "react";
import { useData } from "../components/data-context";
import { Link } from "gatsby";

const SettingsPage = () => {
    const { setIntake, goal, setGoal, cupSize, setCupSize } = useData();
    const [displayGoal, setDisplayGoal] = useState(goal);
    const [displayCupSize, setDisplayCupSize] = useState(cupSize);

    useEffect(() => {
        setDisplayGoal(goal);
        setDisplayCupSize(cupSize);
    }, [goal, cupSize]);

    return (
        <>
            <h1 style={{ textAlign: "center", margin: "30px 0" }}>Tracker Settings</h1>
            <div style={{ width: "75%", margin: "20px auto" }}>
                <p style={{ margin: "0 0 10px 0" }}>Daily Goal (mL):</p>
                <input type="number" placeholder="Daily Goal (mL)" style={{ fontSize: "20px", width: "100%" }} value={displayGoal} onChange={e => setDisplayGoal(e.target.value)} />
                <p style={{ margin: "30px 0 10px 0" }}>Cup Size (mL):</p>
                <input type="number" placeholder="Cup Size (mL)" style={{ fontSize: "20px", width: "100%" }} value={displayCupSize} onChange={e => setDisplayCupSize(e.target.value)} />
                <div
                    style={{ width: "100%", padding: "10px 0", color: "white", margin: "30px auto 0 auto", textAlign: "center", fontSize: "25px", backgroundColor: "#3e98c7", cursor: "pointer" }}
                    onClick={() => {
                        setIntake(0);
                    }}
                >
                    Clear
            </div>
                <Link to="/">
                    <div
                        style={{ width: "100%", padding: "10px 0", color: "white", margin: "30px auto 0 auto", textAlign: "center", fontSize: "25px", backgroundColor: "#3e98c7", cursor: "pointer" }}
                        onClick={() => {
                            setGoal(parseInt(displayGoal));
                            setCupSize(parseInt(displayCupSize));
                        }}
                    >
                        Save
                </div>
                </Link>
            </div>
        </>
    );
};

export default SettingsPage;