// Function to merge overlapping intervals
function mergeIntervals() {
  const intervalsInput = document.getElementById("intervalsInput").value.trim();
  const intervals = JSON.parse("[" + intervalsInput + "]");

  const merged = merge(intervals);

  const mergedIntervalsDiv = document.getElementById("mergedIntervals");
  mergedIntervalsDiv.textContent =
    "Merged Intervals: " + JSON.stringify(merged);
}

// Function to merge overlapping intervals
function merge(intervals) {
  if (intervals.length <= 1) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    const lastMergedInterval = merged[merged.length - 1];

    if (currentInterval[0] <= lastMergedInterval[1]) {
      lastMergedInterval[1] = Math.max(
        lastMergedInterval[1],
        currentInterval[1]
      );
    } else {
      merged.push(currentInterval);
    }
  }

  return merged;
}

// Function to clear input fields
function clearInputFields() {
  document.getElementById('intervalsInput').value = '';
}

// Function to handle Enter key press
function handleKeyPress(event) {
  if (event.key === "Enter") {
    mergeIntervals();
  }
}

// Add event listener for window.onload event to clear input fields
window.onload = clearInputFields;

// Add event listener for "keypress" event to input field
document.getElementById("intervalsInput").addEventListener("keypress", handleKeyPress);

// Add event listener for "Merge Intervals" button click
document.getElementById("mergeButton").addEventListener("click", mergeIntervals);
