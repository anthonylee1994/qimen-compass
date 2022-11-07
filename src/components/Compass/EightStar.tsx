import React from "react";
import {QimenResultContext} from "../../contexts/QimenResultContext";
import {星} from "../../utils/QimenUtil/types";
import {Box, theme} from "@chakra-ui/react";
import {QimenUtil} from "../../utils/QimenUtil";
import {Sector} from "./Sector";

interface Props {
    children: React.ReactNode;
}

export const EightStar = React.memo<Props>(({children}) => {
    const qimenResult = React.useContext(QimenResultContext);

    const title = React.useCallback((value: 星) => {
        switch (value) {
            case "蓬":
                return "天蓬";
            case "任":
                return "天任";
            case "沖":
                return "天沖";
            case "輔":
                return "天輔";
            case "英":
                return "天英";
            case "禽":
                return "天芮";
            case "柱":
                return "天柱";
            case "心":
                return "天心";
        }
    }, []);

    const color = React.useCallback((value: 星) => {
        switch (value) {
            case "蓬":
                return theme.colors.blue[500];
            case "任":
                return theme.colors.orange[500];
            case "沖":
                return theme.colors.green[500];
            case "輔":
                return theme.colors.green[500];
            case "英":
                return theme.colors.red[500];
            case "禽":
                return theme.colors.orange[500];
            case "柱":
                return theme.colors.yellow[500];
            case "心":
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
                    size={220}
                    zIndex={7}
                    w={94}
                    clipPath="polygon(15% 100%, 85% 100%, 100% 0, 0 0)"
                    key={index}
                    color={color(qimenResult.星[value])}
                    text={
                        <React.Fragment>
                            {title(qimenResult.星[value])}

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
