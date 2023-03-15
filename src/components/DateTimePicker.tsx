import React from "react";
import moment from "moment";
import {ArrowBackIcon, ArrowForwardIcon, TimeIcon} from "@chakra-ui/icons";
import {Flex, IconButton, Input, InputGroup, InputLeftElement, InputRightElement} from "@chakra-ui/react";

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

    const onInputChange = React.useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.value) {
                onChange(new Date(e.target.value));
            }
        },
        [onChange]
    );

    return (
        <Flex position="absolute" top={0} py={1} px={5} width="full" justifyContent="center" alignItems="center">
            <InputGroup size="md" width="100%" maxWidth="300px">
                <InputLeftElement>
                    <IconButton borderRadius="full" onClick={onBack} colorScheme="gray" size="sm" aria-label="back" icon={<ArrowBackIcon fontSize="lg" />} />
                </InputLeftElement>
                <Input
                    required
                    borderRadius="50px"
                    borderColor="white"
                    borderWidth="1px"
                    _focus={{borderColor: "white"}}
                    _hover={{borderColor: "white"}}
                    color="black"
                    bgColor="white"
                    variant="filled"
                    type="datetime-local"
                    textAlign="center"
                    value={moment(date).format("YYYY-MM-DD HH:mm")}
                    onChange={onInputChange}
                    onReset={_ => onChange(new Date())}
                />
                <InputRightElement>
                    <IconButton borderRadius="full" onClick={onForward} colorScheme="gray" size="sm" aria-label="forward" icon={<ArrowForwardIcon fontSize="lg" />} />
                </InputRightElement>
            </InputGroup>
            <IconButton aria-label="current" onClick={_ => onChange(new Date())} colorScheme="gray" size="sm" borderRadius="full" ml={2} icon={<TimeIcon fontSize="lg" />} />
        </Flex>
    );
});
