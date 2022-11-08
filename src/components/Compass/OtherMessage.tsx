import React from "react";
import {QimenResultContext} from "contexts/QimenResultContext";
import {地支, 驛馬} from "utils/QimenUtil/types";
import {Box} from "@chakra-ui/react";
import {QimenUtil} from "utils/QimenUtil";
import {Sector} from "./Sector";

interface Props {
    children: React.ReactNode;
}

export const OtherMessage = React.memo<Props>(({children}) => {
    const qimenResult = React.useContext(QimenResultContext);

    if (!qimenResult) {
        return null;
    }

    const horsePosition = QimenUtil.horsePosition(qimenResult.馬星.驛馬 as 驛馬);
    const emptyPosition = qimenResult.旬空.時空.split("").map(_ => QimenUtil.emptyPosition(_ as 地支));

    return (
        <Box position="relative" borderRadius="full" p={5} bgColor="gray.700" overflow="hidden">
            {children}
            {QimenUtil.eightDiagramsInSequence().map((_, index) => (
                <Sector
                    size={300}
                    zIndex={5}
                    w={128}
                    key={index}
                    clipPath="polygon(10% 100%, 88% 100%, 100% 0, 0 0)"
                    color={index % 2 === 0 ? "gray.500" : "gray.600"}
                    text={
                        <React.Fragment>
                            {emptyPosition.includes(index) && (
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    width="16px"
                                    height="16px"
                                    borderRadius="full"
                                    position="absolute"
                                    top="8px"
                                    left="15px"
                                    bgColor="white"
                                    color="gray.600"
                                    transform="rotate(-15deg)"
                                >
                                    空
                                </Box>
                            )}

                            {horsePosition === index && (
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    width="16px"
                                    height="16px"
                                    borderRadius="full"
                                    position="absolute"
                                    top="8px"
                                    right="15px"
                                    bgColor="pink.500"
                                    color="white"
                                    transform="rotate(15deg)"
                                >
                                    馬
                                </Box>
                            )}
                        </React.Fragment>
                    }
                    rotate={index * 45}
                />
            ))}
        </Box>
    );
});
