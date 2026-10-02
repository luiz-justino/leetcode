# Valid Anagram

**Difficulty:** Easy  
**Main technique:** Hash map / frequency counting  
**LeetCode:** [Valid Anagram](https://leetcode.com/problems/valid-anagram/)

## Problem summary

Given two strings, determine whether they are anagrams of each other. Two strings are anagrams if they have the same characters in the same frequency, but in a different order.

## Examples

| Input | Output |
| --- | --- |
| `s = "anagram"`, `t = "nagaram"` | `true` |
| `s = "rat"`, `t = "car"` | `false` |
| `s = "a"`, `t = "ab"` | `false` |

## Approach

Use a frequency map to count the characters of both strings in a single pass:

- For each character in `s`, increment its count
- For each character in `t`, decrement its count
- If the strings are valid anagrams, every count ends up at `0`

If the lengths differ at the beginning, return `false` immediately.

## Complexity

| Measure | Cost |
| --- | --- |
| Time | $O(n)$ |
| Space | $O(n)$ |

## Solution

The JavaScript implementation and runnable examples are in [`validAnagram.js`](validAnagram.js).

Run it from the repository root:

```bash
node problems/arrays-and-hashing/valid-anagram/validAnagram.js
```
