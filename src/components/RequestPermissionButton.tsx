import React from "react";
import {Flex, Switch, Text} from "@chakra-ui/react";

interface Props {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RequestPermissionButton = React.memo<Props>(({onChange}) => {
    return (
        <Flex position="absolute" bottom={0} p={4} alignItems="center" flexDirection="column">
            <Switch size="lg" colorScheme="orange" onChange={onChange} />
            <Text py={1} color="white">
                指南針
            </Text>
        </Flex>
    );
});
