package main

import "fmt"

type Matrix [][]int

func main() {
	// matrix := Matrix{{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}
	matrix := Matrix{{1, 2}, {4, 5}, {7, 8}}
	fmt.Println(transposeMatrix(matrix))
}

func transposeMatrix(matrix Matrix) Matrix {
	output := make(Matrix, 0)
	for col := range matrix[0] {
		newRow := make([]int, 0)
		for row := range matrix {
			newRow = append(newRow, matrix[row][col])
		}
		output = append(output, newRow)
	}
	return output
}
