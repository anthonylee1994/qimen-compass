import React from "react";
import {QimenResultContext} from "../../contexts/QimenResultContext";
import {門} from "../../utils/QimenUtil/types";
import {Box, theme} from "@chakra-ui/react";
import {QimenUtil} from "../../utils/QimenUtil";
import {Sector} from "./Sector";

interface Props {
    children: React.ReactNode;
}

export const EightDoor = React.memo<Props>(({children}) => {
    const qimenResult = React.useContext(QimenResultContext);

    const title = React.useCallback((value: 門) => {
        switch (value) {
            case "休":
                return "休門";
            case "生":
                return "生門";
            case "傷":
                return "傷門";
            case "杜":
                return "杜門";
            case "景":
                return "景門";
            case "死":
                return "死門";
            case "驚":
                return "驚門";
            case "開":
                return "開門";
        }
    }, []);

    const color = React.useCallback((value: 門) => {
        switch (value) {
            case "休":
                return theme.colors.blue[500];
            case "生":
                return theme.colors.orange[500];
            case "傷":
                return theme.colors.green[500];
            case "杜":
                return theme.colors.green[500];
            case "景":
                return theme.colors.red[500];
            case "死":
                return theme.colors.orange[500];
            case "驚":
                return theme.colors.yellow[500];
            case "開":
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
                    size={180}
                    zIndex={8}
                    w={76}
                    clipPath="polygon(17% 100%, 83% 100%, 100% 0, 0 0)"
                    key={index}
                    color={color(qimenResult.門[value])}
                    text={title(qimenResult.門[value])}
                    rotate={index * 45}
                />
            ))}
        </Box>
    );
});
