// 1. Import course data
import { courseData } from './courses.js';

// 2. Utility Functions


const timeBounds = {
  "Marathon": { min: 2 * 3600, max: 6 * 3600 }, // 2:00:00 – 6:00:0
  "10K": { min: 26 * 60, max: 59 * 60 },
  "5K": { min: 12 * 60, max: 30 * 60 }
};


// Time parser
function parseTimeInput(input) {
  const parts = input.trim().split(':').map(Number);
  if (parts.some(isNaN)) throw new Error("Invalid time format");

  if (parts.length === 3) {
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  } else if (parts.length === 2) {
    if (parts[1] >= 60) throw new Error("Seconds can't be >= 60");
    return parts[0] * 60 + parts[1];
  } else if (parts.length === 1 && !isNaN(parts[0])) {
    return parts[0];
  } else {
    throw new Error("Unsupported time format");
  }
}

// Time formatter
function formatTime(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${hours > 0 ? hours + ':' : ''}${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// 3. Populate Course Dropdown Based on Distance
function populateCourses(distance) {
  const courseSelect = document.getElementById("course");
  courseSelect.innerHTML = ""; // Clear old options

  const courses = courseData[distance] || [];

  courses.forEach((course, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = course.name;
    courseSelect.appendChild(option);
  });
}

// 4. Adjust time parser 

function adjustTime() {
  try {
    const distance = document.getElementById("distance").value;
    const courseIndex = document.getElementById("course").value;
    const inputTime = document.getElementById("time").value;

    const totalSeconds = parseTimeInput(inputTime);

    // ⛔ Validate time range for selected distance
    const bounds = timeBounds[distance];
    if (bounds) {
      if (totalSeconds < bounds.min || totalSeconds > bounds.max) {
        throw new Error(`Time for ${distance} must be between ${formatTime(bounds.min)} and ${formatTime(bounds.max)}`);
      }
    }

    const course = courseData[distance][courseIndex];
    const adjustedSeconds = totalSeconds + course.adjustment;

    document.getElementById("adjusted-time").innerText =
      `The time you actually ran at ${course.name}: ${formatTime(adjustedSeconds)}`;
  } catch (e) {
    alert(e.message);
  }
}


// 5. Set Up Event Listeners (AFTER DOM loads)
export function setupCourseAdjuster() {
  const defaultDistance = document.getElementById("distance").value;
  populateCourses(defaultDistance);

  document.getElementById("distance").addEventListener("change", function () {
    populateCourses(this.value);
  });

  document.getElementById("race-form").addEventListener("submit", function (event) {
    event.preventDefault();
    adjustTime();
  });
}
