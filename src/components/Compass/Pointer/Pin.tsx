import React from "react";
import {theme, Box} from "@chakra-ui/react";
import {AngleContext} from "contexts/AngleContext";

export const Pin = React.memo(() => {
    const angle = React.useContext(AngleContext);

    return (
        <Box transform={`rotateZ(-${360 - angle}deg)`} position="relative" width={90} height={90}>
            <Box position="absolute" left={0} top={0} width={90} height={90} clipPath="polygon(50% 0%, 47.5% 100%, 50% 100%)" bgColor={theme.colors.gray[500]} />
            <Box position="absolute" left={0} top={0} width={90} height={90} clipPath="polygon(50% 0%, 50% 100%, 52.5% 100%)" bgColor={theme.colors.gray[700]} />
            <Box
                boxShadow="1px 1px 2px 0 rgb(0 0 0 / 50%)"
                position="absolute"
                left="calc(50% - 4px)"
                top="calc(50% - 4px)"
                borderRadius="full"
                width="8px"
                height="8px"
                background={`radial-gradient(${theme.colors.gray[300]} 0, ${theme.colors.gray[500]} 100%)`}
            />
        </Box>
    );
});
