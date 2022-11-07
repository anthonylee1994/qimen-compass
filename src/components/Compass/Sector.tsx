import React from "react";
import {Box, Text} from "@chakra-ui/react";

interface Props {
    size: number;
    w: number;
    zIndex: number;
    clipPath: string;
    text: string | React.ReactNode;
    color: string;
    rotate: number;
    inverse?: boolean;
}

export const Sector = React.memo<Props>(({ size, w, zIndex, clipPath, rotate, color, text, inverse }) => {
    return (
        <Box zIndex={zIndex} transform={`rotate(${rotate}deg)`} position="absolute" left={0} top={0} width={size} height={size}>
            <Box
                transformOrigin="top center"
                display="flex"
                justifyContent="center"
                h='30px'
                w={`${w}px`}
                clipPath={clipPath}
                top={0}
                left={`calc(50% - ${w / 2}px)`}
                bgColor={inverse ? 'gray.700' : color}
                position="absolute"
            >
                <Text fontWeight='bold' fontSize="xs" color={inverse ? color : 'white'}>
                    {text}
                </Text>
            </Box>
        </Box>
    );
});
