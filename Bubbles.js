var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
var tests = scores.length;
// var i = 0;
// while (i < tests) {
//     console.log("Bubble solution #" + i + " score: " + scores[i]);
//     i += 1;
// }
var highScore = 0;
var best = [];
for (i = 0; i < tests; i++) {
    console.log("Bubble solution #" + i + " score: " + scores[i]);
    if (highScore < scores[i]) {
        highScore = scores[i];
    }
}
for (i = 0; i < tests; i++) {
    if (scores[i] == highScore) {
        best.push(i);
    }
}
console.log("Bubble tests: " + tests)
console.log("Highest bubble score: " + highScore);
console.log("Solutions with the highest score: " + best);