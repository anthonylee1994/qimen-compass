import lunar from "@tony801015/chinese-lunar";
import moment from "moment/moment";

export interface BaziResult {
    chineseYear: string;
    chineseMonth: string;
    chineseDay: string;
    chineseTime: string;
}

export class BaziUtil {
    public static result(date?: Date): BaziResult {
        const d = date || new Date();
        const m = moment(d);

        return lunar(...m.format('YYYY-MM-DD').split('-')).setTime(m.format('HH')).getJson();
    }
}
