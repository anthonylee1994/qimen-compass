import React, {useContext} from "react";
import {EightBeast} from "./EightBeast";
import {Box} from "@chakra-ui/react";
import {AngleContext} from "contexts/AngleContext";
import {EightDoor} from "./EightDoor";
import {EightStar} from "./EightStar";
import {EightDiagram} from "./EightDiagram";

interface Props {
    children: React.ReactNode;
}

export const Rotator = React.memo<Props>(({children}) => {
    const angle = useContext(AngleContext);

    return (
        <Box transform={`rotate(${angle}deg)`}>
            <EightDiagram>
                <EightStar>
                    <EightDoor>
                        <EightBeast>{children}</EightBeast>
                    </EightDoor>
                </EightStar>
            </EightDiagram>
        </Box>
    );
});
