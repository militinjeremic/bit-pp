var day = 8;
var result;

switch (day) {
    case 1:
        result = "Winter";
        break;
    case 2:
        result = "Winter";
        break;
    case 3:
        result = "Winter-Spring";
        break;
    case 4:
        result = "Spring";
        break;
    case 5:
        result = "Spring";
        break;
    case 6:
        result = "Spring-Summer";
        break;
    case 7:
        result = "Summer";
        break;
        case 8:
        result = "Summer";
        break;
    case 9:
        result = "Summer-Autumn";
        break;
    case 10:
        result = "Autumn";
        break;
    case 11:
        result = "Autumn";
        break;
    case 12:
        result = "Autumn-Winter";
    default:
        result = "Input must be a number between 1 and 12";
        break;
}
console.log(result)