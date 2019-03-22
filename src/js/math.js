//Check whether is a number or not
const isNum = (args) => {
  args = args.toString();
  if (args.length == 0) return false;
  for (var i = 0; i < args.length; i++) {
    if ((args.substring(i, i + 1) < "0" || args.substring(i, i + 1) > "9") && args.substring(i, i + 1) != "." && args.substring(i, i + 1) != "-") {
      return false;
    }
  }
  return true;
}
//calculate the mean of a number array
const mean = (arr) => {
  var len = 0;
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "") {} else if (!isNum(arr[i])) {
      alert(arr[i] + " is not number!");
      return;
    } else {
      len = len + 1;
      sum = sum + parseFloat(arr[i]);
    }
  }
  return sum / len;
}

const variance = (arr) => {
  let len = 0
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '') {} else if (!isNum(arr[i])) {
      alert(arr[i] + ' is not number, letiance Calculation failed!')
      return 0
    } else {
      len = len + 1
      sum = sum + parseFloat(arr[i])
    }
  }
  let v = 0
  if (len > 1) {
    let mean = sum / len
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == '') {} else {
        v = v + (arr[i] - mean) * (arr[i] - mean)
      }
    }
    return v / len
  } else {
    return 0
  }
}

export {variance}