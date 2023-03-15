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
        let listener: (e: any) => void;

        if (isiOS) {
            listener = (e: CompatibleDeviceOrientationEvent) => {
                setAngle(e?.webkitCompassHeading ?? 0);
            };

            window.addEventListener("deviceorientation", listener, true);

            return () => {
                window.removeEventListener("deviceorientation", listener, true);
            };
        } else if (isAndroid) {
            listener = (e: any) => {
                setAngle(-e.alpha);
            };
            window.addEventListener("deviceorientationabsolute", listener, true);

            return () => {
                window.removeEventListener("deviceorientationabsolute", listener, true);
            };
        }
    }, []);

    return {
        init,
        canRequestPermission,
        requestPermission,
        angle: debouncedAngle,
    };
};
