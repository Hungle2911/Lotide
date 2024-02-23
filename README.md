# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @billle0112/lotide`

**Require it:**

`const _ = require('@billle0112/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arr)`: Returns the first element of the array. 
  `tail(arr)`: Returns a new array with all elements except the first one
  `middle(arr)`: Returns an array containing the middle elements of the input array.
  `assertArraysEqual(a, b)`: Take in two arrays and console.log an appropriate message to the console.
  `assertEqual(actual, expected)`: Takes in two arrays and returns true or false, based on a perfect match.
  `assertObjectsEqual(actual, expected)`: Compares two objects for equality and logs the result.
  `eqObjects(object1, object2)`: Takes in two objects and returns true or false, based on a perfect match.
  `countLetters(sentence)`:  Returns an object containing the count of each letter in the input sentence.
  `countOnly(allItems, itemsToCount)`: Returns an object with the counts of specified items in the input array.
  `findKey(object, callback)`: Returns the first key in the object that satisfies the given callback.
  `findKeyByValue(object, value)`: Returns the key in the object with the specified value.
  `flatten(arr)`: Returns a new array with all nested arrays flattened.
  `letterPositions(sentence)`: Returns an object containing arrays of indices for each letter in the input sentence.
  `map(array, callback)`: Returns a new array with the results of applying the callback function to each element.
  `takeUntil(array, callback)`:  Returns a new array containing elements from the input array until the callback returns a truthy value.
  `without(source, itemsToRemove)`: Returns a subset of a given array, removing unwanted elements.
  `eqArrays`: Takes in two arrays and returns true or false, based on a perfect match.

