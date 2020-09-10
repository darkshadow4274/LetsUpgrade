def array1243(nums):
    for i in range(len(nums)-2):
        if nums[i]==1 and nums[i+1]==2 and nums[i+2]==3:
            print("It's A Match")
        else:
            print("It's Gone")
array1243([1,2,3,2,33])
array123 = lambda x : any([1,2,3] == x[offset:offset+3] for offset in range(len(x)))
