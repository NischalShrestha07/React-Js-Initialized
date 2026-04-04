tasks=[]

while True:
    print("TO_DO APP")
    print("1. View Tasks")  
    print("2. Add Task")
    print("3. Complete Task")
    print("4. Delete Task")
    print("5. Exit")

    choice=input("Enter your choice: ")

    if choice=="1":
        if len(tasks)==0:
            print("No tasks available.")
        else:
            for i,task in enumerate(tasks):
                