import React from "react";
import {Box, theme} from "@chakra-ui/react";

interface Props {
    children: React.ReactNode;
}

export const Board = React.memo<Props>(({children}) => {
    return (
        <Box
            zIndex={10}
            width={100}
            height={100}
            position="relative"
            border={`solid 3px ${theme.colors.orange[300]}`}
            boxShadow="inset 0 0 10px 0 rgb(0 0 0 / 40%)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgColor="white"
            borderRadius="full"
        >
            {children}
        </Box>
    );
});
