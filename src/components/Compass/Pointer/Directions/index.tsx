import React from "react";
import {Direction} from "./Direction";
import {BigMark} from "./BigMark";
import range from "lodash/range";
import {SmallMark} from "./SmallMark";

export const Directions = React.memo(() => {
    return (
        <React.Fragment>
            <Direction top="7px" left="calc(50% - 5px)">
                北
            </Direction>

            <Direction color="gray.300" transform="rotate(45deg)" right="15px" top="15px" fontSize={8}>
                東北
            </Direction>

            <Direction transform="rotate(90deg)" right="7px" top="calc(50% - 7px)">
                東
            </Direction>

            <Direction color="gray.300" transform="rotate(135deg)" right="15px" bottom="15px" fontSize={8}>
                東南
            </Direction>

            <Direction transform="rotate(180deg)" bottom="7px" left="calc(50% - 5px)">
                南
            </Direction>

            <Direction color="gray.300" transform="rotate(225deg)" left="15px" bottom="15px" fontSize={8}>
                西南
            </Direction>

            <Direction transform="rotate(270deg)" left="7px" top="calc(50% - 7px)">
                西
            </Direction>

            <Direction color="gray.300" transform="rotate(314deg)" left="15px" top="15px" fontSize={8}>
                西北
            </Direction>

            {range(0, 36).map(angle => (
                <SmallMark key={angle} angle={angle * 5} />
            ))}
            {[0, 45, 90, 135].map(angle => (
                <BigMark key={angle} angle={angle} />
            ))}
        </React.Fragment>
    );
});
