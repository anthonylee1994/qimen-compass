import React from "react";
import {Flex, Text} from "@chakra-ui/react";
import {QimenUtil} from "utils/QimenUtil";
import {CircleLayer} from "./CircleLayer";
import {useAppStore} from "../stores/useAppStore";
import {驛馬} from "../utils/QimenUtil/types";

interface Props {
    size: number;
}

export const EightDoorCircle = React.memo<Props>(({size}) => {
    const qimenResult = useAppStore(state => state.qimenResult);
    const eightDiagrams = QimenUtil.eightDiagramsInSequence();

    if (!qimenResult) return null;

    const horsePosition = QimenUtil.horsePosition(qimenResult.馬星.驛馬 as 驛馬);

    return (
        <CircleLayer
            size={size}
            content={index => {
                const door = qimenResult.門[eightDiagrams[index]];
                return (
                    <Flex justifyContent="center" width={190} position="relative" fontSize={20}>
                        <Text color={QimenUtil.eightDoorColor(door)}>{QimenUtil.eightDoorTitle(door)}</Text>

                        {horsePosition === index && (
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
                                馬
                            </Flex>
                        )}
                    </Flex>
                );
            }}
        />
    );
});
