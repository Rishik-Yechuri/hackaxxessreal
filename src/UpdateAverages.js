function updateAverage(groupNum, newAverage) {
    // Get the 2D array from localStorage
    const storedAverages = JSON.parse(localStorage.getItem('averages')) || [];

    // Check if the groupNum exists in the array, if not, create a new group with initial values
    if (storedAverages.length < groupNum) {
        storedAverages[groupNum - 1] = [0, 0];
    }

    // Get the current count and average
    const currentCount = storedAverages[groupNum - 1][0];
    const currentAverage = storedAverages[groupNum - 1][1];

    // Calculate the new average
    const newCount = currentCount + 1;
    const updatedAverage = ((currentAverage * currentCount) + newAverage) / newCount;

    // Update the array with the new count and average
    storedAverages[groupNum - 1][0] = newCount;
    storedAverages[groupNum - 1][1] = updatedAverage;

    // Update localStorage with the updated array
    localStorage.setItem('averages', JSON.stringify(storedAverages));
}
