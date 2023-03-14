import React from "react";
import {Flex} from "@chakra-ui/react";
import moment from "moment/moment";
import {useAppStore} from "stores/useAppStore";

export const DateDisplay = React.memo(() => {
    const date = useAppStore(state => state.date);
    const {節氣} = useAppStore(state => state.qimenResult);

    return (
        <Flex mb={1} flexDirection="column" alignItems="center" width="150px" color='white'>
            <Flex>{moment(date).format("YYYY年M月D日")}</Flex>
            <Flex width="120px" justifyContent="space-between">
                <Flex>{moment(date).format("HH:mm")}</Flex>
                <Flex>{節氣}</Flex>
            </Flex>
        </Flex>
    );
});
