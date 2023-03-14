import React from "react";
import {BaziUtil} from "utils/BaziUtil";
import {useAppStore} from "stores/useAppStore";
import {HeadCell} from "./HeadCell";
import {BodyCell} from "./BodyCell";
import {Table, Tbody, Thead, Tr} from "@chakra-ui/react";
import {useBaziParts} from "hooks/useBaziParts";

export const BaziTable = React.memo(() => {
    const qimenResult = useAppStore(state => state.qimenResult);
    const {年干, 年支, 月干, 月支, 日干, 日支, 時干, 時支} = useBaziParts(qimenResult);

    console.log("qimenResult", qimenResult);

    return (
        <Table width={10}>
            <Thead>
                <Tr>
                    <HeadCell>時</HeadCell>
                    <HeadCell>日</HeadCell>
                    <HeadCell>月</HeadCell>
                    <HeadCell>年</HeadCell>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <BodyCell color={BaziUtil.heavenColor(時干)}>{時干}</BodyCell>
                    <BodyCell color={BaziUtil.heavenColor(日干)}>{日干}</BodyCell>
                    <BodyCell color={BaziUtil.heavenColor(月干)}>{月干}</BodyCell>
                    <BodyCell color={BaziUtil.heavenColor(年干)}>{年干}</BodyCell>
                </Tr>
                <Tr>
                    <BodyCell color={BaziUtil.earthColor(時支)}>{時支}</BodyCell>
                    <BodyCell color={BaziUtil.earthColor(日支)}>{日支}</BodyCell>
                    <BodyCell color={BaziUtil.earthColor(月支)}>{月支}</BodyCell>
                    <BodyCell color={BaziUtil.earthColor(年支)}>{年支}</BodyCell>
                </Tr>
            </Tbody>
        </Table>
    );
});
