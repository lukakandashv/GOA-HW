class Person:
    age = 25

    def printAge(cls):
        print('The age is:', cls.age)
Person.printAge = classmethod(Person.printAge)

Person.printAge()