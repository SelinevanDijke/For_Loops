function assignGrade(score) {
  if (score > 90) {
    return "A";
  } else if (score > 80) {
    return "B";
  } else if (score > 70) {
    return "C";
  } else if (score > 65) {
    return "D";
  } else {
    return "E";
  }
}

// let score = 60;
for (let score = 60; score <= 65; score++) {
    assignGrade();
    console.log("For scoring " + score + " points, you get an E");
}

for (let score = 65; score <= 70; score++) {
    assignGrade();
    console.log("For scoring " + score + " points, you get an D");
}

for (let score = 70; score <= 80; score++) {
    assignGrade();
    console.log("For scoring " + score + " points, you get an C");
}

for (let score = 80; score <= 90; score++) {
    assignGrade();
    console.log("For scoring " + score + " points, you get an B");
}


for (let score = 90; score <= 100; score++) {
    assignGrade();
    console.log("For scoring " + score + " points, you get an A");
}



