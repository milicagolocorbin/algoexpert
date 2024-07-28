defmodule SortedSquaredArray do
  def sorted_squared_array(arr) do
    Enum.map(arr, fn value -> value * value end)
    |> Enum.sort(:asc)
    |> dbg()
  end
end

arr = [1, 2, 3, 4, 5, 6, 8, 9]
arr1 = [-7, -5, -4, 3, 6, 8, 9]

SortedSquaredArray.sorted_squared_array(arr)
SortedSquaredArray.sorted_squared_array(arr1)
