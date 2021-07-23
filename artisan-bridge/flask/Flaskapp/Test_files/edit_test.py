# string to variable

cat = 1000
dog = 100

def go():
    print(globals()[str(input())]*globals()['dog'])

go()

# class go():
    
#     def __init__(self, goal):
#         self.goal = goal


# test = go(5000)
# str = 'out'
# exec(f"{str} = {'test'}.{'goal'}")

# print(out)