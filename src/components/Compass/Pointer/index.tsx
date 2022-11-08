import React from "react";
import {Box} from "@chakra-ui/react";
import {Pin} from "./Pin";
import {Board} from "./Board";
import {Directions} from "./Directions";

export const Pointer = React.memo(() => {
    return (
        <Box position="relative" width={100} height={100}>
            <Board>
                <Directions />
                <Pin />
            </Board>
        </Box>
    );
});
