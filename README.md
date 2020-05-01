# interview-coin-return
Return correct coin denominations from vending machine

## Rules
Given coins in denominations of 1, 5, 10, 25, 50, and 100, design a vending machine
that will give people the correct number of each coin based on the change they're owed.

For example, if an item costs 99, and they pay 500,
the machine should return 1 coin valued at 1 and 4 coins valued at 100.

## Exercise
Create a function `getChange(M, P)` where M is the money paid and P is the item price.

This function should return an array like this:

```getChange(500, 99) // should return [1, 0, 0, 0, 0, 4]```
