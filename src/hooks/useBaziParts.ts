import {QimenResult} from "../utils/QimenUtil/types";
import {地支, 天干} from "../utils/BaziUtil/type";

export const useBaziParts = (qimenResult: QimenResult) => {
    const baziParts = qimenResult.干支.split("");
    const 年干 = baziParts[0] as 天干;
    const 年支 = baziParts[1] as 地支;
    const 月干 = baziParts[3] as 天干;
    const 月支 = baziParts[4] as 地支;
    const 日干 = baziParts[6] as 天干;
    const 日支 = baziParts[7] as 地支;
    const 時干 = baziParts[9] as 天干;
    const 時支 = baziParts[10] as 地支;

    return {年干, 年支, 月干, 月支, 日干, 日支, 時干, 時支};
};
