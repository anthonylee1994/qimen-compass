import lunar from "@tony801015/chinese-lunar";
import moment from "moment/moment";
import {天干, 地支} from "./type";

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

        return lunar(...m.format("YYYY-MM-DD").split("-"))
            .setTime(Number(m.format("HH")))
            .getJson();
    }

    public static heavenColor(value: 天干) {
        switch (value) {
            case "甲":
            case "乙":
                return "#00ff00";
            case "丙":
            case "丁":
                return "#ff0000";
            case "戊":
            case "己":
                return "#ff6500";
            case "庚":
            case "辛":
                return "#ffff00";
            case "壬":
            case "癸":
                return "#00ffff";
        }
    }

    public static earthColor(value: 地支) {
        switch (value) {
            case "亥":
            case "子":
                return "#00ffff";
            case "辰":
            case "戌":
            case "丑":
            case "未":
                return "#ff6500";
            case "寅":
            case "卯":
                return "#00ff00";
            case "巳":
            case "午":
                return "#ff0000";
            case "申":
            case "酉":
                return "#ffff00";
        }
    }
}
