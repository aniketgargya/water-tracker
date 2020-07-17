import React from "react";
import { useData } from "./data-context";

const Settings = () => {
    const { goal, setGoal, cupSize, setCupSize } = useData();

    return (
        <div style={{ width: "75%", margin: "20px auto" }}>
            <input type="number" placeholder="Daily Goal (mL)" style={{ fontSize: "20px", width: "100%" }} value={goal} onChange={e => setGoal(e.target.value)} />
            <input type="number" placeholder="Cup Size (mL)" style={{ fontSize: "20px", width: "100%", marginTop: "20px" }} value={cupSize} onChange={e => setCupSize(e.target.value)} />
        </div>
    );
};

export default Settings;