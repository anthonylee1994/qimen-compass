import React from "react";
import {BaziTable} from "./BaziTable";
import {DateDisplay} from "./DateDisplay";
import {Description} from "./Description";
import {CircleContainer} from "../CircleContainer";

export const BaziCircle = React.memo(() => {
    return (
        <CircleContainer>
            <DateDisplay />
            <BaziTable />
            <Description />
        </CircleContainer>
    );
});
