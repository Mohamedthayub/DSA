function countTriplets(arr) {
    const frequency = new Map();

    // Count frequency of every value
    for (const num of arr) {
        frequency.set(num, (frequency.get(num) || 0) + 1);
    }

    // Get distinct values
    const values = [...frequency.keys()];

    let count = 0;

    // Check every pair (a, b)
    for (let i = 0; i < values.length; i++) {

        for (let j = i; j < values.length; j++) {

            const a = values[i];
            const b = values[j];
            const c = a + b;

            // c must exist
            if (!frequency.has(c)) {
                continue;
            }

            // If a === b, we need at least two occurrences
            if (a === b && frequency.get(a) < 2) {
                continue;
            }

            count++;
        }
    }

    return count;
}
/*
Triplets Where One is Sum of Other Two
Difficulty: EasyAccuracy: 25.67%Submissions: 231K+Points: 2
Given an array arr[], count the number of distinct triplets (a, b, c) such that:

a + b = c

Each triplet is counted only once, regardless of the order of a and b.

Examples:

Input: arr[] = [1, 5, 3, 2]
Output: 2 
Explanation: There are 2 triplets: 1 + 2 = 3 and 3 +2 = 5
Input: arr[] = [2, 3, 4]
Output: 0
Explanation: No such triplet exits in the given array.
Input: arr[] = [1, 2, 1, 1]
Output: 1
Explanation: Since we need to consider only distinct, we have only one triplet (1, 1, 2).
*/