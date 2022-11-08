import {Box} from "@chakra-ui/react";
import React from "react";

interface Props {
    angle: number;
}

export const BigMark = React.memo<Props>(({angle}) => {
    return (
        <Box position="absolute" top={0} left={0} width="94px" height="94px" transform={`rotate(${angle}deg)`}>
            <Box width="1px" height="5px" bgColor="gray.600" position="absolute" top={0} left="50%" />
            <Box width="1px" height="5px" bgColor="gray.600" position="absolute" bottom={0} left="50%" />
        </Box>
    );
});
