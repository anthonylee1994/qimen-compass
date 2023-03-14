import {Qimen} from "./qimen";
import {QimenResult, 八卦, 地支, 天干, 星, 神, 門, 驛馬} from "./types";

export class QimenUtil {
    public static result(date?: Date): QimenResult {
        const d = date || new Date();
        return new Qimen(d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours()).result as unknown as QimenResult;
    }

    public static eightDiagramsInSequence(): 八卦[] {
        return ["坎", "艮", "震", "巽", "離", "坤", "兌", "乾"];
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

    public static eightBeastTitle(value: 神) {
        switch (value) {
            case "符":
                return "值符";
            case "蛇":
                return "騰蛇";
            case "陰":
                return "太陰";
            case "合":
                return "六合";
            case "虎":
            case "勾":
                return "白虎";
            case "玄":
            case "雀":
                return "玄武";
            case "地":
                return "九地";
            case "天":
                return "九天";
        }
    }

    public static eightBeastColor(value: 神) {
        switch (value) {
            case "符":
                return "#00ff00";
            case "蛇":
                return "#ff0000";
            case "陰":
                return "#ffff00";
            case "合":
                return "#00ff00";
            case "虎":
            case "勾":
                return "#ffff00";
            case "玄":
            case "雀":
                return "#00ffff";
            case "地":
                return "#ff6500";
            case "天":
                return "#ffff00";
        }
    }

    public static eightDoorTitle(value: 門) {
        switch (value) {
            case "休":
                return "休門";
            case "生":
                return "生門";
            case "傷":
                return "傷門";
            case "杜":
                return "杜門";
            case "景":
                return "景門";
            case "死":
                return "死門";
            case "驚":
                return "驚門";
            case "開":
                return "開門";
        }
    }

    public static eightDoorColor(value: 門) {
        switch (value) {
            case "休":
                return "#00ffff";
            case "生":
                return "#ff6500";
            case "傷":
                return "#00ff00";
            case "杜":
                return "#00ff00";
            case "景":
                return "#ff0000";
            case "死":
                return "#ff6500";
            case "驚":
                return "#ffff00";
            case "開":
                return "#ffff00";
        }
    }

    public static eightStarTitle(value: 星) {
        switch (value) {
            case "蓬":
                return "天蓬";
            case "任":
                return "天任";
            case "沖":
                return "天沖";
            case "輔":
                return "天輔";
            case "英":
                return "天英";
            case "禽":
            case "芮":
                return "天芮";
            case "柱":
                return "天柱";
            case "心":
                return "天心";
        }
    }

    public static eightStarColor(value: 星) {
        switch (value) {
            case "蓬":
                return "#00ffff";
            case "任":
                return "#ff6500";
            case "沖":
                return "#00ff00";
            case "輔":
                return "#00ff00";
            case "英":
                return "#ff0000";
            case "禽":
            case "芮":
                return "#ff6500";
            case "柱":
                return "#ffff00";
            case "心":
                return "#ffff00";
        }
    }

    public static eightDiagramTitle(value: 八卦) {
        switch (value) {
            case "乾":
                return "☰乾六";
            case "坎":
                return "☵坎一";
            case "艮":
                return "☶艮八";
            case "震":
                return "☳震三";
            case "巽":
                return "☴巽四";
            case "離":
                return "☲離九";
            case "坤":
                return "☷坤二";
            case "兌":
                return "☱兌七";
            default:
                return "　中五";
        }
    }

    public static eightDiagramColor(value: 八卦) {
        switch (value) {
            case "乾":
                return "#ffff00";
            case "坎":
                return "#00ffff";
            case "艮":
                return "#ff6500";
            case "震":
                return "#00ff00";
            case "巽":
                return "#00ff00";
            case "離":
                return "#ff0000";
            case "坤":
                return "#ff6500";
            case "兌":
                return "#ffff00";
        }
    }

    public static horsePosition(value: 驛馬): number {
        switch (value) {
            case "寅":
                return 1;
            case "巳":
                return 3;
            case "申":
                return 5;
            case "亥":
                return 7;
        }
    }

    public static emptyPosition(value: 地支): number {
        switch (value) {
            case "子":
                return 0;
            case "丑":
            case "寅":
                return 1;
            case "卯":
                return 2;
            case "辰":
            case "巳":
                return 3;
            case "午":
                return 4;
            case "未":
            case "申":
                return 5;
            case "酉":
                return 6;
            case "戌":
            case "亥":
                return 7;
        }
    }
}
