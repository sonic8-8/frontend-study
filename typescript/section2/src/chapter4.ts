// 타입 별칭
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
};

let user: User = {
    id: 1,
    name: "이승환",
    nickname: "god",
    birth: "1000.08.07",
    bio: "안녕하세요",
    location: "한국어딘가",
};

// 인덱스 시그니처
type CountryCodes = {
    [key: string]: string;
}

let countryCodes: CountryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
}

type CountryNumberCodes = {
    [key:string]: number;
    Korea: number; // Korea라는 프로퍼티는 반드시 있어야 할 경우
}

let countryNumberCodes: CountryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 826,
}