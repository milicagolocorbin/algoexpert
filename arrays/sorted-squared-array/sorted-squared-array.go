package main

import (
	"fmt"
	"slices"
)

func main() {
	arr := []int{1, 2, 3, 4, 5, 6, 8, 9}
	arr1 := []int{-7, -5, -4, 3, 6, 8, 9}
	fmt.Println(sortedSquaredArray(arr))
	fmt.Println(sortedSquaredArray(arr1))
}

func sortedSquaredArray(arr []int) []int {
	sortedArray := make([]int, len(arr))

	for i, v := range arr {
		sortedArray[i] = v * v
	}

	slices.Sort(sortedArray)
	return sortedArray
}
