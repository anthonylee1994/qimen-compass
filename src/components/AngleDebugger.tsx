import React, {useContext} from "react";
import {Box, Text} from "@chakra-ui/react";
import {AngleContext} from "../contexts/AngleContext";

export const AngleDebugger = React.memo(() => {
    const angle = useContext(AngleContext);

    return (
        <Box bgColor="black" position="absolute" left={0} bottom={0} px={1}>
            <Text color="white">{angle}</Text>
        </Box>
    );
});
