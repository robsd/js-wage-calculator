wage = document.getElementById('wage');
hours = document.getElementById('hours');
monthly = document.getElementById('monthly');
weekly = document.getElementById('weekly');
daily = document.getElementById('daily');
hourly = document.getElementById('hourly');

function calculate() {
	monthlyWage = wage.value / 12;
	weeklyWage = monthlyWage / 4;
	dailyWage = weeklyWage / 5
	
	monthly.value = monthlyWage;
	weekly.value = weeklyWage;
	daily.value = dailyWage;
	hourly.value = dailyWage / hours.value;
}