import React from "react";
import {Text, TextProps} from "@chakra-ui/react";

export const Direction = React.memo<TextProps>(props => {
    return <Text fontWeight="bold" fontSize={20} color="white" position="absolute" {...props} />;
});
