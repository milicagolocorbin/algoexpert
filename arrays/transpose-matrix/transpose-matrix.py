matrix = [
    [1, 2],
    [4, 5],
    [7, 8],
]


def transpose_matrix(matrix):
    transposed_output = []
    # get the number of elements in each vector
    for col in range(len(matrix[0])):
        print(col)
        new_row = []
        # get the number of vectors in matrix
        for row in range(len(matrix)):
            print(row)
            new_row.append(matrix[row][col])
            # matrix[0][0] = 1
            # matrix[1][0] = 4
            # matrix[2][0] = 7
            # matrix[0][1] = 2
            # ...
        transposed_output.append(new_row)
    return transposed_output


print(transpose_matrix(matrix))
