import React from "react";
import {Th} from "@chakra-ui/react";

interface Props {
    children: React.ReactNode;
}

export const HeadCell = React.memo<Props>(({children}) => {
    return (
        <Th px={4} py={2} fontSize="sm" textAlign="center" color="white">
            {children}
        </Th>
    );
});
