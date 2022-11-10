import React from "react";
import {useDebounce} from "use-debounce";

interface CompatibleDeviceOrientationEvent extends DeviceOrientationEvent {
    requestPermission?: () => Promise<PermissionState>;
    webkitCompassHeading?: number;
}

export const useCompass = () => {
    const [angle, setAngle] = React.useState(0);
    const [debouncedAngle] = useDebounce(angle, 10);
    const canRequestPermission = "requestPermission" in DeviceOrientationEvent;

    const requestPermission = React.useCallback(async () => {
        if (canRequestPermission) {
            await (DeviceOrientationEvent as unknown as CompatibleDeviceOrientationEvent).requestPermission?.();
        }
    }, [canRequestPermission]);

    const init = React.useCallback(() => {
        window.addEventListener(
            "deviceorientation",
            (e: CompatibleDeviceOrientationEvent) => {
                setAngle(e?.webkitCompassHeading || e.alpha || 0);
            },
            true
        );
    }, []);

    return {
        init,
        canRequestPermission,
        requestPermission,
        angle: debouncedAngle,
    };
};
