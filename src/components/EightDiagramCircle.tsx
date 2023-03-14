import React from "react";
import {Flex, Text} from "@chakra-ui/react";
import {QimenUtil} from "utils/QimenUtil";
import {CircleLayer} from "./CircleLayer";
import {useAppStore} from "../stores/useAppStore";

interface Props {
    size: number;
}

export const EightDiagramCircle = React.memo<Props>(({size}) => {
    const eightDiagrams = QimenUtil.eightDiagramsInSequence();
    const {地盤} = useAppStore(state => state.qimenResult);

    return (
        <CircleLayer
            size={size}
            content={index => {
                const diagram = eightDiagrams[index];
                const earth = 地盤[diagram];

                return (
                    <Flex justifyContent="center" width={100} position="relative" fontSize={20}>
                        <Text color={QimenUtil.eightDiagramColor(diagram)} mt={0.5}>
                            {QimenUtil.eightDiagramTitle(diagram)}
                        </Text>
                        <Text transform="rotate(18deg)" position="absolute" top={2} right='-2px' color={QimenUtil.heavenColor(earth)}>
                            {earth}
                        </Text>
                    </Flex>
                );
            }}
        />
    );
});
