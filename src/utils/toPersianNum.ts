export default function toPersianNumber(englishNum: string): string {
    switch (englishNum) {
        case "0":
            return "۰";
        case "1":
            return "۱";
        case "2":
            return "۲";
        case "3":
            return "۳";
        case "4":
            return "۴";
        case "5":
            return "۵";
        case "6":
            return "۶";
        case "7":
            return "۷";
        case "8":
            return "۸";
        case "9":
            return "۹";
        default:
            // For handling multi-digit numbers
            return englishNum.split('').map(digit => toPersianNumber(digit)).join('');
    }
}