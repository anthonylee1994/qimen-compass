import React from "react";
import {Sector} from "./Sector";
import {Box} from "@chakra-ui/react";
import {QimenUtil} from "utils/QimenUtil";
import {QimenResultContext} from "contexts/QimenResultContext";

interface Props {
    children: React.ReactNode;
}

export const EightBeast = React.memo<Props>(({children}) => {
    const qimenResult = React.useContext(QimenResultContext);

    if (!qimenResult) {
        return null;
    }

    return (
        <Box position="relative" borderRadius="full" p={5} bgColor="gray.700" overflow="hidden">
            {children}
            {QimenUtil.eightDiagramsInSequence().map((value, index) => (
                <Sector
                    key={index}
                    zIndex={9}
                    size={140}
                    w={58}
                    clipPath="polygon(20% 100%, 80% 100%, 100% 0, 0 0)"
                    color={QimenUtil.eightBeastColor(qimenResult.神[value])}
                    text={QimenUtil.eightBeastTitle(qimenResult.神[value])}
                    rotate={index * 45}
                />
            ))}
        </Box>
    );
});
