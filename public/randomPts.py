import random

def randomPoints(arr):
    coordinates = {}
    
    for name in arr:
        x = round(random.uniform(0, 1), 2)
        y = round(random.uniform(0, 1), 2)
        coordinates[name] = [x, y]
    
    for name, coord in coordinates.items():
        print(f"{name}: [{coord[0]:.2f}, {coord[1]:.2f}]")

def main():
    classParticipants = ["Souha", "Sai", "Melantha", "William", "Tap", "Dzung", "Sophia", "Christian", "Dung", "Ethan", "Myra", "Belgin", "Michael", "Marcel", "Andrew", "Prof. MacCormick", "Hailie", "Giang", "Tanner", "Aaron", "Evan"]
    randomPoints(classParticipants)

if __name__ == "__main__":
    main()