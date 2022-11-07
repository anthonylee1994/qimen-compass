import React from "react";
import {Compass} from "./components/Compass";
import {Flex} from "@chakra-ui/react";
import {useCompass} from "./hooks/useCompass";
import {RequestPermissionButton} from "./components/RequestPermissionButton";
import {AngleDebugger} from "./components/AngleDebugger";
import {AngleContext} from "./contexts/AngleContext";
import {QimenUtil} from "./utils/QimenUtil";
import {QimenResultContext} from "./contexts/QimenResultContext";
import {BaziUtil} from "./utils/BaziUtil";
import {BaziResultContext} from "./contexts/BaziResultContext";

export const App = React.memo(() => {
    const {init, angle, requestPermission} = useCompass();
    const [date] = React.useState<Date>(new Date());

    const qimenResult = React.useMemo(() => QimenUtil.result(date), [date]);
    const baziResult = React.useMemo(() => BaziUtil.result(date), [date]);

    React.useEffect(() => {
        init();
    }, [init]);

    return (
        <AngleContext.Provider value={angle}>
            <QimenResultContext.Provider value={qimenResult}>
                <BaziResultContext.Provider value={baziResult}>
                    <Flex height="full" justifyContent="center" alignItems="center">
                        <RequestPermissionButton onClick={requestPermission} />
                        <Compass />
                        <AngleDebugger />
                    </Flex>
                </BaziResultContext.Provider>
            </QimenResultContext.Provider>
        </AngleContext.Provider>
    );
});
