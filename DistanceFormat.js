/*输出距离 1000=1.0km*/
convertDistanceStr = function (distance) {
    if (!distance) {
        return "";
    } else if (distance < 1000) {
        return distance + "m"
    } else if (distance >= 1000 && distance < 100000) {
        return (distance / 1000.0).toFixed(1) + "km"
    } else if (distance > 100000) {
        return (distance / 1000.0).toFixed(0) + "km"
    } else {
        return "";
    }
};