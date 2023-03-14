import React from "react";
import {Direction} from "./Direction";
import {BigMark} from "./BigMark";
import range from "lodash/range";
import {SmallMark} from "./SmallMark";

export const Directions = React.memo(() => {
    return (
        <React.Fragment>
            <Direction top="30px" left="calc(50% - 10px)">
                南
            </Direction>

            <Direction fontSize='16px' transform="rotate(45deg)" right="50px" top="55px">
                西南
            </Direction>

            <Direction transform="rotate(90deg)" right="30px" top="calc(50% - 15px)">
                西
            </Direction>

            <Direction fontSize='16px' transform="rotate(135deg)" right="50px" bottom="55px">
                西北
            </Direction>

            <Direction transform="rotate(180deg)" bottom="30px" left="calc(50% - 10px)">
                北
            </Direction>

            <Direction fontSize='16px' transform="rotate(225deg)" left="55px" bottom="55px">
                東北
            </Direction>

            <Direction transform="rotate(270deg)" left="30px" top="calc(50% - 15px)">
                東
            </Direction>

            <Direction fontSize='16px' transform="rotate(315deg)" left="50px" top="55px">
                東南
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
