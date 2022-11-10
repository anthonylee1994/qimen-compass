import React from "react";
import {IconButton} from "@chakra-ui/react";
import {RepeatIcon} from "@chakra-ui/icons";

interface Props {
    onClick: () => void;
}

export const RequestPermissionButton = React.memo<Props>(({onClick}) => {
    return (
        <IconButton
            _hover={{}}
            _active={{}}
            borderRadius="full"
            borderColor="red.400"
            variant="outline"
            onClick={onClick}
            position="absolute"
            top={3}
            right={3}
            aria-label="request permission"
            icon={<RepeatIcon color="white" />}
        />
    );
});
