array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]


# def validate_subsequence(array, sequence):
#     array_idx = 0
#     seq_idx = 0
#     while array_idx < len(array) and seq_idx < len(sequence):
#         if array[array_idx] == sequence[seq_idx]:
#             seq_idx += 1
#         array_idx += 1
#     return seq_idx == len(sequence)


def validate_subsequence(array, sequence):
    seq_idx = 0
    for arr in array:
        if seq_idx == len(sequence):
            break
        if sequence[seq_idx] == arr:
            seq_idx += 1
    return seq_idx == len(sequence)


print(validate_subsequence(array, sequence))
