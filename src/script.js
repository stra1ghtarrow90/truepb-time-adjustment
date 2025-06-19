// script.js

import { setupCourseAdjuster } from './course/logic.js';
import { setupShoeAdjuster } from './supershoe/logic.js';

document.addEventListener("DOMContentLoaded", () => {
  setupCourseAdjuster(); // loads course adjuster
  setupShoeAdjuster();     // 👟 Loads shoe logic
});
