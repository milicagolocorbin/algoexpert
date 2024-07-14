defmodule TransposeMatrix do
  # SOLUTION 01
  # def transpose_matrix(matrix) do
  #   Enum.zip(matrix)
  #   |> Enum.map(&Tuple.to_list/1)
  #   |> dbg()
  # end

  # SOLUTION 02
  def transpose_matrix([[] | _]), do: []

  def transpose_matrix(matrix) do
    [Enum.map(matrix, &hd/1) | transpose_matrix(Enum.map(matrix, &tl/1))]
    |> dbg()
  end
end

matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

TransposeMatrix.transpose_matrix(matrix)
