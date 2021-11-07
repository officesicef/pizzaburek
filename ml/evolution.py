import numpy as np
import random


def threshold(number, min_num=7, max_num=22):
    return min(max(number, min_num), max_num)


def generate_person(mean, dev):
    infected = False
    if random.random() <= 0.001:
        infected = True
    time_of_arrival = np.random.normal(mean, dev)
    time_of_arrival = threshold(time_of_arrival, 7, 22)
    time_of_departure = time_of_arrival + np.random.normal(1.5, 1.5)
    time_of_departure = threshold(time_of_departure, 7.1, 23)
    return [infected, time_of_arrival, time_of_departure]


def generate_people(num_of_peps, mean, dev):
    peps = []
    for i in range(num_of_peps):
        peps.append(generate_person(mean, dev))
    return peps


def time_together(person, pep):
    return min(pep[2], person[2]) - max(pep[1], person[1])


def got_sick(person, people):
    if person[0]:
        return True
    sick = [[0, 0.01], [0.002, 0.05], [0.08, 0.35], [0.25, 0.7], [0.4, 0.9], [0.7, 1], [1, 1]]
    infected_people = 0
    people_there = -1
    for pep in people:
        together = time_together(person, pep) > 0
        if together:
            people_there += 1
            if pep[0]:
                infected_people += 1
    if infected_people >= 7:
        infected_people = 6
    chance = max(sick[infected_people][0], random.random() * sick[infected_people][1] * people_there / 40)
    return chance > random.random() or random.random() < 0.00001


def next_generation(people):
    next_generation = people.copy()
    for i in range(len(next_generation)):
        next_generation[i][0] = got_sick(next_generation[i], people)
    return next_generation


def calculate_severity(people, next_gen):
    return min(10, (infected_dif(people, next_gen)) / 40 * 50)


def infected_dif(people, next_gen):
    new_infected_people = 0
    for pep in next_gen:
        if pep[0]:
            new_infected_people += 1
    infected_people = 0
    for pep in people:
        if pep[0]:
            infected_people += 1
    return new_infected_people - infected_people


def day(people):
    people_allowed = 35
    infected_people = 0
    infected_time_sum = 0
    time_sum = 0
    for pep in people:
        time_pep = pep[2] - pep[1]
        if pep[0]:
            infected_people += 1
            infected_time_sum += time_pep
        time_sum += time_pep
    return [people_allowed, infected_people, infected_time_sum, time_sum]


def evolution(generations):
    generate = 300
    people = []
    people += generate_people(round(generate * 0.4), 11, 2)
    people += generate_people(round(generate * 0.6), 18, 2)
    people = np.array(people)
    history = []
    labels = []
    while generations > 1:
        print(generations)
        generations -= 1
        next_gen = next_generation(people)
        severity = calculate_severity(people, next_gen)
        history.append(day(people))
        labels.append(infected_dif(people, next_gen))
        if severity >= 10:
            people = []
            people += generate_people(round(generate * 0.4), 11, 2)
            people += generate_people(round(generate * 0.6), 18, 2)
            people = np.array(people)
        else:
            people = next_gen
        #print(severity)

    return history, labels
