import React from "react";
import {QimenUtil} from "./utils/QimenUtil";

export const App = React.memo(() => {
    console.log(QimenUtil.result());

    return <div>AAA</div>;
});
