# # string to variable

# cat = 1000
# dog = 100

# def go():
#     print(globals()[str(input())]*globals()['dog'])

# go()

# # class go():
    
# #     def __init__(self, goal):
# #         self.goal = goal


# # test = go(5000)
# # str = 'out'
# # exec(f"{str} = {'test'}.{'goal'}")

# # print(out)


# query = [('aim', 'app'), ('correct', 'score')]
# result = {}

# for num, i in enumerate(query):
#     result[str(num)] = {"Service":f"{i[0]}", "Description": f"{i[1]}"}
#     # result[str(num)]['Description'] = i[1]

# print(result)



# import datetime
# print(str(datetime.datetime.today()))
# import os
# from dotenv import load_dotenv

# load_dotenv()
# root = os.getenv('MYSQL_USERNAME')
# root1 = os.getenv('MYSQL_PASSWORD')

# print(f"mysql+pymysql://{root}:{root1}@localhost:3306/artisanbridge")
# from mysql_connection_test import artisan


from twilio.rest import Client 
 
account_sid = 'AC4617139fd28a9b6959c8fee9f20d9321' 
auth_token = '0be4682dc4fb1431626f7daeea1c0adf' 
client = Client(account_sid, auth_token) 
 
message = client.messages.create(  
                              messaging_service_sid='MG85e059c34a098dd42136f9d0f97911c5', 
                              body=f"\n\n\nArtisan Bridge\n\nYour Service has been requested \nName: Jayus\nLocation: Kotei \nContact: 0236587458",      
                              to='+233501459955' 
                          ) 
 
message = client.messages.create(  
                              messaging_service_sid='MG85e059c34a098dd42136f9d0f97911c5', 
                              body=f"\n\n\nArtisan Bridge\n\nYou requested the service of \nName: Joe\n \nContact: 0236589458",      
                              to='+233501459955' 
                          ) 

print(message.sid)

number = '0255585'

print(number[1:])
