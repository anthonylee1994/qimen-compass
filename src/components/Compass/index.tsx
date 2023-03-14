import React, {useContext} from "react";
import {BaziCircle} from "../BaziCircle";
import {EightDiagramCircle} from "components/EightDiagramCircle";
import {EightDoorCircle} from "../EightDoorCircle";
import {EightStarCircle} from "../EightStarCircle";
import {EightBeastCircle} from "../EightBeastCircle";
import {Flex} from "@chakra-ui/react";
import {AngleContext} from "contexts/AngleContext";
import {useAppStore} from "stores/useAppStore";
import {CompassCircle} from "../CompassCircle";

export const Compass = React.memo(() => {
    const angle = useContext(AngleContext);
    const compassEnabled = useAppStore(state => state.compassEnabled);

    return (
        <Flex transform={`rotateZ(${compassEnabled ? 180 - angle : 0}deg)`}>
            <Flex justifyContent="center" alignItems="center" width={500} height={500} overflow={{md: "hidden"}} transform={{base: "scale(0.75)", sm: "scale(0.94)", md: "scale(1.3)"}}>
                <EightBeastCircle size={500} />
                <EightDoorCircle size={440} />
                <EightStarCircle size={380} />
                <EightDiagramCircle size={320} />
                <BaziCircle />
                {compassEnabled && <CompassCircle />}
            </Flex>
        </Flex>
    );
});
