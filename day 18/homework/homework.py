lst = [[0, 1, 5, 6, 9], [5, 5, 5, 5], [42, 1337], [-100, 100]]

def more_than(lst):
    return [[i for i in l if i > 5] for l in lst]
print(more_than(lst))
