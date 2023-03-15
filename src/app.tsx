import React from "react";
import {Flex} from "@chakra-ui/react";
import {useCompass} from "hooks/useCompass";
import {AngleContext} from "contexts/AngleContext";
import {Compass} from "components/Compass";
import {DateTimePicker} from "./components/DateTimePicker";
import {useAppStore} from "./stores/useAppStore";
import {RequestPermissionButton} from "./components/RequestPermissionButton";

export const App = React.memo(() => {
    const {init, angle, requestPermission, canRequestPermission} = useCompass();
    const date = useAppStore(state => state.date);
    const setDate = useAppStore(state => state.setDate);
    const setCompassEnabled = useAppStore(state => state.setCompassEnabled);

    React.useEffect(init, [init]);

    return (
        <AngleContext.Provider value={angle}>
            <Flex height="100%" justifyContent="center" alignItems="center">
                <DateTimePicker date={date} onChange={setDate} />
                <Compass />
                {canRequestPermission && (
                    <RequestPermissionButton
                        onChange={async event => {
                            if (event.target.checked) {
                                await requestPermission();
                            }
                            setCompassEnabled(event.target.checked);
                        }}
                    />
                )}
            </Flex>
        </AngleContext.Provider>
    );
});
