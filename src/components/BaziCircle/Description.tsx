import React from "react";
import {useAppStore} from "stores/useAppStore";
import {Flex, Text} from "@chakra-ui/react";
import {QimenUtil} from "utils/QimenUtil";

export const Description = React.memo(() => {
    const {排局, 值符值使, 天乙} = useAppStore(state => state.qimenResult);

    console.log("天乙", 天乙);

    return (
        <Flex mt={1} flexDirection="column" width="100px" color="white">
            <Flex justifyContent="center">{排局}</Flex>
            <Flex justifyContent="space-between">
                值使：
                <Text color={QimenUtil.eightDoorColor(值符值使.值使門宮[0])}>{QimenUtil.eightDoorTitle(值符值使.值使門宮[0])}</Text>
            </Flex>
            <Flex justifyContent="space-between">
                天乙：
                <Text color={QimenUtil.eightStarColor(天乙)}>{QimenUtil.eightStarTitle(天乙)}</Text>
            </Flex>
        </Flex>
    );
});
