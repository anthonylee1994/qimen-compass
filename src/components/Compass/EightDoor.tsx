import React from "react";
import {Sector} from "./Sector";
import {Box} from "@chakra-ui/react";
import {QimenUtil} from "utils/QimenUtil";
import {QimenResultContext} from "contexts/QimenResultContext";

interface Props {
    children: React.ReactNode;
}

export const EightDoor = React.memo<Props>(({children}) => {
    const qimenResult = React.useContext(QimenResultContext);

    if (!qimenResult) {
        return null;
    }

    return (
        <Box position="relative" borderRadius="full" p={5} bgColor="gray.700" overflow="hidden">
            {children}
            {QimenUtil.eightDiagramsInSequence().map((value, index) => (
                <Sector
                    inverse
                    size={180}
                    zIndex={8}
                    w={76}
                    clipPath="polygon(17% 100%, 83% 100%, 100% 0, 0 0)"
                    key={index}
                    color={QimenUtil.eightDoorColor(qimenResult.門[value])}
                    text={QimenUtil.eightDoorTitle(qimenResult.門[value])}
                    rotate={index * 45}
                />
            ))}
        </Box>
    );
});
