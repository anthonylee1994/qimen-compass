import React from "react";
import {Box, Table, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import {BaziResultContext} from "contexts/BaziResultContext";
import {BaziUtil} from "utils/BaziUtil";
import {天干, 地支} from "utils/BaziUtil/type";
import {八卦, 星, 門} from "utils/QimenUtil/types";
import {QimenResultContext} from "contexts/QimenResultContext";
import {DateContext} from "contexts/DateContext";
import moment from "moment";
import {QimenUtil} from "utils/QimenUtil";

export const BaziPanel = React.memo(() => {
    const baziResult = React.useContext(BaziResultContext);
    const qimenResult = React.useContext(QimenResultContext);
    const date = React.useContext(DateContext);

    if (!baziResult || !qimenResult) {
        return null;
    }

    return (
        <Box position="absolute" bottom={0} right={0} bgColor="rgb(0 0 0 / 50%)" width='100%' pb={8}>
            <Table size="sm" variant="simple" colorScheme="gray">
                <Thead>
                    <Tr>
                        <Th px={2} py={1} color="white" textAlign="right">
                            時
                        </Th>
                        <Th px={2} py={1} color="white" textAlign="right">
                            月
                        </Th>
                        <Th px={2} py={1} color="white" textAlign="right">
                            日
                        </Th>
                        <Th px={2} py={1} color="white" textAlign="right">
                            年
                        </Th>

                        <Th px={2} py={1} colSpan={4} color="white" fontSize="xs" textAlign="right">
                            {qimenResult.排局}
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td px={2} py={1} fontWeight="bold" color={BaziUtil.heavenColor(baziResult.chineseTime[0] as 天干)} textAlign="right">
                            {baziResult.chineseTime[0]}
                        </Td>
                        <Td px={2} py={1} fontWeight="bold" color={BaziUtil.heavenColor(baziResult.chineseDay[0] as 天干)} textAlign="right">
                            {baziResult.chineseDay[0]}
                        </Td>
                        <Td px={2} py={1} fontWeight="bold" color={BaziUtil.heavenColor(baziResult.chineseMonth[0] as 天干)} textAlign="right">
                            {baziResult.chineseMonth[0]}
                        </Td>
                        <Td px={2} py={1} fontWeight="bold" color={BaziUtil.heavenColor(baziResult.chineseYear[0] as 天干)} textAlign="right">
                            {baziResult.chineseYear[0]}
                        </Td>

                        <Td px={2} py={1} colSpan={4} color="white" fontSize="xs" textAlign="right">
                            {`${moment(date).format("YYYY年M月D日")}${baziResult.chineseTime[1]}時`}
                        </Td>
                    </Tr>
                    <Tr>
                        <Td px={2} py={1} fontWeight="bold" color={BaziUtil.earthColor(baziResult.chineseTime[1] as 地支)} textAlign="right">
                            {baziResult.chineseTime[1]}
                        </Td>
                        <Td px={2} py={1} fontWeight="bold" color={BaziUtil.earthColor(baziResult.chineseDay[1] as 地支)} textAlign="right">
                            {baziResult.chineseDay[1]}
                        </Td>
                        <Td px={2} py={1} fontWeight="bold" color={BaziUtil.earthColor(baziResult.chineseMonth[1] as 地支)} textAlign="right">
                            {baziResult.chineseMonth[1]}
                        </Td>
                        <Td px={2} py={1} fontWeight="bold" color={BaziUtil.earthColor(baziResult.chineseYear[1] as 地支)} textAlign="right">
                            {baziResult.chineseYear[1]}
                        </Td>

                        <Th px={2} py={1} fontSize="xs" color="white" textAlign="right">
                            日空
                        </Th>
                        <Td px={2} py={1} fontSize="xs" fontWeight="bold" textAlign="right">
                            {qimenResult.旬空.日空.split("").map((_, key) => (
                                <Box display="inline" key={key} color={BaziUtil.earthColor(_ as 地支)}>
                                    {_}
                                </Box>
                            ))}
                        </Td>
                        <Th px={2} py={1} fontSize="xs" color="white" textAlign="right">
                            時空
                        </Th>
                        <Td px={2} py={1} fontSize="xs" fontWeight="bold" textAlign="right">
                            {qimenResult.旬空.時空.split("").map((_, key) => (
                                <Box display="inline" key={key} color={BaziUtil.earthColor(_ as 地支)}>
                                    {_}
                                </Box>
                            ))}
                        </Td>
                    </Tr>
                    <Tr>
                        <Th colSpan={5} px={2} py={1} fontSize="xs" color='white' textAlign='right'>
                            值符
                        </Th>
                        <Td colSpan={3} px={2} py={1} fontSize="xs" color='white' textAlign='right'>
                            <Box fontWeight='bold' display='inline' color={QimenUtil.eightStarColor(qimenResult.值符值使.值符星宮[0].replace('芮', '禽') as 星)}>
                                {QimenUtil.eightStarTitle(qimenResult.值符值使.值符星宮[0].replace('芮', '禽') as 星)}
                            </Box>
                            {`落${QimenUtil.eightDiagramTitle(qimenResult.值符值使.值符星宮[1] as 八卦).slice(1)}宮`}
                        </Td>
                    </Tr>
                    <Tr>
                        <Th colSpan={5} px={2} py={1} fontSize="xs" color='white' textAlign='right'>
                            值使
                        </Th>
                        <Td colSpan={3} px={2} py={1} fontSize="xs" color='white' textAlign='right'>
                            <Box fontWeight='bold' display='inline' color={QimenUtil.eightDoorColor(qimenResult.值符值使.值使門宮[0])}>
                                {QimenUtil.eightDoorTitle(qimenResult.值符值使.值使門宮[0] as 門)}
                            </Box>
                            {`落${QimenUtil.eightDiagramTitle(qimenResult.值符值使.值使門宮[1] as 八卦).slice(1)}宮`}
                        </Td>
                    </Tr>
                    <Tr>
                        <Th colSpan={5} px={2} py={1} fontSize="xs" color='white' textAlign='right'>
                            天乙
                        </Th>
                        <Td colSpan={3} px={2} py={1} fontSize="xs" fontWeight='bold' color={QimenUtil.eightStarColor(qimenResult.天乙.replace('芮', '禽') as 星)} textAlign='right'>
                            {QimenUtil.eightStarTitle(qimenResult.天乙.replace('芮', '禽') as 星)}
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </Box>
    );
});
