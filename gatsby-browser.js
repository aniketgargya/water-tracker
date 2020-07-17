import React from "react";
import { HeadProvider, Link } from "react-head";
import { DataContextProvider } from "./src/components/data-context";

import "./src/styles/styles.css";
import "./src/styles/circular-progress.css";
import "normalize.css";

export const wrapRootElement = ({ element }) => (
    <>
        <HeadProvider >
            <Link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
        </HeadProvider>
        <DataContextProvider>
            {element}
        </DataContextProvider>
    </>
);