// data/courses.js

const courseData = {
  "5K": [
    { name: "Mid-Cheshire 5K", adjustment: 10 },
	{ name: "Barrowford Podium 5k", "adjustment": 25 },
	{ name: "Barrowford Podium 5k (2021)", "adjustment": 50 },
	{ name: "Leicester Podium 5k", "adjustment": 25 },
	{ name: "Ipswitch 5k", "adjustment": 5 },
	{ name: "York Even Splits 5k", "adjustment": 10 },
	{ name: "Sale Sizzler 5k", "adjustment": -11 },
	{ name: "Keswick Park Run", "adjustment": -20 },
	{ name: "Cannon Hill Park Run", "adjustment": -10 },
	{ name: "Roundhay Park Run", "adjustment": -35 },
    { name: "Amargh 5K", adjustment: 15 }
  ],
  "10K": [
    { name: "Trafford 10K", adjustment: 20 },
    { name: "Trafford 10K 2024", adjustment: 40 },
	{ name: "Leeds Abbey Dash", "adjustment": 5 },
	{ name: "Wilmslow 10k", "adjustment": 5 },
	{ name: "Valencia 10k", "adjustment": 10 },
	{ name: "Brighton 10k", "adjustment": 12 },
	{ name: "Ribble Valley 10k 2024", "adjustment": 30 },
	{ name: "Ribble Valley 10k", "adjustment": 5 },
    { name: "Telford 10k", adjustment: 10 },
	{ name: "Salford 10k", adjustment: -5 }
  ],
    "Half Marathon": [
    { name: "Wilmslow Half", adjustment: -15 },
    { name: "Brass Monkey 2024", adjustment: 40 },
	{ name: "Brass Monkey", "adjustment": 20 },
	{ name: "Barcelona Half", "adjustment": 25 },
	{ name: "Aintree Half", "adjustment": 30 },
	{ name: "North Lincs Half", "adjustment": 0 }
  ],
    "Marathon": [
    { name: "London Marathon 2024", adjustment: 0 },
    { name: "London Marathon 2025", adjustment: -210 },
	{ name: "Valencia Marathon", adjustment: 240 },
	{ name: "Leeds Marathon", adjustment: 0 },
	{ name: "York Marathon", adjustment: 30 },
	{ name: "Seville Marathon", adjustment: 14 }
  ]
  
};

// Export for use in script.js
export { courseData };
