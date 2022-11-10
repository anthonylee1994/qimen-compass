import React from "react";
import {IconButton, Input, InputGroup, InputLeftElement, InputRightElement} from "@chakra-ui/react";
import moment from "moment";
import {ArrowForwardIcon, ArrowBackIcon} from "@chakra-ui/icons";

interface Props {
    date: Date;
    onChange: (date: Date) => void;
}

export const DateTimePicker = React.memo<Props>(({date, onChange}) => {
    const onBack = React.useCallback(() => {
        onChange(moment(date).subtract(2, "hour").toDate());
    }, [date, onChange]);

    const onForward = React.useCallback(() => {
        onChange(moment(date).add(2, "hour").toDate());
    }, [date, onChange]);

    const onInputChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            onChange(new Date(e.target.value));
        }
    }, [onChange]);

    return (
        <InputGroup size="md" position="absolute" top={3} left={3} width={250}>
            <InputLeftElement>
                <IconButton borderRadius="full" onClick={onBack} colorScheme="yellow" size="sm" aria-label="back" icon={<ArrowBackIcon />} />
            </InputLeftElement>
            <Input
                required
                borderRadius="50px"
                borderColor="red.300"
                borderWidth="1px"
                _focus={{borderColor: "white"}}
                _hover={{borderColor: "white"}}
                color="white"
                bgColor="red.600"
                variant="filled"
                type="datetime-local"
                value={moment(date).format("YYYY-MM-DDTHH:mm")}
                onChange={onInputChange}
                onReset={_ => onChange(new Date())}
            />
            <InputRightElement>
                <IconButton borderRadius="full" onClick={onForward} colorScheme="yellow" size="sm" aria-label="forward" icon={<ArrowForwardIcon />} />
            </InputRightElement>
        </InputGroup>
    );
});
