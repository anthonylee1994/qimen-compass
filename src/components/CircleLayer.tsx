import React from "react";
import {Box, Flex} from "@chakra-ui/react";
import range from "lodash/range";

interface Props {
    size: number;
    content: (index: number) => React.ReactNode;
}

export const CircleLayer = React.memo<Props>(({size, content}) => {
    return (
        <Flex justifyContent="center" alignItems="center" position="absolute" width={size} height={size}>
            {range(0, 8).map((value, index) => (
                <Flex justifyContent="center" width={size} height={size} key={index} position="absolute" top={0} transform={`rotate(${180 + 45 * index}deg)`}>
                    {content(index)}
                </Flex>
            ))}

            {range(0, 8).map(num => (
                <Flex
                    borderRadius="full"
                    key={num}
                    position="absolute"
                    width={size}
                    height={size}
                    borderWidth={1}
                    borderColor="white"
                    clipPath="polygon(50% 50%, 29% 0, 71% 0)"
                    transform={`rotate(${45 * num}deg)`}
                />
            ))}

            {range(0, 8).map(num => (
                <Box key={num} position="absolute" width="1px" height={size - 1} bgColor="white" transform={`rotate(${22.5 + 45 * num}deg)`} />
            ))}
        </Flex>
    );
});
