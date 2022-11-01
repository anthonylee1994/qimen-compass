let WanNianLi = (function () {
    //天幹序數：1（甲），2（乙），……
    let __TianGan = ["", "甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"],
        //地支序數：1（寅），2（卯），……
        __NianZhi = ["", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥", "子", "丑"],
        //月的地支序數：寅月為正月，……
        __YueZhi = ["", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥", "子", "丑"],
        __WuXing = {
            甲: "木",
            乙: "木",
            丙: "火",
            丁: "火",
            戊: "土",
            己: "土",
            庚: "金",
            辛: "金",
            壬: "水",
            癸: "水",
            寅: "木",
            卯: "木",
            辰: "土",
            巳: "火",
            午: "火",
            未: "土",
            申: "金",
            酉: "金",
            戌: "土",
            亥: "水",
            子: "水",
            丑: "土",
        },
        __JiaZi = [
            undefined,
            "甲子",
            "乙丑",
            "丙寅",
            "丁卯",
            "戊辰",
            "己巳",
            "庚午",
            "辛未",
            "壬申",
            "癸酉",
            "甲戌",
            "乙亥",
            "丙子",
            "丁丑",
            "戊寅",
            "己卯",
            "庚辰",
            "辛巳",
            "壬午",
            "癸未",
            "甲申",
            "乙酉",
            "丙戌",
            "丁亥",
            "戊子",
            "己丑",
            "庚寅",
            "辛卯",
            "壬辰",
            "癸巳",
            "甲午",
            "乙未",
            "丙申",
            "丁酉",
            "戊戌",
            "己亥",
            "庚子",
            "辛丑",
            "壬寅",
            "癸卯",
            "甲辰",
            "乙巳",
            "丙午",
            "丁未",
            "戊申",
            "己酉",
            "庚戌",
            "辛亥",
            "壬子",
            "癸丑",
            "甲寅",
            "乙卯",
            "丙辰",
            "丁巳",
            "戊午",
            "己未",
            "庚申",
            "辛酉",
            "壬戌",
            "癸亥",
        ],
        //時幹支
        __ShiGanZhi = {
            "-1": "子",
            0: "丑",
            1: "寅",
            2: "卯",
            3: "辰",
            4: "巳",
            5: "午",
            6: "未",
            7: "申",
            8: "酉",
            9: "戌",
            10: "亥",
            11: "子",
        };
    /**
     * 計算兩個日期之間的天數
     * @param {Object} date1
     * @param {Object} date2
     */
    function daysBetweenDate(date1, date2) {
        return parseInt((date2.getTime() - date1.getTime()) / 1000 / 60 / 60 / 24);
    }

    /**
     * 判斷是否閏年
     * @param {Object} year
     */
    function isRunnian(year) {
        year = Number(year);
        if (year % 100 === 0) {
            return year % 400 === 0;
        } else {
            return year % 4 === 0;
        }
    }
    /**
     * 獲取月份基數
     * | 月份	| 1 | 2  | 3  | 4  | 5 | 6  | 7 | 8  | 9 | 10 | 11 | 12 |
     * | 月基數	| 0 | 31 | -1 | 30 | 0 | 31 | 1 | 32 | 3 | 33 | 4  | 34 |
     * @param {Object} month
     */
    function getMonthBase(month) {
        month = Number(month);
        let base = [undefined, 0, 31, -1, 30, 0, 31, 1, 32, 3, 33, 4, 34];
        return base[month];
    }
    /**
     * 獲取指定年份所屬的世紀
     * @param {Object} year
     */
    function getCenturyByYear(year) {
        year = Number(year);
        if (year % 100 === 0) {
            return year / 100;
        }
        return parseInt(year / 100) + 1;
    }
    /**
     * 根據世紀，計算該世紀常數。公式：X = 44*(C-17) + (C-17)/4 + 3。C：世紀，X：世紀常數
     * @param {Object} century
     */
    function getCenturyConst(century) {
        century = Number(century);
        return (44 * (century - 17) + parseInt((century - 17) / 4) + 3) % 60;
    }
    /**
     * 根據高氏日柱公式，獲取指定日期的天幹地支。
     * 公式：r = s/4*6 + 5*(s/4*3+u)+m+d+x。
     * r：日柱的母數，r除以60取余，即時日柱的幹支序列數。
     * s：公元年數後兩位減1，s/4取整數部分。
     * u：s除以4的余數
     * m：月基數
     * d：日期數
     * x：世紀常數
     * @param {Object} year
     * @param {Object} month
     * @param {Object} date
     */
    function getRiGan(year, month, date) {
        year = Number(year);
        let s = (year % 100) - 1,
            u = s % 4,
            m = getMonthBase(month),
            d = date,
            x = getCenturyConst(getCenturyByYear(year));
        // console.log('s:%s,u:%s,m:%s,d:%s,x:%s', s, u, m, d, x);
        let r = parseInt(s / 4) * 6 + 5 * (parseInt(s / 4) * 3 + u) + m + d + x;
        if (isRunnian(year) && month > 2) {
            r += 1;
        }
        r %= 60;
        r === 0 && (r = 60);
        return r;
    }
    /**
     * 獲取年幹。公式：年幹=年份個位數-3。適用於任何西元年，個位數小於3時，借10
     * @param {Object} year
     */
    function getNianGanIndex(year) {
        //年幹=年份個位數-3，個位數小於2，借10
        let index = Number(year.toString().slice(-1, year.length));
        index <= 3 && (index += 10);
        index -= 3;
        return index;
    }
    /**
     * 獲取年支。公式：年支=(年份+7)/12取余數。整除余0即12，為丑。
     * @param {Object} year
     */
    function getNianZhiIndex(year) {
        return (Number(year) + 7) % 12 || 12;
    }
    /**
     * 獲取月幹。公式：月幹=年幹*2+月支
     * @param {Object} nianGanIndex
     * @param {Object} lMonth
     */
    function getYueGanIndex(nianGanIndex, lMonth) {
        let index = Number(nianGanIndex) * 2 + Number(lMonth);
        index %= 10;
        index === 0 && (index = 10);
        return index;
    }
    /**
     * 獲取月支。公式：月支=農曆月份
     * @param {Object} lMonth
     */
    function getYueZhiIndex(lMonth) {
        return Number(lMonth);
    }
    /**
     * 獲取時支。公式：時支=小時/2 - 1（小時為偶數時），時支=(小時+1)/2 - 1（小時為奇數時）
     * @param {Object} hour
     */
    function getShiZhiIndex(hour) {
        hour = Number(hour);
        if (hour % 2 === 0) {
            return hour / 2 - 1;
        } else {
            return (hour + 1) / 2 - 1;
        }
    }
    /**
     * 獲取時幹。公式：時幹=日幹*2 + 時支
     * @param {Object} riGanIndex
     * @param {Object} shiZhiIndex
     */
    function getShiGanIndex(riGanIndex, shiZhiIndex) {
        let index = (riGanIndex * 2 + shiZhiIndex) % 10;
        index === 0 && (index = 10);
        return index;
    }

    function getWuxingResult(wuxing) {
        let temp = {金: 0, 木: 0, 水: 0, 火: 0, 土: 0};
        [].forEach.call(Object.keys(wuxing), function (value, index) {
            [].forEach.call(wuxing[value], function (v, i) {
                temp[v]++;
            });
        });
        return temp;
    }
    return {
        getResult: function (date) {
            let __bazi = {
                year: "",
                month: "",
                date: "",
                hour: "",
            };
            let __wuxing = {
                year: "",
                month: "",
                date: "",
                hour: "",
            };
            let nianGanIndex = (nianZhiIndex = yueGanIndex = yueZhiIndex = riGanIndex = shiZhiIndex = shiGanIndex = -1);
            let y1 = (y2 = m1 = m2 = "");
            let serial = (riGan = "");

            nianGanIndex = getNianGanIndex(date.cYear);
            y1 = __TianGan[nianGanIndex];
            __bazi.year = y1;
            __wuxing.year = __WuXing[y1];

            //年支=(年份+7)除以12的余數。
            nianZhiIndex = getNianZhiIndex(date.cYear);
            y2 = __NianZhi[nianZhiIndex];
            __bazi.year += y2;
            __wuxing.year += __WuXing[y2];

            //月幹=年幹*2 + 月支，和超過10，直接取個位數
            yueGanIndex = getYueGanIndex(nianGanIndex, date.lMonth);
            y1 = __TianGan[yueGanIndex];
            __bazi.month = y1;
            __wuxing.month = __WuXing[y1];

            //月支=農曆月份
            yueZhiIndex = getYueZhiIndex(date.lMonth);
            y2 = __YueZhi[yueZhiIndex];
            __bazi.month += y2;
            __wuxing.month += __WuXing[y2];

            //日幹及日支。采用高氏日柱公式，得到日期在甲子表中的序號
            serial = getRiGan(date.cYear, date.cMonth, date.cDay);
            riGan = __JiaZi[serial];
            riGanIndex = __TianGan.indexOf(riGan.slice(0, 1));
            __bazi.date = riGan;
            __wuxing.date = __WuXing[riGan.slice(0, 1)] + __WuXing[riGan.slice(1, 2)];

            //時支
            shiZhiIndex = getShiZhiIndex(date.hour);
            __bazi.hour = __ShiGanZhi[shiZhiIndex];
            __wuxing.hour = __WuXing[__bazi.hour];
            //時幹
            shiGanIndex = getShiGanIndex(riGanIndex, shiZhiIndex);
            __bazi.hour = __TianGan[shiGanIndex] + __bazi.hour;
            __wuxing.hour = __WuXing[__TianGan[shiGanIndex]] + __wuxing.hour;

            return {
                bazi: __bazi,
                wuxing: __wuxing,
                wuxingResult: getWuxingResult(__wuxing),
                jiazi: __JiaZi,
            };
        },
    };
})();

// let a = {
// 	cYear: 2016, //公曆年份
// 	cMonth: 7, //公曆月份
// 	lMonth: 6, //農曆月份
// 	cDay: 15, //公曆日期
// 	lDay: 12, //農曆日期
// 	hour: 22,
// 	minute: 16
// };

// let result = WanNianLi.getResult(a);
// console.log(result);
module.exports = WanNianLi;
