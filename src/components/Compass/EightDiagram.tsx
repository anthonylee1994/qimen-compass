import React from "react";
import {Sector} from "./Sector";
import {Box} from "@chakra-ui/react";
import {QimenUtil} from "utils/QimenUtil";
import {QimenResultContext} from "contexts/QimenResultContext";

interface Props {
    children: React.ReactNode;
}

export const EightDiagram = React.memo<Props>(({children}) => {
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
                    size={260}
                    zIndex={6}
                    w={110}
                    clipPath="polygon(12% 100%, 88% 100%, 100% 0, 0 0)"
                    key={index}
                    color={QimenUtil.eightDiagramColor(value)}
                    text={
                        <React.Fragment>
                            {QimenUtil.eightDiagramTitle(value)}

                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                width="16px"
                                height="16px"
                                borderRadius="full"
                                position="absolute"
                                top="6px"
                                right="15px"
                                color="white"
                                transform="rotate(15deg)"
                                bgColor={QimenUtil.heavenColor(qimenResult.地盤[value])}
                            >
                                {qimenResult.地盤[value]}
                            </Box>
                        </React.Fragment>
                    }
                    rotate={index * 45}
                />
            ))}
        </Box>
    );
});
