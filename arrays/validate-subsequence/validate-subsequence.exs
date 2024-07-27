defmodule ValidateSubsequence do
  def validate_subsequence(array, sequence) do
    MapSet.subset?(MapSet.new(sequence), MapSet.new(array))
    |> dbg()
  end
end

array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]

ValidateSubsequence.validate_subsequence(array, sequence)
