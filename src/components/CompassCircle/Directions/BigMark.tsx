import {Box} from "@chakra-ui/react";
import React from "react";

interface Props {
    angle: number;
}

export const BigMark = React.memo<Props>(({angle}) => {
    return (
        <Box position="absolute" width="250px" height="250px" transform={`rotate(${angle}deg)`}>
            <Box width="1px" height="20px" bgColor="white" position="absolute" top={0} left="calc(50% - 1px)" />
            <Box width="1px" height="20px" bgColor="white" position="absolute" bottom={0} left="calc(50% - 1px)" />
        </Box>
    );
});
