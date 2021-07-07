// let twoSum = function(nums, target) {
//     // Iterate over nums array with for loop where i is the indice of the first element
//       for (let i=0; i<nums.length; i++) {
//       // Perform a second iteration where j is the is the indice of the second element
//           for (let j=i+1; j<nums.length; j++) {
//         // If nums[i] + nums[j] equals target integer
//           // return [i, j] 
//               if (nums[i] +nums[j] === target)
//                   return [i, j]
//           }
//       }
//   }

// let nums = [3 , 2 , 4];
// let target = 6;


// console.log(twoSum(nums, target));

var twoSum = function (nums, target) {
    // Array to store the result
    result = [];
    // Map to store the difference and its index
    index_map = new Map();
    // Loop for each element in the array
    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];
        if (index_map.has(difference)) {
            result[0] = i;
            result[1] = index_map.get(difference);
            break;
        } else {
            index_map.set(nums[i], i);
        }
    }
    return result;
};

let nums = [3 , 3];
let target = 6;


console.log(twoSum(nums, target));