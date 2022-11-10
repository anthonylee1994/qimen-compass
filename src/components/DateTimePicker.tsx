import React from "react";
import {IconButton, Input, InputGroup, InputLeftElement, InputRightElement} from "@chakra-ui/react";
import moment from "moment";
import {ArrowForwardIcon, ArrowBackIcon} from "@chakra-ui/icons";

interface Props {
    date: Date;
    onChange: (date: Date) => void;
}

export const DateTimePicker = React.memo<Props>(({date, onChange}) => {
    return (
        <InputGroup size="md" position="absolute" top={3} left={3} width={250}>
            <InputLeftElement>
                <IconButton borderRadius='full' onClick={() => onChange(moment(date).subtract(2, "hour").toDate())} colorScheme="yellow" size="sm" aria-label="back" icon={<ArrowBackIcon />} />
            </InputLeftElement>
            <Input
                borderRadius='50px'
                borderColor="red.300"
                borderWidth="1px"
                _focus={{borderColor: "white"}}
                _hover={{borderColor: "white"}}
                color="white"
                bgColor="red.600"
                variant="filled"
                type="datetime-local"
                value={moment(date).format("YYYY-MM-DDTHH:mm")}
                onChange={e => onChange(new Date(e.target.value))}
            />
            <InputRightElement>
                <IconButton borderRadius='full' onClick={() => onChange(moment(date).add(2, "hour").toDate())} colorScheme="yellow" size="sm" aria-label="forward" icon={<ArrowForwardIcon />} />
            </InputRightElement>
        </InputGroup>
    );
});
