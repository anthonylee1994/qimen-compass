import React from "react";
import {useDebounce} from "use-debounce";

interface CompatibleDeviceOrientationEvent extends DeviceOrientationEvent {
    requestPermission?: () => Promise<PermissionState>;
    webkitCompassHeading?: number;
}

const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
const isAndroid = /Android/.test(navigator.userAgent);

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
        if (isiOS) {
            window.addEventListener(
                "deviceorientation",
                (e: CompatibleDeviceOrientationEvent) => {
                    setAngle(e?.webkitCompassHeading ?? 0);
                },
                true
            );
        } else if (isAndroid) {
            window.addEventListener(
                "deviceorientationabsolute",
                (e: any) => {
                    setAngle(-e.alpha);
                },
                true
            );
        }
    }, []);

    return {
        init,
        canRequestPermission,
        requestPermission,
        angle: debouncedAngle,
    };
};
