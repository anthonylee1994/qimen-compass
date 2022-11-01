import {Qimen} from "./qimen";
import {QimenResult} from "./types";

export class QimenUtil {
    public static result(date?: Date): QimenResult {
        const d = date || new Date();
        return new Qimen(d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours()).result as unknown as QimenResult;
    }
}
