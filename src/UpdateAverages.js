export function updateAverage(groupNum, newAverage) {
    alert('groupNum:' + groupNum);
    if(groupNum === undefined){
        return;
    }
    // Get the 2D array from localStorage
    let storedAverages = JSON.parse(localStorage.getItem('averages')) || [];

    // If storedAverages is empty, create arrays for groups 1-4
    if (storedAverages.length === 0) {
        storedAverages = Array(4).fill([0, 0]);
        localStorage.setItem('averages', JSON.stringify(storedAverages));
    }

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
    //alert('setitem:' + JSON.stringify(storedAverages));
    // Update localStorage with the updated array
    localStorage.setItem('averages', JSON.stringify(storedAverages));
}
