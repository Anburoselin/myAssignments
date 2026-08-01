// Convert a score to a letter grade.
function gradeFromScore(score) {
  // Store the score for range checks.
  const s = score;

  // Check grade ranges from highest to lowest.
  switch (true) {
    case (s >= 90):
      return 'A';
    case (s >= 80):
      return 'B';
    case (s >= 70):
      return 'C';
    case (s >= 60):
      return 'D';
    default:
      return 'F';
  }
}

// Examples
console.log('95 →', gradeFromScore(95)); // A
console.log('82 →', gradeFromScore(82)); // B
console.log('76 →', gradeFromScore(76)); // C
console.log('61 →', gradeFromScore(61)); // D
console.log('55 →', gradeFromScore(55)); // F
console.log('10 →', gradeFromScore(0));   // F