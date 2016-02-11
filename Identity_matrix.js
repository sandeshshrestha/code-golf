#!/usr/bin/env node

/*
Given an integer input `n`, output the `n x n` identity matrix. The identity matrix is one that has `1`s spanning from the top left down to the bottom right. You will write a program or a function that will return or output the identity matrix you constructed. Your output may be a 2D array, or numbers separated by spaces/tabs and newlines.

**Example input and output**

    1: [[1]]
    2: [[1, 0], [0, 1]]
    3: [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
    4: [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]
    5: [[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]]

    1
    ===
    1
    
    2
    ===
    1 0
    0 1
    
    3
    ===
    1 0 0
    0 1 0
    0 0 1
*/

var x = function(number) {
    return [...Array(number)].map(function(value, key1, arr) {
        return arr.map(function(value, key2) {
            return key1 == key2 ? 1 : 0;
        });
    });
}

var y=n=>[...Array(n)].map((V,K,A)=>A.map((v,k)=>K==k?1:0))

x(4);
y(4);