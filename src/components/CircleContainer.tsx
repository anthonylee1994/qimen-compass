import {Box} from "@chakra-ui/react";
import React from "react";

interface Props {
    children: React.ReactNode;
}

export const CircleContainer = React.memo<Props>(({children}) => {
    return (
        <Box
            position="absolute"
            borderRadius="full"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            borderColor="white"
            borderWidth={1}
            width={260}
            height={260}
            bgColor="black"
        >
            {children}
        </Box>
    );
});
