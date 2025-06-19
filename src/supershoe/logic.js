// Function
export function setupShoeAdjuster() {
  document.getElementById("shoe-form").addEventListener("submit", function (event) {
    event.preventDefault();
    adjustShoeTime();
  });
}

// Time parser
function parseTimeInput(input) {
  const trimmed = input.trim();
  const parts = trimmed.split(":").map(Number);

  if (parts.some(isNaN)) throw new Error("Invalid time format");

  const distance = document.getElementById("shoe-distance").value;

  if (parts.length === 3) {
    const [first, second, third] = parts;

    if (distance === "Marathon" || distance === "Half Marathon") {
      if (second >= 60 || third >= 60) {
        throw new Error("Minutes and seconds must be < 60");
      }
      return first * 3600 + second * 60 + third;
    } else {
      if (second >= 60 || third >= 100) {
        throw new Error("Seconds must be < 60, hundredths < 100");
      }
      return first * 60 + second + third / 100;
    }
  }

  if (parts.length === 2) {
    const [first, second] = parts;

    if (distance === "Marathon" || distance === "Half Marathon") {
      if (second >= 60) throw new Error("Minutes must be < 60");
      return first * 3600 + second * 60;
    } else {
      if (second >= 60) throw new Error("Seconds must be < 60");
      return first * 60 + second;
    }
  }

  throw new Error("Unsupported time format. Use mm:ss, mm:ss:ff, or hh:mm:ss");
}


// Time formatter
function formatTime(totalSeconds) {
  const whole = Math.floor(totalSeconds);
  const fraction = Math.round((totalSeconds - whole) * 100); // hundredths

  const hours = Math.floor(whole / 3600);
  const minutes = Math.floor((whole % 3600) / 60);
  const seconds = whole % 60;

  // Short race format: mm:ss:ff
  if (hours === 0 && fraction > 0) {
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${fraction.toString().padStart(2, '0')}`;
  }

  // Standard format: hh:mm:ss
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Adjust shoe time
function adjustShoeTime() {
  try {
    const timeInput = document.getElementById("shoe-time").value;
    const distance = document.getElementById("shoe-distance").value;
    const year = parseInt(document.getElementById("year").value);

    const totalSeconds = parseTimeInput(timeInput);

    // Adjust penalty based on year and distance
    const penalty = getShoePenalty(distance, year);
    const adjustedTime = totalSeconds + penalty; // ✅ keep fractional seconds

    document.getElementById("shoe-adjusted-time").innerText =
      `The time you actually ran without cheat shoes: ${formatTime(adjustedTime)}`;
  } catch (e) {
    alert(e.message);
  }
}

// Penalty by distance
function getShoePenalty(distance, year) {
  if (year >= 2019) {
    // Base penalties by distance (can be fine-tuned later)
    const penalties = {
      "800m": 1.5,
      "1500m": 3,
      "3K": 7,
      "5K": 10,
      "10K": 15,
      "Half Marathon": 90,
      "Marathon": 300
    };
    return penalties[distance] || 0;
  }
  return 0;
}
