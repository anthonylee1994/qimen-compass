import {create} from "zustand";
import {QimenResult} from "../utils/QimenUtil/types";
import {QimenUtil} from "../utils/QimenUtil";

interface AppStore {
    compassEnabled: boolean;
    setCompassEnabled: (enabled: boolean) => void;
    date: Date;
    setDate: (date: Date) => void;
    qimenResult: QimenResult;
}

export const useAppStore = create<AppStore>(set => ({
    compassEnabled: false,
    date: new Date(),
    qimenResult: QimenUtil.result(new Date()),
    setCompassEnabled: (enabled: boolean) => set({compassEnabled: enabled}),
    setDate: (date: Date) => {
        QimenUtil.result(date);
        set({date, qimenResult: QimenUtil.result(date)});
    },
}));
