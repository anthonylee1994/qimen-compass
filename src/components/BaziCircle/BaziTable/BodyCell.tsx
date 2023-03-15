import React from "react";
import {Td} from "@chakra-ui/react";

interface Props {
    color: string;
    children: React.ReactNode;
}

export const BodyCell = React.memo<Props>(({color, children}) => {
    return (
        <Td px="18px" py={2} fontSize="2xl" color={color} textAlign="center">
            {children}
        </Td>
    );
});
