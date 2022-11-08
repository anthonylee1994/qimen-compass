export type 天干 = "甲" | "乙" | "丙" | "丁" | "戊" | "己" | "庚" | "辛" | "壬" | "癸";
export type 地支 = "子" | "丑" | "寅" | "卯" | "辰" | "巳" | "午" | "未" | "申" | "酉" | "戌" | "亥";

export type 星 = "蓬" | "任" | "沖" | "輔" | "英" | "禽" | "柱" | "心";
export type 門 = "休" | "生" | "傷" | "杜" | "景" | "死" | "驚" | "開";
export type 神 = "符" | "蛇" | "陰" | "合" | "虎" | "玄" | "地" | "天";
export type 八卦 = "乾" | "坎" | "艮" | "震" | "巽" | "離" | "坤" | "兌";

export type 驛馬 = "寅" | "申" | "巳" | "亥";
export type 十二長生 = "長生" | "沐浴" | "冠帶" | "臨官" | "帝旺" | "衰" | "病" | "死" | "墓" | "絕" | "胎" | "養";

export interface QimenResult {
    干支: string;
    旨首: 天干;
    旬空: 旬空;
    局日: `${天干}${天干}`;
    排局: string;
    節氣: string;
    值符值使: 值符值使;
    天乙: 星;
    天盤: Record<八卦, 天干>[];
    地盤: Record<八卦 | "中", 天干>;
    門: Record<八卦, 門>;
    星: Record<八卦, 星>;
    神: Record<八卦, 神>;
    馬星: 馬星;
}

export interface 旬空 {
    日空: `${地支}${地支}`;
    時空: `${地支}${地支}`;
}

export interface 值符值使 {
    值符星宮: [星, 八卦];
    值使門宮: [門, 八卦];
}

export interface 馬星 {
    天馬: 地支;
    丁馬: 地支;
    驛馬: 地支;
}

export interface 長生運 {
    天盤: 長生運組;
    地盤: 長生運組;
}

export type 長生運組 = Record<八卦 | "中", Record<天干, Record<地支, 十二長生>>>;
