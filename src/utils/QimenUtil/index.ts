import {Qimen} from "./qimen";
import {QimenResult, 八卦, 天干} from "./types";
import {theme} from "@chakra-ui/react";

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
                return theme.colors.green[500];
            case "丙":
            case "丁":
                return theme.colors.red[500];
            case "戊":
            case "己":
                return theme.colors.orange[500];
            case "庚":
            case "辛":
                return theme.colors.yellow[500];
            case "壬":
            case "癸":
                return theme.colors.blue[500];
        }
    }
}
