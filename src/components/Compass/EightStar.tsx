import React from "react";
import {QimenResultContext} from "contexts/QimenResultContext";
import {Box} from "@chakra-ui/react";
import {QimenUtil} from "utils/QimenUtil";
import {Sector} from "./Sector";

interface Props {
    children: React.ReactNode;
}

export const EightStar = React.memo<Props>(({children}) => {
    const qimenResult = React.useContext(QimenResultContext);

    if (!qimenResult) {
        return null;
    }

    return (
        <Box position="relative" borderRadius="full" p={5} bgColor="gray.700" overflow="hidden">
            {children}
            {QimenUtil.eightDiagramsInSequence().map((value, index) => (
                <Sector
                    size={220}
                    zIndex={7}
                    w={94}
                    clipPath="polygon(15% 100%, 85% 100%, 100% 0, 0 0)"
                    key={index}
                    color={QimenUtil.eightStarColor(qimenResult.星[value])}
                    text={
                        <React.Fragment>
                            {QimenUtil.eightStarTitle(qimenResult.星[value])}

                            {qimenResult.天盤[1][value] && (
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    width="16px"
                                    height="16px"
                                    borderRadius="full"
                                    position="absolute"
                                    top="5px"
                                    left="15px"
                                    bgColor="gray.700"
                                    transform="rotate(-15deg)"
                                    color={QimenUtil.heavenColor(qimenResult.天盤[1][value])}
                                >
                                    {qimenResult.天盤[1][value]}
                                </Box>
                            )}

                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                width="16px"
                                height="16px"
                                borderRadius="full"
                                position="absolute"
                                top="5px"
                                right="15px"
                                bgColor="gray.700"
                                transform="rotate(15deg)"
                                color={QimenUtil.heavenColor(qimenResult.天盤[0][value])}
                            >
                                {qimenResult.天盤[0][value]}
                            </Box>
                        </React.Fragment>
                    }
                    rotate={index * 45}
                />
            ))}
        </Box>
    );
});
