package main

import "fmt"

func main() {
	array := []int{5, 1, 22, 25, 6, -1, 8, 10}
	sequence := []int{1, 6, -1, 10}
	fmt.Println(validateSubsequence(array, sequence))

}

// func validateSubsequence(array, sequence []int) bool {
// 	var arrayIdx int
// 	var seqIdx int

// 	for arrayIdx < len(array) && seqIdx < len(sequence) {
// 		if array[arrayIdx] == sequence[seqIdx] {
// 			seqIdx += 1
// 		}
// 		arrayIdx += 1
// 	}

// 	return seqIdx == len(sequence)
// }

func validateSubsequence(array, sequence []int) bool {
	var seqIdx int

	for _, arr := range array {
		if seqIdx == len(sequence) {
			break
		}
		if arr == sequence[seqIdx] {
			seqIdx += 1
		}
	}

	return seqIdx == len(sequence)
}
