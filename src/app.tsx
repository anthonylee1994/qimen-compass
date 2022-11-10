import React from "react";
import {Flex} from "@chakra-ui/react";
import {useCompass} from "hooks/useCompass";
import {QimenUtil} from "utils/QimenUtil";
import {BaziUtil} from "utils/BaziUtil";
import {AngleContext} from "contexts/AngleContext";
import {QimenResultContext} from "contexts/QimenResultContext";
import {BaziResultContext} from "contexts/BaziResultContext";
import {Compass} from "components/Compass";
import {RequestPermissionButton} from "components/RequestPermissionButton";
import {BaziPanel} from "components/BaziPanel";
import {DateContext} from "./contexts/DateContext";
import {DateTimePicker} from "./components/DateTimePicker";

export const App = React.memo(() => {
    const {init, angle, requestPermission, canRequestPermission} = useCompass();
    const [date, setDate] = React.useState<Date>(new Date());

    const qimenResult = React.useMemo(() => QimenUtil.result(date), [date]);
    const baziResult = React.useMemo(() => BaziUtil.result(date), [date]);

    React.useEffect(() => {
        init();
    }, [init]);

    return (
        <AngleContext.Provider value={angle}>
            <DateContext.Provider value={date}>
                <QimenResultContext.Provider value={qimenResult}>
                    <BaziResultContext.Provider value={baziResult}>
                        <Flex height="calc(100% - 108px)" justifyContent="center" alignItems="center">
                            {canRequestPermission && <RequestPermissionButton onClick={requestPermission} />}
                            <DateTimePicker date={date} onChange={setDate} />
                            <Compass />
                            <BaziPanel />
                        </Flex>
                    </BaziResultContext.Provider>
                </QimenResultContext.Provider>
            </DateContext.Provider>
        </AngleContext.Provider>
    );
});
