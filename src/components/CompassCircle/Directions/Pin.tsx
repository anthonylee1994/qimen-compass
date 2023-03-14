import React from "react";
import {Box, Text, theme} from "@chakra-ui/react";
import {AngleContext} from "contexts/AngleContext";
import {useAppStore} from "stores/useAppStore";

export const Pin = React.memo(() => {
    const angle = React.useContext(AngleContext);
    const compassEnabled = useAppStore(state => state.compassEnabled);

    return (
        <Box transform={`rotateZ(${compassEnabled ? 180 + angle : 0}deg)`} position="relative" width={240} height={240}>
            <Box position="absolute" left="50%" top={0} width="1px" height={120} bgColor="red" />
            <Box position="absolute" left="50%" bottom={0} width="1px" height={120} bgColor="blue.300" />
            <Box
                boxShadow="1px 1px 2px 0 rgb(0 0 0 / 50%)"
                position="absolute"
                left="calc(50% - 8px)"
                top="calc(50% - 8px)"
                borderRadius="full"
                width="16px"
                height="16px"
                background={`radial-gradient(${theme.colors.yellow[300]} 0, ${theme.colors.red[500]} 100%)`}
            />

            <Text textAlign="center" width="100px" position="absolute" top="calc(50% + 20px)" left="calc(50% - 50px)" fontSize={20} color="white">
                {angle.toFixed(2)}°
            </Text>
        </Box>
    );
});
