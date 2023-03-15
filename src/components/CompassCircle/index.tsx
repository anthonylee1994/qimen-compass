import React from "react";
import {CircleContainer} from "../CircleContainer";
import {Directions} from "./Directions";
import {Pin} from "./Directions/Pin";

export const CompassCircle = React.memo(() => {
    return (
        <CircleContainer>
            <Directions />
            <Pin />
        </CircleContainer>
    );
});
