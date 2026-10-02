# Min Moves

**Difficulty:** Medium  
**Main technique:** Greedy counting / binary-array scan  
**Category:** Greedy

## Problem summary

Given a binary array, we want to find the minimum cost to make the array uniform. The idea is to count how many times a `0` would need to be paired with a previous `1`, and vice versa, while scanning the array from left to right.

This solution does not use a hash map. Instead, it keeps two counters:

- `zerosCount`: how many zeros were seen so far
- `onesCount`: how many ones were seen so far

The key observation is that each time we encounter a `0`, every previous `1` contributes to the cost of turning the array into a version dominated by zeros. Likewise, each time we encounter a `1`, every previous `0` contributes to the opposite direction.

## Examples

| Input | Output |
| --- | --- |
| `[1, 0, 1, 0]` | `1` |
| `[0, 1, 0, 1, 1]` | `1` |
| `[1, 1, 1, 1]` | `0` |
| `[0, 0, 1, 1, 0]` | `2` |
| `[1, 0, 0, 0, 1, 0, 1]` | `5` |

## Approach

A single pass through the array is enough:

- If the current value is `0`, then all prior `1`s contribute to the cost of turning the sequence toward a zero-dominant arrangement: `costWhenZeros += onesCount`
- If the current value is `1`, then all prior `0`s contribute to the cost of turning the sequence toward a one-dominant arrangement: `costWhenOnes += zerosCount`

At the end, the minimum between those two totals gives the optimal answer:

```js
return Math.min(costWhenZeros, costWhenOnes);
```

This is a greedy strategy because each step adds only the cost that is unavoidable for the current value and keeps the best global option open.

## Complexity

| Measure | Cost |
| --- | --- |
| Time | $O(n)$ |
| Space | $O(1)$ |

## Solution

The implementation is in [`minMoves.js`](minMoves.js).

Run it from the repository root:

```bash
node problems/greedy/min-moves/minMoves.js
```
