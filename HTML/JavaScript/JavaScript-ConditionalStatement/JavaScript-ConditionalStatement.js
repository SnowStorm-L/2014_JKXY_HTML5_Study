/**
 * Created by L on 2017/3/24.
 */

var i = 10;

if (i>10) {
    document.write("i是大于10的");
}else if (i<10) {
    document.write("i小于10");
}else{
    document.write("i等于10");
}

switch (i) {
    case 1:
        document.write("i等于1");
        break;
    case 2:
        document.write("i等于2");
        break;
    case 10:
        document.write("i等于10");
        break;
    case 11:
        document.write("i等于11");
        break;
    default:
        break;
}



