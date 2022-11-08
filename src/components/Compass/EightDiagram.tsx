import React from "react";
import {QimenResultContext} from "contexts/QimenResultContext";
import {八卦} from "utils/QimenUtil/types";
import {Box, theme} from "@chakra-ui/react";
import {QimenUtil} from "utils/QimenUtil";
import {Sector} from "./Sector";

interface Props {
    children: React.ReactNode;
}

export const EightDiagram = React.memo<Props>(({children}) => {
    const qimenResult = React.useContext(QimenResultContext);

    const title = React.useCallback((value: 八卦) => {
        switch (value) {
            case "乾":
                return "☰乾六";
            case "坎":
                return "☵坎一";
            case "艮":
                return "☶艮八";
            case "震":
                return "☳震三";
            case "巽":
                return "☴巽四";
            case "離":
                return "☲離九";
            case "坤":
                return "☷坤二";
            case "兌":
                return "☱兌七";
        }
    }, []);

    const color = React.useCallback((value: 八卦) => {
        switch (value) {
            case "乾":
                return theme.colors.yellow[500];
            case "坎":
                return theme.colors.blue[500];
            case "艮":
                return theme.colors.orange[500];
            case "震":
                return theme.colors.green[500];
            case "巽":
                return theme.colors.green[500];
            case "離":
                return theme.colors.red[500];
            case "坤":
                return theme.colors.orange[500];
            case "兌":
                return theme.colors.yellow[500];
        }
    }, []);

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
                    color={color(value)}
                    text={
                        <React.Fragment>
                            {title(value)}

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
                                bgColor={QimenUtil.heavenColor(qimenResult.地盤[value])}
                                color="white"
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
