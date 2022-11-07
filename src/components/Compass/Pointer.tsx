import React, {useContext} from "react";
import {Box, theme, Text} from "@chakra-ui/react";
import {AngleContext} from "../../contexts/AngleContext";

export const Pointer = React.memo(() => {
    const angle = useContext(AngleContext);

    return (
        <Box position="relative" width={100} height={100}>
            <Box
                position="relative"
                zIndex={10}
                transform={`rotate(-${angle}deg)`}
                border={`solid 3px ${theme.colors.orange[300]}`}
                boxShadow="inset 0 0 10px 0 rgb(0 0 0 / 40%)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                width={100}
                height={100}
                bgColor="white"
                borderRadius="full"
            >
                <Box position="relative" width={90} height={90}>
                    <Box position="absolute" left={0} top={0} width={90} height={90} clipPath="polygon(50% 0%, 47.5% 100%, 50% 100%)" bgColor={theme.colors.gray[500]} />
                    <Box position="absolute" left={0} top={0} width={90} height={90} clipPath="polygon(50% 0%, 50% 100%, 52.5% 100%)" bgColor={theme.colors.gray[700]} />
                    <Box
                        boxShadow="1px 1px 2px 0 rgb(0 0 0 / 50%)"
                        position="absolute"
                        left="calc(50% - 4px)"
                        top="50%"
                        borderRadius="full"
                        width={2}
                        height={2}
                        background={`radial-gradient(${theme.colors.gray[300]} 0, ${theme.colors.gray[500]} 100%)`}
                    />
                </Box>
            </Box>
            <Text zIndex={10} fontWeight="bold" fontSize="xs" color="rgb(0 0 0 / 20%)" position="absolute" left="calc(50% - 6px)" top={1}>
                北
            </Text>

            <Text zIndex={10} fontWeight="bold" fontSize="xs" color="rgb(0 0 0 / 20%)" position="absolute" right={1} top="calc(50% - 6px)">
                東
            </Text>

            <Text zIndex={10} fontWeight="bold" fontSize="xs" color="rgb(0 0 0 / 20%)" position="absolute" left="calc(50% - 6px)" bottom={1}>
                南
            </Text>

            <Text zIndex={10} fontWeight="bold" fontSize="xs" color="rgb(0 0 0 / 20%)" position="absolute" left={1} top="calc(50% - 6px)">
                西
            </Text>
        </Box>
    );
});
