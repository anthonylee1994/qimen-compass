import React from "react";
import {Flex, Text} from "@chakra-ui/react";
import {QimenUtil} from "utils/QimenUtil";
import {CircleLayer} from "./CircleLayer";
import {useAppStore} from "../stores/useAppStore";

interface Props {
    size: number;
}

export const EightStarCircle = React.memo<Props>(({size}) => {
    const qimenResult = useAppStore(state => state.qimenResult);
    const eightDiagrams = QimenUtil.eightDiagramsInSequence();
    const {天盤} = useAppStore(state => state.qimenResult);

    if (!qimenResult) return null;

    return (
        <CircleLayer
            size={size}
            content={index => {
                const diagram = eightDiagrams[index];
                const star = qimenResult.星[diagram];
                const sky = 天盤.map(_ => _[diagram]);

                return (
                    <Flex justifyContent="center" width={120} position="relative" fontSize={20}>
                        {sky[1] && (
                            <Text transform="rotate(-18deg)" position="absolute" top={2} left='-2px' color={QimenUtil.heavenColor(sky[1])}>
                                {sky[1]}
                            </Text>
                        )}
                        <Text color={QimenUtil.eightStarColor(star)} mt={0.5}>
                            {QimenUtil.eightStarTitle(star)}
                        </Text>
                        <Text transform="rotate(18deg)" position="absolute" top={2} right='-2px' color={QimenUtil.heavenColor(sky[0])}>
                            {sky[0]}
                        </Text>
                    </Flex>
                );
            }}
        />
    );
});
