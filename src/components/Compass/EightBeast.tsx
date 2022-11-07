import React from "react";
import {Box, theme} from "@chakra-ui/react";
import {QimenResultContext} from "../../contexts/QimenResultContext";
import {神} from "../../utils/QimenUtil/types";
import {QimenUtil} from "../../utils/QimenUtil";
import {Sector} from "./Sector";

interface Props {
    children: React.ReactNode;
}

export const EightBeast = React.memo<Props>(({children}) => {
    const qimenResult = React.useContext(QimenResultContext);

    const title = React.useCallback((value: 神) => {
        switch (value) {
            case "符":
                return "值符";
            case "蛇":
                return "騰蛇";
            case "陰":
                return "太陰";
            case "合":
                return "六合";
            case "虎":
                return "白虎";
            case "玄":
                return "玄武";
            case "地":
                return "九地";
            case "天":
                return "九天";
        }
    }, []);

    const color = React.useCallback((value: 神) => {
        switch (value) {
            case "符":
                return theme.colors.green[500];
            case "蛇":
                return theme.colors.red[500];
            case "陰":
                return theme.colors.yellow[500];
            case "合":
                return theme.colors.green[500];
            case "虎":
                return theme.colors.yellow[500];
            case "玄":
                return theme.colors.blue[500];
            case "地":
                return theme.colors.orange[500];
            case "天":
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
                    zIndex={9}
                    size={140}
                    w={58}
                    clipPath="polygon(20% 100%, 80% 100%, 100% 0, 0 0)"
                    key={index}
                    color={color(qimenResult.神[value])}
                    text={title(qimenResult.神[value])}
                    rotate={index * 45}
                />
            ))}
        </Box>
    );
});
