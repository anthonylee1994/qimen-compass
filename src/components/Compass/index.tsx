import React from "react";
import {Pointer} from "./Pointer";
import {Rotator} from "./Rotator";

export const Compass = React.memo(() => {
    return (
        <Rotator>
            <Pointer />
        </Rotator>
    );
});
