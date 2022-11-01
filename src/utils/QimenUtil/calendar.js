/**
 * @1900-2100區間內的公曆、農曆互轉
 * @charset UTF-8
 * @Author  Jea楊(JJonline@JJonline.Cn)
 * @Time    2014-7-21
 * @Time    2016-8-13 Fixed 2033hex、Attribution Annals
 * @Time    2016-9-25 Fixed lunar LeapMonth Param Bug
 * @Time    2017-7-24 Fixed use getTerm Func Param Error.use solar year,NOT lunar year
 * @Version 1.0.3
 * @公曆轉農曆：calendar.solar2lunar(1987,11,01); //[you can ignore params of prefix 0]
 * @農曆轉公曆：calendar.lunar2solar(1987,09,10); //[you can ignore params of prefix 0]
 */
module.exports = {
    /**
     * 農曆1900-2100的潤大小信息表
     * @Array Of Property
     * @return Hex
     */
    lunarInfo: [
        0x04bd8,
        0x04ae0,
        0x0a570,
        0x054d5,
        0x0d260,
        0x0d950,
        0x16554,
        0x056a0,
        0x09ad0,
        0x055d2, //1900-1909
        0x04ae0,
        0x0a5b6,
        0x0a4d0,
        0x0d250,
        0x1d255,
        0x0b540,
        0x0d6a0,
        0x0ada2,
        0x095b0,
        0x14977, //1910-1919
        0x04970,
        0x0a4b0,
        0x0b4b5,
        0x06a50,
        0x06d40,
        0x1ab54,
        0x02b60,
        0x09570,
        0x052f2,
        0x04970, //1920-1929
        0x06566,
        0x0d4a0,
        0x0ea50,
        0x16a95,
        0x05ad0,
        0x02b60,
        0x186e3,
        0x092e0,
        0x1c8d7,
        0x0c950, //1930-1939
        0x0d4a0,
        0x1d8a6,
        0x0b550,
        0x056a0,
        0x1a5b4,
        0x025d0,
        0x092d0,
        0x0d2b2,
        0x0a950,
        0x0b557, //1940-1949
        0x06ca0,
        0x0b550,
        0x15355,
        0x04da0,
        0x0a5b0,
        0x14573,
        0x052b0,
        0x0a9a8,
        0x0e950,
        0x06aa0, //1950-1959
        0x0aea6,
        0x0ab50,
        0x04b60,
        0x0aae4,
        0x0a570,
        0x05260,
        0x0f263,
        0x0d950,
        0x05b57,
        0x056a0, //1960-1969
        0x096d0,
        0x04dd5,
        0x04ad0,
        0x0a4d0,
        0x0d4d4,
        0x0d250,
        0x0d558,
        0x0b540,
        0x0b6a0,
        0x195a6, //1970-1979
        0x095b0,
        0x049b0,
        0x0a974,
        0x0a4b0,
        0x0b27a,
        0x06a50,
        0x06d40,
        0x0af46,
        0x0ab60,
        0x09570, //1980-1989
        0x04af5,
        0x04970,
        0x064b0,
        0x074a3,
        0x0ea50,
        0x06b58,
        0x05ac0,
        0x0ab60,
        0x096d5,
        0x092e0, //1990-1999
        0x0c960,
        0x0d954,
        0x0d4a0,
        0x0da50,
        0x07552,
        0x056a0,
        0x0abb7,
        0x025d0,
        0x092d0,
        0x0cab5, //2000-2009
        0x0a950,
        0x0b4a0,
        0x0baa4,
        0x0ad50,
        0x055d9,
        0x04ba0,
        0x0a5b0,
        0x15176,
        0x052b0,
        0x0a930, //2010-2019
        0x07954,
        0x06aa0,
        0x0ad50,
        0x05b52,
        0x04b60,
        0x0a6e6,
        0x0a4e0,
        0x0d260,
        0x0ea65,
        0x0d530, //2020-2029
        0x05aa0,
        0x076a3,
        0x096d0,
        0x04afb,
        0x04ad0,
        0x0a4d0,
        0x1d0b6,
        0x0d250,
        0x0d520,
        0x0dd45, //2030-2039
        0x0b5a0,
        0x056d0,
        0x055b2,
        0x049b0,
        0x0a577,
        0x0a4b0,
        0x0aa50,
        0x1b255,
        0x06d20,
        0x0ada0, //2040-2049
        /**Add By JJonline@JJonline.Cn**/
        0x14b63,
        0x09370,
        0x049f8,
        0x04970,
        0x064b0,
        0x168a6,
        0x0ea50,
        0x06b20,
        0x1a6c4,
        0x0aae0, //2050-2059
        0x092e0,
        0x0d2e3,
        0x0c960,
        0x0d557,
        0x0d4a0,
        0x0da50,
        0x05d55,
        0x056a0,
        0x0a6d0,
        0x055d4, //2060-2069
        0x052d0,
        0x0a9b8,
        0x0a950,
        0x0b4a0,
        0x0b6a6,
        0x0ad50,
        0x055a0,
        0x0aba4,
        0x0a5b0,
        0x052b0, //2070-2079
        0x0b273,
        0x06930,
        0x07337,
        0x06aa0,
        0x0ad50,
        0x14b55,
        0x04b60,
        0x0a570,
        0x054e4,
        0x0d160, //2080-2089
        0x0e968,
        0x0d520,
        0x0daa0,
        0x16aa6,
        0x056d0,
        0x04ae0,
        0x0a9d4,
        0x0a2d0,
        0x0d150,
        0x0f252, //2090-2099
        0x0d520,
    ], //2100

    /**
     * 公曆每個月份的天數普通表
     * @Array Of Property
     * @return Number
     */
    solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],

    /**
     * 天幹地支之天幹速查表
     * @Array Of Property trans["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"]
     * @return Cn string
     */
    Gan: ["\u7532", "\u4e59", "\u4e19", "\u4e01", "\u620a", "\u5df1", "\u5e9a", "\u8f9b", "\u58ec", "\u7678"],

    /**
     * 天幹地支之地支速查表
     * @Array Of Property
     * @trans["子","醜","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
     * @return Cn string
     */
    Zhi: ["\u5b50", "\u4e11", "\u5bc5", "\u536f", "\u8fb0", "\u5df3", "\u5348", "\u672a", "\u7533", "\u9149", "\u620c", "\u4ea5"],

    /**
     * 天幹地支之地支速查表<=>生肖
     * @Array Of Property
     * @trans["鼠","牛","虎","兔","龍","蛇","馬","羊","猴","雞","狗","豬"]
     * @return Cn string
     */
    Animals: ["\u9f20", "\u725b", "\u864e", "\u5154", "\u9f99", "\u86c7", "\u9a6c", "\u7f8a", "\u7334", "\u9e21", "\u72d7", "\u732a"],

    /**
     * 陽曆節日
     */
    festival: {
        "1-1": {title: "元旦節"},
        "2-14": {title: "情人節"},
        "5-1": {title: "勞動節"},
        "5-4": {title: "青年節"},
        "6-1": {title: "兒童節"},
        "9-10": {title: "教師節"},
        "10-1": {title: "國慶節"},
        "12-25": {title: "聖誕節"},

        "3-8": {title: "婦女節"},
        "3-12": {title: "植樹節"},
        "4-1": {title: "愚人節"},
        "5-12": {title: "護士節"},
        "7-1": {title: "建黨節"},
        "8-1": {title: "建軍節"},
        "12-24": {title: "平安夜"},
    },

    /**
     * 農曆節日
     */
    lfestival: {
        "12-30": {title: "除夕"},
        "1-1": {title: "春節"},
        "1-15": {title: "元宵節"},
        "2-2": {title: "龍擡頭"},
        "5-5": {title: "端午節"},
        "7-7": {title: "七夕節"},
        "7-15": {title: "中元節"},
        "8-15": {title: "中秋節"},
        "9-9": {title: "重陽節"},
        "10-1": {title: "寒衣節"},
        "10-15": {title: "下元節"},
        "12-8": {title: "臘八節"},
        "12-23": {title: "北方小年"},
        "12-24": {title: "南方小年"},
    },

    /**
     * 返回默認定義的陽曆節日
     */
    getFestival() {
        return this.festival;
    },

    /**
     * 返回默認定義的內容里節日
     */
    getLunarFestival() {
        return this.lfestival;
    },

    /**
     *
     * @param {Object} 按照festival的格式輸入數據，設置陽曆節日
     */
    setFestival(param = {}) {
        this.festival = param;
    },

    /**
     *
     * @param {Object} 按照lfestival的格式輸入數據，設置農曆節日
     */
    setLunarFestival(param = {}) {
        this.lfestival = param;
    },

    /**
     * 24節氣速查表
     * @Array Of Property
     * @trans["小寒","大寒","立春","雨水","驚蟄","春分","清明","谷雨","立夏","小滿","芒種","夏至","小暑","大暑","立秋","處暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"]
     * @return Cn string
     */
    solarTerm: [
        "\u5c0f\u5bd2",
        "\u5927\u5bd2",
        "\u7acb\u6625",
        "\u96e8\u6c34",
        "\u60ca\u86f0",
        "\u6625\u5206",
        "\u6e05\u660e",
        "\u8c37\u96e8",
        "\u7acb\u590f",
        "\u5c0f\u6ee1",
        "\u8292\u79cd",
        "\u590f\u81f3",
        "\u5c0f\u6691",
        "\u5927\u6691",
        "\u7acb\u79cb",
        "\u5904\u6691",
        "\u767d\u9732",
        "\u79cb\u5206",
        "\u5bd2\u9732",
        "\u971c\u964d",
        "\u7acb\u51ac",
        "\u5c0f\u96ea",
        "\u5927\u96ea",
        "\u51ac\u81f3",
    ],

    /**
     * 1900-2100各年的24節氣日期速查表
     * @Array Of Property
     * @return 0x string For splice
     */
    sTermInfo: [
        "9778397bd097c36b0b6fc9274c91aa",
        "97b6b97bd19801ec9210c965cc920e",
        "97bcf97c3598082c95f8c965cc920f",
        "97bd0b06bdb0722c965ce1cfcc920f",
        "b027097bd097c36b0b6fc9274c91aa",
        "97b6b97bd19801ec9210c965cc920e",
        "97bcf97c359801ec95f8c965cc920f",
        "97bd0b06bdb0722c965ce1cfcc920f",
        "b027097bd097c36b0b6fc9274c91aa",
        "97b6b97bd19801ec9210c965cc920e",
        "97bcf97c359801ec95f8c965cc920f",
        "97bd0b06bdb0722c965ce1cfcc920f",
        "b027097bd097c36b0b6fc9274c91aa",
        "9778397bd19801ec9210c965cc920e",
        "97b6b97bd19801ec95f8c965cc920f",
        "97bd09801d98082c95f8e1cfcc920f",
        "97bd097bd097c36b0b6fc9210c8dc2",
        "9778397bd197c36c9210c9274c91aa",
        "97b6b97bd19801ec95f8c965cc920e",
        "97bd09801d98082c95f8e1cfcc920f",
        "97bd097bd097c36b0b6fc9210c8dc2",
        "9778397bd097c36c9210c9274c91aa",
        "97b6b97bd19801ec95f8c965cc920e",
        "97bcf97c3598082c95f8e1cfcc920f",
        "97bd097bd097c36b0b6fc9210c8dc2",
        "9778397bd097c36c9210c9274c91aa",
        "97b6b97bd19801ec9210c965cc920e",
        "97bcf97c3598082c95f8c965cc920f",
        "97bd097bd097c35b0b6fc920fb0722",
        "9778397bd097c36b0b6fc9274c91aa",
        "97b6b97bd19801ec9210c965cc920e",
        "97bcf97c3598082c95f8c965cc920f",
        "97bd097bd097c35b0b6fc920fb0722",
        "9778397bd097c36b0b6fc9274c91aa",
        "97b6b97bd19801ec9210c965cc920e",
        "97bcf97c359801ec95f8c965cc920f",
        "97bd097bd097c35b0b6fc920fb0722",
        "9778397bd097c36b0b6fc9274c91aa",
        "97b6b97bd19801ec9210c965cc920e",
        "97bcf97c359801ec95f8c965cc920f",
        "97bd097bd097c35b0b6fc920fb0722",
        "9778397bd097c36b0b6fc9274c91aa",
        "97b6b97bd19801ec9210c965cc920e",
        "97bcf97c359801ec95f8c965cc920f",
        "97bd097bd07f595b0b6fc920fb0722",
        "9778397bd097c36b0b6fc9210c8dc2",
        "9778397bd19801ec9210c9274c920e",
        "97b6b97bd19801ec95f8c965cc920f",
        "97bd07f5307f595b0b0bc920fb0722",
        "7f0e397bd097c36b0b6fc9210c8dc2",
        "9778397bd097c36c9210c9274c920e",
        "97b6b97bd19801ec95f8c965cc920f",
        "97bd07f5307f595b0b0bc920fb0722",
        "7f0e397bd097c36b0b6fc9210c8dc2",
        "9778397bd097c36c9210c9274c91aa",
        "97b6b97bd19801ec9210c965cc920e",
        "97bd07f1487f595b0b0bc920fb0722",
        "7f0e397bd097c36b0b6fc9210c8dc2",
        "9778397bd097c36b0b6fc9274c91aa",
        "97b6b97bd19801ec9210c965cc920e",
        "97bcf7f1487f595b0b0bb0b6fb0722",
        "7f0e397bd097c35b0b6fc920fb0722",
        "9778397bd097c36b0b6fc9274c91aa",
        "97b6b97bd19801ec9210c965cc920e",
        "97bcf7f1487f595b0b0bb0b6fb0722",
        "7f0e397bd097c35b0b6fc920fb0722",
        "9778397bd097c36b0b6fc9274c91aa",
        "97b6b97bd19801ec9210c965cc920e",
        "97bcf7f1487f531b0b0bb0b6fb0722",
        "7f0e397bd097c35b0b6fc920fb0722",
        "9778397bd097c36b0b6fc9274c91aa",
        "97b6b97bd19801ec9210c965cc920e",
        "97bcf7f1487f531b0b0bb0b6fb0722",
        "7f0e397bd07f595b0b6fc920fb0722",
        "9778397bd097c36b0b6fc9274c91aa",
        "97b6b97bd19801ec9210c9274c920e",
        "97bcf7f0e47f531b0b0bb0b6fb0722",
        "7f0e397bd07f595b0b0bc920fb0722",
        "9778397bd097c36b0b6fc9210c91aa",
        "97b6b97bd197c36c9210c9274c920e",
        "97bcf7f0e47f531b0b0bb0b6fb0722",
        "7f0e397bd07f595b0b0bc920fb0722",
        "9778397bd097c36b0b6fc9210c8dc2",
        "9778397bd097c36c9210c9274c920e",
        "97b6b7f0e47f531b0723b0b6fb0722",
        "7f0e37f5307f595b0b0bc920fb0722",
        "7f0e397bd097c36b0b6fc9210c8dc2",
        "9778397bd097c36b0b70c9274c91aa",
        "97b6b7f0e47f531b0723b0b6fb0721",
        "7f0e37f1487f595b0b0bb0b6fb0722",
        "7f0e397bd097c35b0b6fc9210c8dc2",
        "9778397bd097c36b0b6fc9274c91aa",
        "97b6b7f0e47f531b0723b0b6fb0721",
        "7f0e27f1487f595b0b0bb0b6fb0722",
        "7f0e397bd097c35b0b6fc920fb0722",
        "9778397bd097c36b0b6fc9274c91aa",
        "97b6b7f0e47f531b0723b0b6fb0721",
        "7f0e27f1487f531b0b0bb0b6fb0722",
        "7f0e397bd097c35b0b6fc920fb0722",
        "9778397bd097c36b0b6fc9274c91aa",
        "97b6b7f0e47f531b0723b0b6fb0721",
        "7f0e27f1487f531b0b0bb0b6fb0722",
        "7f0e397bd097c35b0b6fc920fb0722",
        "9778397bd097c36b0b6fc9274c91aa",
        "97b6b7f0e47f531b0723b0b6fb0721",
        "7f0e27f1487f531b0b0bb0b6fb0722",
        "7f0e397bd07f595b0b0bc920fb0722",
        "9778397bd097c36b0b6fc9274c91aa",
        "97b6b7f0e47f531b0723b0787b0721",
        "7f0e27f0e47f531b0b0bb0b6fb0722",
        "7f0e397bd07f595b0b0bc920fb0722",
        "9778397bd097c36b0b6fc9210c91aa",
        "97b6b7f0e47f149b0723b0787b0721",
        "7f0e27f0e47f531b0723b0b6fb0722",
        "7f0e397bd07f595b0b0bc920fb0722",
        "9778397bd097c36b0b6fc9210c8dc2",
        "977837f0e37f149b0723b0787b0721",
        "7f07e7f0e47f531b0723b0b6fb0722",
        "7f0e37f5307f595b0b0bc920fb0722",
        "7f0e397bd097c35b0b6fc9210c8dc2",
        "977837f0e37f14998082b0787b0721",
        "7f07e7f0e47f531b0723b0b6fb0721",
        "7f0e37f1487f595b0b0bb0b6fb0722",
        "7f0e397bd097c35b0b6fc9210c8dc2",
        "977837f0e37f14998082b0787b06bd",
        "7f07e7f0e47f531b0723b0b6fb0721",
        "7f0e27f1487f531b0b0bb0b6fb0722",
        "7f0e397bd097c35b0b6fc920fb0722",
        "977837f0e37f14998082b0787b06bd",
        "7f07e7f0e47f531b0723b0b6fb0721",
        "7f0e27f1487f531b0b0bb0b6fb0722",
        "7f0e397bd097c35b0b6fc920fb0722",
        "977837f0e37f14998082b0787b06bd",
        "7f07e7f0e47f531b0723b0b6fb0721",
        "7f0e27f1487f531b0b0bb0b6fb0722",
        "7f0e397bd07f595b0b0bc920fb0722",
        "977837f0e37f14998082b0787b06bd",
        "7f07e7f0e47f531b0723b0b6fb0721",
        "7f0e27f1487f531b0b0bb0b6fb0722",
        "7f0e397bd07f595b0b0bc920fb0722",
        "977837f0e37f14998082b0787b06bd",
        "7f07e7f0e47f149b0723b0787b0721",
        "7f0e27f0e47f531b0b0bb0b6fb0722",
        "7f0e397bd07f595b0b0bc920fb0722",
        "977837f0e37f14998082b0723b06bd",
        "7f07e7f0e37f149b0723b0787b0721",
        "7f0e27f0e47f531b0723b0b6fb0722",
        "7f0e397bd07f595b0b0bc920fb0722",
        "977837f0e37f14898082b0723b02d5",
        "7ec967f0e37f14998082b0787b0721",
        "7f07e7f0e47f531b0723b0b6fb0722",
        "7f0e37f1487f595b0b0bb0b6fb0722",
        "7f0e37f0e37f14898082b0723b02d5",
        "7ec967f0e37f14998082b0787b0721",
        "7f07e7f0e47f531b0723b0b6fb0722",
        "7f0e37f1487f531b0b0bb0b6fb0722",
        "7f0e37f0e37f14898082b0723b02d5",
        "7ec967f0e37f14998082b0787b06bd",
        "7f07e7f0e47f531b0723b0b6fb0721",
        "7f0e37f1487f531b0b0bb0b6fb0722",
        "7f0e37f0e37f14898082b072297c35",
        "7ec967f0e37f14998082b0787b06bd",
        "7f07e7f0e47f531b0723b0b6fb0721",
        "7f0e27f1487f531b0b0bb0b6fb0722",
        "7f0e37f0e37f14898082b072297c35",
        "7ec967f0e37f14998082b0787b06bd",
        "7f07e7f0e47f531b0723b0b6fb0721",
        "7f0e27f1487f531b0b0bb0b6fb0722",
        "7f0e37f0e366aa89801eb072297c35",
        "7ec967f0e37f14998082b0787b06bd",
        "7f07e7f0e47f149b0723b0787b0721",
        "7f0e27f1487f531b0b0bb0b6fb0722",
        "7f0e37f0e366aa89801eb072297c35",
        "7ec967f0e37f14998082b0723b06bd",
        "7f07e7f0e47f149b0723b0787b0721",
        "7f0e27f0e47f531b0723b0b6fb0722",
        "7f0e37f0e366aa89801eb072297c35",
        "7ec967f0e37f14998082b0723b06bd",
        "7f07e7f0e37f14998083b0787b0721",
        "7f0e27f0e47f531b0723b0b6fb0722",
        "7f0e37f0e366aa89801eb072297c35",
        "7ec967f0e37f14898082b0723b02d5",
        "7f07e7f0e37f14998082b0787b0721",
        "7f07e7f0e47f531b0723b0b6fb0722",
        "7f0e36665b66aa89801e9808297c35",
        "665f67f0e37f14898082b0723b02d5",
        "7ec967f0e37f14998082b0787b0721",
        "7f07e7f0e47f531b0723b0b6fb0722",
        "7f0e36665b66a449801e9808297c35",
        "665f67f0e37f14898082b0723b02d5",
        "7ec967f0e37f14998082b0787b06bd",
        "7f07e7f0e47f531b0723b0b6fb0721",
        "7f0e36665b66a449801e9808297c35",
        "665f67f0e37f14898082b072297c35",
        "7ec967f0e37f14998082b0787b06bd",
        "7f07e7f0e47f531b0723b0b6fb0721",
        "7f0e26665b66a449801e9808297c35",
        "665f67f0e37f1489801eb072297c35",
        "7ec967f0e37f14998082b0787b06bd",
        "7f07e7f0e47f531b0723b0b6fb0721",
        "7f0e27f1487f531b0b0bb0b6fb0722",
    ],

    /**
     * 數字轉中文速查表
     * @Array Of Property
     * @trans ['日','一','二','三','四','五','六','七','八','九','十']
     * @return Cn string
     */
    nStr1: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d", "\u4e03", "\u516b", "\u4e5d", "\u5341"],

    /**
     * 日期轉農曆稱呼速查表
     * @Array Of Property
     * @trans ['初','十','廿','卅']
     * @return Cn string
     */
    nStr2: ["\u521d", "\u5341", "\u5eff", "\u5345"],

    /**
     * 月份轉農曆稱呼速查表
     * @Array Of Property
     * @trans ['正','一','二','三','四','五','六','七','八','九','十','冬','臘']
     * @return Cn string
     */
    nStr3: ["\u6b63", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d", "\u4e03", "\u516b", "\u4e5d", "\u5341", "\u51ac", "\u814a"],

    /**
     * 返回農曆y年一整年的總天數
     * @param lunar Year
     * @return Number
     * @eg:var count = calendar.lYearDays(1987) ;//count=387
     */
    lYearDays: function (y) {
        var i,
            sum = 348;
        for (i = 0x8000; i > 0x8; i >>= 1) {
            sum += this.lunarInfo[y - 1900] & i ? 1 : 0;
        }
        return sum + this.leapDays(y);
    },

    /**
     * 返回農曆y年閏月是哪個月；若y年沒有閏月 則返回0
     * @param lunar Year
     * @return Number (0-12)
     * @eg:var leapMonth = calendar.leapMonth(1987) ;//leapMonth=6
     */
    leapMonth: function (y) {
        //閏字編碼 \u95f0
        return this.lunarInfo[y - 1900] & 0xf;
    },

    /**
     * 返回農曆y年閏月的天數 若該年沒有閏月則返回0
     * @param lunar Year
     * @return Number (0、29、30)
     * @eg:var leapMonthDay = calendar.leapDays(1987) ;//leapMonthDay=29
     */
    leapDays: function (y) {
        if (this.leapMonth(y)) {
            return this.lunarInfo[y - 1900] & 0x10000 ? 30 : 29;
        }
        return 0;
    },

    /**
     * 返回農曆y年m月（非閏月）的總天數，計算m為閏月時的天數請使用leapDays方法
     * @param lunar Year
     * @return Number (-1、29、30)
     * @eg:var MonthDay = calendar.monthDays(1987,9) ;//MonthDay=29
     */
    monthDays: function (y, m) {
        if (m > 12 || m < 1) {
            return -1;
        } //月份參數從1至12，參數錯誤返回-1
        return this.lunarInfo[y - 1900] & (0x10000 >> m) ? 30 : 29;
    },

    /**
     * 返回公曆(!)y年m月的天數
     * @param solar Year
     * @return Number (-1、28、29、30、31)
     * @eg:var solarMonthDay = calendar.leapDays(1987) ;//solarMonthDay=30
     */
    solarDays: function (y, m) {
        if (m > 12 || m < 1) {
            return -1;
        } //若參數錯誤 返回-1
        var ms = m - 1;
        if (ms == 1) {
            //2月份的閏平規律測算後確認返回28或29
            return (y % 4 == 0 && y % 100 != 0) || y % 400 == 0 ? 29 : 28;
        } else {
            return this.solarMonth[ms];
        }
    },

    /**
     * 農曆年份轉換為幹支紀年
     * @param  lYear 農曆年的年份數
     * @return Cn string
     */
    toGanZhiYear: function (lYear) {
        var ganKey = (lYear - 3) % 10;
        var zhiKey = (lYear - 3) % 12;
        if (ganKey == 0) ganKey = 10; //如果余數為0則為最後一個天幹
        if (zhiKey == 0) zhiKey = 12; //如果余數為0則為最後一個地支
        return this.Gan[ganKey - 1] + this.Zhi[zhiKey - 1];
    },

    /**
     * 公曆月、日判斷所屬星座
     * @param  cMonth [description]
     * @param  cDay [description]
     * @return Cn string
     */
    toAstro: function (cMonth, cDay) {
        var s = "\u9b54\u7faf\u6c34\u74f6\u53cc\u9c7c\u767d\u7f8a\u91d1\u725b\u53cc\u5b50\u5de8\u87f9\u72ee\u5b50\u5904\u5973\u5929\u79e4\u5929\u874e\u5c04\u624b\u9b54\u7faf";
        var arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
        return s.substr(cMonth * 2 - (cDay < arr[cMonth - 1] ? 2 : 0), 2) + "\u5ea7"; //座
    },

    /**
     * 傳入offset偏移量返回幹支
     * @param offset 相對甲子的偏移量
     * @return Cn string
     */
    toGanZhi: function (offset) {
        return this.Gan[offset % 10] + this.Zhi[offset % 12];
    },

    /**
     * 傳入公曆(!)y年獲得該年第n個節氣的公曆日期
     * @param y公曆年(1900-2100)；n二十四節氣中的第幾個節氣(1~24)；從n=1(小寒)算起
     * @return day Number
     * @eg:var _24 = calendar.getTerm(1987,3) ;//_24=4;意即1987年2月4日立春
     */
    getTerm: function (y, n) {
        if (y < 1900 || y > 2100) {
            return -1;
        }
        if (n < 1 || n > 24) {
            return -1;
        }
        var _table = this.sTermInfo[y - 1900];
        var _info = [
            parseInt("0x" + _table.substr(0, 5)).toString(),
            parseInt("0x" + _table.substr(5, 5)).toString(),
            parseInt("0x" + _table.substr(10, 5)).toString(),
            parseInt("0x" + _table.substr(15, 5)).toString(),
            parseInt("0x" + _table.substr(20, 5)).toString(),
            parseInt("0x" + _table.substr(25, 5)).toString(),
        ];
        var _calday = [
            _info[0].substr(0, 1),
            _info[0].substr(1, 2),
            _info[0].substr(3, 1),
            _info[0].substr(4, 2),

            _info[1].substr(0, 1),
            _info[1].substr(1, 2),
            _info[1].substr(3, 1),
            _info[1].substr(4, 2),

            _info[2].substr(0, 1),
            _info[2].substr(1, 2),
            _info[2].substr(3, 1),
            _info[2].substr(4, 2),

            _info[3].substr(0, 1),
            _info[3].substr(1, 2),
            _info[3].substr(3, 1),
            _info[3].substr(4, 2),

            _info[4].substr(0, 1),
            _info[4].substr(1, 2),
            _info[4].substr(3, 1),
            _info[4].substr(4, 2),

            _info[5].substr(0, 1),
            _info[5].substr(1, 2),
            _info[5].substr(3, 1),
            _info[5].substr(4, 2),
        ];
        return parseInt(_calday[n - 1]);
    },

    /**
     * 傳入農曆數字月份返回漢語通俗表示法
     * @param lunar month
     * @return Cn string
     * @eg:var cnMonth = calendar.toChinaMonth(12) ;//cnMonth='臘月'
     */
    toChinaMonth: function (m) {
        // 月 => \u6708
        if (m > 12 || m < 1) {
            return -1;
        } //若參數錯誤 返回-1
        var s = this.nStr3[m - 1];
        s += "\u6708"; //加上月字
        return s;
    },

    /**
     * 傳入農曆日期數字返回漢字表示法
     * @param lunar day
     * @return Cn string
     * @eg:var cnDay = calendar.toChinaDay(21) ;//cnMonth='廿一'
     */
    toChinaDay: function (d) {
        //日 => \u65e5
        var s;
        switch (d) {
            case 10:
                s = "\u521d\u5341";
                break;
            case 20:
                s = "\u4e8c\u5341";
                break;
                break;
            case 30:
                s = "\u4e09\u5341";
                break;
                break;
            default:
                s = this.nStr2[Math.floor(d / 10)];
                s += this.nStr1[d % 10];
        }
        return s;
    },

    /**
     * 年份轉生肖[!僅能大致轉換] => 精確劃分生肖分界線是“立春”
     * @param y year
     * @return Cn string
     * @eg:var animal = calendar.getAnimal(1987) ;//animal='兔'
     */
    getAnimal: function (y) {
        return this.Animals[(y - 4) % 12];
    },

    /**
     * 傳入陽曆年月日獲得詳細的公曆、農曆object信息 <=>JSON
     * @param y  solar year
     * @param m  solar month
     * @param d  solar day
     * @return JSON object
     * @eg:console.log(calendar.solar2lunar(1987,11,01));
     */
    solar2lunar: function (y, m, d) {
        //參數區間1900.1.31~2100.12.31
        y = parseInt(y);
        m = parseInt(m);
        d = parseInt(d);
        //年份限定、上限
        if (y < 1900 || y > 2100) {
            return -1; // undefined轉換為數字變為NaN
        }
        //公曆傳參最下限
        if (y == 1900 && m == 1 && d < 31) {
            return -1;
        }
        //未傳參  獲得當天
        if (!y) {
            var objDate = new Date();
        } else {
            var objDate = new Date(y, parseInt(m) - 1, d);
        }
        var i,
            leap = 0,
            temp = 0;
        //修正ymd參數
        var y = objDate.getFullYear(),
            m = objDate.getMonth() + 1,
            d = objDate.getDate();
        var offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 86400000;
        for (i = 1900; i < 2101 && offset > 0; i++) {
            temp = this.lYearDays(i);
            offset -= temp;
        }
        if (offset < 0) {
            offset += temp;
            i--;
        }

        //是否今天
        var isTodayObj = new Date(),
            isToday = false;
        if (isTodayObj.getFullYear() == y && isTodayObj.getMonth() + 1 == m && isTodayObj.getDate() == d) {
            isToday = true;
        }
        //星期幾
        var nWeek = objDate.getDay(),
            cWeek = this.nStr1[nWeek];
        //數字表示周幾順應天朝周一開始的慣例
        if (nWeek == 0) {
            nWeek = 7;
        }
        //農曆年
        var year = i;
        var leap = this.leapMonth(i); //閏哪個月
        var isLeap = false;

        //效驗閏月
        for (i = 1; i < 13 && offset > 0; i++) {
            //閏月
            if (leap > 0 && i == leap + 1 && isLeap == false) {
                --i;
                isLeap = true;
                temp = this.leapDays(year); //計算農曆閏月天數
            } else {
                temp = this.monthDays(year, i); //計算農曆普通月天數
            }
            //解除閏月
            if (isLeap == true && i == leap + 1) {
                isLeap = false;
            }
            offset -= temp;
        }
        // 閏月導致數組下標重疊取反
        if (offset == 0 && leap > 0 && i == leap + 1) {
            if (isLeap) {
                isLeap = false;
            } else {
                isLeap = true;
                --i;
            }
        }
        if (offset < 0) {
            offset += temp;
            --i;
        }
        //農曆月
        var month = i;
        //農曆日
        var day = offset + 1;
        //天幹地支處理
        var sm = m - 1;
        var gzY = this.toGanZhiYear(year);

        // 當月的兩個節氣
        // bugfix-2017-7-24 11:03:38 use lunar Year Param `y` Not `year`
        var firstNode = this.getTerm(y, m * 2 - 1); //返回當月「節」為幾日開始
        var secondNode = this.getTerm(y, m * 2); //返回當月「節」為幾日開始

        // 依據12節氣修正幹支月
        var gzM = this.toGanZhi((y - 1900) * 12 + m + 11);
        if (d >= firstNode) {
            gzM = this.toGanZhi((y - 1900) * 12 + m + 12);
        }

        //傳入的日期的節氣與否
        var isTerm = false;
        var Term = null;
        if (firstNode == d) {
            isTerm = true;
            Term = this.solarTerm[m * 2 - 2];
        }
        if (secondNode == d) {
            isTerm = true;
            Term = this.solarTerm[m * 2 - 1];
        }
        //日柱 當月一日與 1900/1/1 相差天數
        var dayCyclical = Date.UTC(y, sm, 1, 0, 0, 0, 0) / 86400000 + 25567 + 10;
        var gzD = this.toGanZhi(dayCyclical + d - 1);
        //該日期所屬的星座
        var astro = this.toAstro(m, d);

        var solarDate = y + "-" + m + "-" + d;
        var lunarDate = year + "-" + month + "-" + day;

        var festival = this.festival;
        var lfestival = this.lfestival;

        var festivalDate = m + "-" + d;
        var lunarFestivalDate = month + "-" + day;

        return {
            date: solarDate,
            lunarDate: lunarDate,
            festival: festival[festivalDate] ? festival[festivalDate].title : null,
            lunarFestival: lfestival[lunarFestivalDate] ? lfestival[lunarFestivalDate].title : null,
            lYear: year,
            lMonth: month,
            lDay: day,
            Animal: this.getAnimal(year),
            IMonthCn: (isLeap ? "\u95f0" : "") + this.toChinaMonth(month),
            IDayCn: this.toChinaDay(day),
            cYear: y,
            cMonth: m,
            cDay: d,
            gzYear: gzY,
            gzMonth: gzM,
            gzDay: gzD,
            isToday: isToday,
            isLeap: isLeap,
            nWeek: nWeek,
            ncWeek: "\u661f\u671f" + cWeek,
            isTerm: isTerm,
            Term: Term,
            astro: astro,
        };
    },

    /**
     * 傳入農曆年月日以及傳入的月份是否閏月獲得詳細的公曆、農曆object信息 <=>JSON
     * @param y  lunar year
     * @param m  lunar month
     * @param d  lunar day
     * @param isLeapMonth  lunar month is leap or not.[如果是農曆閏月第四個參數賦值true即可]
     * @return JSON object
     * @eg:console.log(calendar.lunar2solar(1987,9,10));
     */
    lunar2solar: function (y, m, d, isLeapMonth) {
        //參數區間1900.1.31~2100.12.1
        y = parseInt(y);
        m = parseInt(m);
        d = parseInt(d);
        var isLeapMonth = !!isLeapMonth;
        var leapOffset = 0;
        var leapMonth = this.leapMonth(y);
        var leapDay = this.leapDays(y);
        if (isLeapMonth && leapMonth != m) {
            return -1;
        } //傳參要求計算該閏月公曆 但該年得出的閏月與傳參的月份並不同
        if ((y == 2100 && m == 12 && d > 1) || (y == 1900 && m == 1 && d < 31)) {
            return -1;
        } //超出了最大極限值
        var day = this.monthDays(y, m);
        var _day = day;
        //bugFix 2016-9-25
        //if month is leap, _day use leapDays method
        if (isLeapMonth) {
            _day = this.leapDays(y, m);
        }
        if (y < 1900 || y > 2100 || d > _day) {
            return -1;
        } //參數合法性效驗

        //計算農曆的時間差
        var offset = 0;
        for (var i = 1900; i < y; i++) {
            offset += this.lYearDays(i);
        }
        var leap = 0,
            isAdd = false;
        for (var i = 1; i < m; i++) {
            leap = this.leapMonth(y);
            if (!isAdd) {
                //處理閏月
                if (leap <= i && leap > 0) {
                    offset += this.leapDays(y);
                    isAdd = true;
                }
            }
            offset += this.monthDays(y, i);
        }
        //轉換閏月農曆 需補充該年閏月的前一個月的時差
        if (isLeapMonth) {
            offset += day;
        }
        //1900年農曆正月一日的公曆時間為1900年1月30日0時0分0秒(該時間也是本農曆的最開始起始點)
        var stmap = Date.UTC(1900, 1, 30, 0, 0, 0);
        var calObj = new Date((offset + d - 31) * 86400000 + stmap);
        var cY = calObj.getUTCFullYear();
        var cM = calObj.getUTCMonth() + 1;
        var cD = calObj.getUTCDate();

        return this.solar2lunar(cY, cM, cD);
    },
};
