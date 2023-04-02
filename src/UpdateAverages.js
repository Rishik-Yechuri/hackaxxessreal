export function updateAverage(groupNum, newAverage) {
    if(newAverage === 5){
        newAverage = 250;
    }
    // Get the 2D array from localStorage
    const storedAverages = JSON.parse(localStorage.getItem('averages')) || [];

    // Check if the groupNum exists in the array, if not, create a new group with initial values
   // if (storedAverages.length < groupNum) {
   /* for(var x=0;x<3;x++){
        storedAverages[x] = [1, 3];

    }*/
       // storedAverages[groupNum - 1] = [0, 1];
   // }

    // Get the current count and average
    const currentCount = storedAverages[groupNum - 1][0]; // Use 0 for count
    const currentAverage = storedAverages[groupNum - 1][1]; // Use 1 for average

    // Calculate the new average
    if(groupNum !== 0){
        const newCount = currentCount + 1;
        const updatedAverage = ((currentAverage * currentCount) + newAverage) / newCount;

        // Update the array with the new count and average
        storedAverages[groupNum - 1][0] = newCount; // Update count at index 0
        storedAverages[groupNum - 1][1] = updatedAverage; // Update average at index 1
    }

    // Update localStorage with the updated array
    localStorage.setItem('averages', JSON.stringify(storedAverages));
}
