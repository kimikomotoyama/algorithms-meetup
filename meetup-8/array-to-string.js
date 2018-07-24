let arrays = [[2, "hello", true, false, 10], ["hello", "world"]]

function arrayToString(array) {
    return array.join(" ");
}

arrays.forEach(eachArray => {
    let result = arrayToString(eachArray);
    console.log(result);
});

arrayToString(arrays);