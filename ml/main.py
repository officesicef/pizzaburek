import math
import numpy as np
import matplotlib.pyplot as plt

from evolution import generate_people, evolution
from neural_network import calculate, predict


def count_freq(nums):
    freq = np.zeros(24)
    for num in nums:
        freq[round(num)] += 1
    return freq


def sick(peps):
    sick_peps = []
    for pep in peps:
        if pep[0]:
            sick_peps.append(pep)
    return sick_peps


def time_together(person, pep):
    return min(pep[2], person[2]) - max(pep[1], person[1])


def people_together(people):
    time_bins = np.zeros(24)
    for pep in people:
        arrival = round(pep[1])
        while arrival < round(pep[2]):
            time_bins[arrival] += 1
            arrival += 1
    return time_bins


def write_data(data, labels, name):
    file = open(name, "w")
    for i in range(len(data)):
        for j in data[i]:
            file.write(str(j) + ",")
        file.write(str(labels[i]) + ",\n")
    file.close()


def load_data(name):
    file = open(name, 'r')
    lines = file.readlines()
    data = []
    labels = []
    for line in lines:
        arr = line.split(',')
        one_data = []
        for elem in arr[:4]:
            one_data.append(float(elem))
        data.append(one_data)
        labels.append(float(arr[4]))
    return data, labels


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    #data, labels = evolution(2000)
    #write_data(data, labels, "data.txt")
    #data, labels = load_data("data.txt")
    #calculate(data, labels)
    severity = []
    x = []
    for i in range(2, 401):
        prediction = predict([35, 1, 1.5, i * 1.5 + 1.5])
        severity.append(min(10, prediction[0][0] / 35 * 50))
        x.append(i)
    plt.plot(x, severity)
    plt.xlabel("Sum of people in a day")
    plt.ylabel("Covid danger")
    plt.savefig("ai.png")
    #korelacija povecanja opasnosti s obyirom na punocu sobe
    # generate = 300
    # people = []
    # people += generate_people(round(generate * 0.4), 11, 2)
    # people += generate_people(round(generate * 0.6), 18, 2)
    # people = np.array(people)
    # for i in range(10):
    #     sick_peps = np.array(sick(people))
    #     plt.plot(range(24), count_freq(people[:, 1]), label="arrival")
    #     plt.plot(range(24), count_freq(people[:, 2]), label="departure")
    #     plt.plot(range(24), people_together(people), label="together")
    #     plt.legend()
    #     plt.show()
    #     plt.plot(range(24), count_freq(sick_peps[:, 1]), label="infected_arrival")
    #     plt.plot(range(24), count_freq(sick_peps[:, 2]), label="infected_departure")
    #     plt.plot(range(24), people_together(sick_peps), label="together")
    #     plt.legend()
    #     plt.show()



