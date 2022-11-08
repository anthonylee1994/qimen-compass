import {Box} from "@chakra-ui/react";
import React from "react";

interface Props {
    angle: number;
}

export const SmallMark = React.memo<Props>(({angle}) => {
    return (
        <Box position="absolute" top={0} left={0} width="94px" height="94px" transform={`rotate(${angle}deg)`}>
            <Box width="1px" height="2px" bgColor="gray.500" position="absolute" top={0} left="calc(50% - 1px)" />
            <Box width="1px" height="2px" bgColor="gray.500" position="absolute" bottom={0} left="calc(50% - 1px)" />
        </Box>
    );
});
