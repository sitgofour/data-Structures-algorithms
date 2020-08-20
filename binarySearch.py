
def binarySearch(aList, target, start, end):

    while start <= end:
        mid = end + start / 2

        if target == aList[mid]:
            return mid

        elif target < aList[mid]:
            binarySearch(aList, target, start, mid-1)

        else:
            binarySearch(aList, target, mid+1, end)
