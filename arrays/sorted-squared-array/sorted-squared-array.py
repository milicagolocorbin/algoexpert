arr = [1, 2, 3, 4, 5, 6, 8, 9]
arr1 = [-7, -5, -4, 3, 6, 8, 9]


def sorted_squared_array(arr):
    sorted_array = [0 for _ in arr]
    for i in range(len(arr)):
        value = arr[i]
        sorted_array[i] = value * value

    sorted_array.sort()
    return sorted_array


print(sorted_squared_array(arr))
print(sorted_squared_array(arr1))
