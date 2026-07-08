"use strict";

const lunches =[];

// 1. Function to add lunch option at the end of the array.
const addLunchToEnd = (arr, str) => {
    arr.push(str);

    console.log(`${str} added to the end of the lunch menu.`);
    return arr;
}

// 2. Function to add lunch option at the start of the array.
const addLunchToStart = (arr, str) => {
    arr.unshift(str);

    console.log(`${str} added to the start of the lunch menu.`);
    return arr;
}

// 3. Function to remove the last lunch option from the array.
const removeLastLunch = arr => {
    const removedLunch = arr.pop();

    // Check if the removal was successful.
    if (removedLunch === undefined) {
        console.log("No lunches to remove.");
    } else {
        console.log(`${removedLunch} removed from the end of the lunch menu.`);
    }

    return arr;
}

// 4. Function to remove the first lunch option from the array.
const removeFirstLunch = arr => {
    const removedLunch = arr.shift();

    // Check if the removal was successful.
    if (removedLunch === undefined) {
        console.log("No lunches to remove.");
    } else {
        console.log(`${removedLunch} removed from the start of the lunch menu.`);
    }

    return arr;
}

// 5. Function to get random lunch option from the menu.
const getRandomLunch = arr => {
    const randomLunch = arr[Math.floor(Math.random() * arr.length)];

    // Check if it got a random lunch option.
    if (randomLunch === undefined) {
        console.log(`No lunches available.`);
    } else {
        console.log(`Randomly selected lunch: ${randomLunch}`);
    }

    return randomLunch;
}

// 6. Function to display the lunch menu.
const showLunchMenu = arr => {
    if (arr.length === 0) {
        console.log(`The menu is empty.`);
    } else {
        console.log(`Menu items: ${arr.join(", ")}`);
    }
}
