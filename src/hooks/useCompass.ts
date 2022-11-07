import React from "react";

export const useCompass = () => {
    const [angle, setAngle] = React.useState(0);

    const requestPermission = React.useCallback(async () => {
        if ("requestPermission" in DeviceOrientationEvent) {
            await (DeviceOrientationEvent as any).requestPermission();
        }
    }, []);

    const init = React.useCallback(() => {
        window.addEventListener(
            "deviceorientation",
            (e: any) => {
                console.log("e", e);
                setAngle(e.webkitCompassHeading);
            },
            true
        );
    }, []);

    return {
        angle,
        init,
        requestPermission,
    };
};
