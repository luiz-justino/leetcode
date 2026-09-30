# 1. Two Sum

**Difficulty:** Easy  
**Main technique:** Hash map  
**LeetCode:** [Two Sum](https://leetcode.com/problems/two-sum/)

## Problem summary

Given an array of numbers and a target, find the indices of two different elements whose values add up to that target. The solution returns the pair of indices.

## Examples

| Input | Output |
| --- | --- |
| `nums = [2, 7, 11, 15]`, `target = 9` | `[0, 1]` |
| `nums = [3, 2, 4]`, `target = 6` | `[1, 2]` |
| `nums = [3, 3]`, `target = 6` | `[0, 1]` |

## Approach

Scan the array once while storing each previously seen number and its index in a `Map`. For each number, calculate the complement needed to reach the target. If that complement is already in the map, return its index and the current index; otherwise, store the current number and continue.

## Complexity

| Measure | Cost |
| --- | --- |
| Time | $O(n)$ |
| Space | $O(n)$ |

## Solution

The JavaScript implementation and runnable examples are in [`twoSum.js`](twoSum.js).

Run it from the repository root:

```bash
node problems/arrays-and-hashing/two-sum/twoSum.js
```