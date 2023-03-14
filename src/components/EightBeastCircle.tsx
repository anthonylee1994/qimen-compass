import React from "react";
import {Flex, Text} from "@chakra-ui/react";
import {QimenUtil} from "utils/QimenUtil";
import {CircleLayer} from "./CircleLayer";
import {useAppStore} from "../stores/useAppStore";
import {地支} from "../utils/QimenUtil/types";

interface Props {
    size: number;
}

export const EightBeastCircle = React.memo<Props>(({size}) => {
    const qimenResult = useAppStore(state => state.qimenResult);
    const eightDiagrams = QimenUtil.eightDiagramsInSequence();

    if (!qimenResult) return null;

    const emptyPosition = qimenResult.旬空.時空.split("").map(_ => QimenUtil.emptyPosition(_ as 地支));

    return (
        <CircleLayer
            size={size}
            content={index => {
                const beast = qimenResult.神[eightDiagrams[index]];
                return (
                    <Flex justifyContent="center" width={210} position="relative" fontSize={20}>
                        <Text color={QimenUtil.eightBeastColor(beast)}>
                            {QimenUtil.eightBeastTitle(beast)}
                        </Text>
                        {emptyPosition.includes(index) && (
                            <Flex
                                justifyContent="center"
                                alignItems="center"
                                borderRadius="full"
                                width={6}
                                height={6}
                                bgColor="yellow.200"
                                transform="rotate(18deg)"
                                position="absolute"
                                top={3.5}
                                right={5}
                            >
                                空
                            </Flex>
                        )}
                    </Flex>
                );
            }}
        />
    );
});
