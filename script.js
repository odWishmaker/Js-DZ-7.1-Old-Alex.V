// ДЗ 19. Группа студентов
// 1. Реализовать функцию которая принимает имя и возраст студента и возвращает 
// объект с полями name, age, marks(пустой массив);
// 2. Реализовать функцию которая будет управлять студентами:
// - функция должна принимать массив студентов созданных с помощью предыдущей
// - функции должна возвращать объект у которого будут следующие методы:
// (1). добавления нового студента
// (2). удаление студента по имени
// (3). добавление оценки студенту за занятие(№ занятия === индекс оценки в массиве)
// (4). получение средней оценки студента по имени
// (5). получение средней оценки группы за занятие
// (6). получение отсортированного по именам списка студентов
// (7). получение отсортированного по среднему балу списка студентов
// 3. Работоспособность всех методов продемонстрировать ниже

let group = [
    makeStudent('Валера', 19),
    makeStudent('Никита', 22),
    makeStudent('Аня', 20),
    makeStudent('Альберт', 21),
    makeStudent('Юля', 23),
];

function makeStudent(name, age) {
    return {
        name: name,
        age: age,
        marks: []
    };
}

function studentManagement(students) {
    let groupStudent = students.slice(0);

    return {
        addStudent: function(name, age) {
            groupStudent.push(makeStudent(name, age));

            console.log('Студенты добавлен в группу: ', makeStudent(name, age))
        },

        removeStudent: function(name) {
            let index = groupStudent.findIndex(function(item) {
                return item.name === name;
            });

            if (index !== -1) {
                groupStudent.splice(index, 1);
            }

            console.log('Убрали студента из группы: ', groupStudent, name)
        },

        addMarksStudent: function(name, lessons, marks) {
            groupStudent.forEach(function(item) {
                if(item.name === name) {
                    item.marks[lessons - 1] = marks
                }
             });
 
            console.log('Оценки студентов за занятие:' , name, 'Лекция: ', lessons, 'Оценка: ', marks)
        },

        averageMarksStudentName: function(name) {
            let student

            groupStudent.forEach(function(item) {
                if (item.name === name) {
                    return student = { 
                        name: item.name,
                        average: item.marks.reduce(function(sum, num) {
                            return  num ? sum + num : sum;
                        }) / item.marks.length
                    }
                }
            })
            console.log('Средняя оценка cтудента за все лекции: ', student);
        },

        averageMarksGrupLessons: function(lessons) {
            let arrMarks = groupStudent.map(function(item) {
                if (item.marks) {
                    return item.marks[lessons - 1]
                }
            });

            let result = arrMarks.reduce(function(sum, marks) {
                return marks ? sum + marks : sum;
            }) / groupStudent.length;

            console.log('Лекция № ' + lessons + ' средняя оценка группы: ', result);
        },
        
        sortStudentName: function() {
            let sortName = groupStudent.sort(function(a, b) {
                if(a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
            })

            console.log('Сортировка студентов по имени: ', sortName)
        },

        sortStudentMarks: function() {
            let sortMarks = groupStudent.map(function(student) {
                return {
                    name: student.name,
                    averag: student.marks.reduce(function(sum, num) { 
                     return num ?  sum + num : sum
                    }) / student.marks.length
                    };
                });
                
                sortMarks.sort(function(a, b) {
                return b.averag - a.averag});

            console.log('Сортированный список студентов по оценкам: ', sortMarks);
        }
    };
}

let managerGroup = studentManagement(group)

// add student
managerGroup.addStudent('Роберт', 21)

// remove student
managerGroup.removeStudent('Альберт')

// // add marks and lessons
managerGroup.addMarksStudent('Юля', 1, 10)
managerGroup.addMarksStudent('Юля', 2, 8)
managerGroup.addMarksStudent('Юля', 3, 11)

managerGroup.addMarksStudent('Аня', 1, 8)
managerGroup.addMarksStudent('Аня', 2, 11)
managerGroup.addMarksStudent('Аня', 3, 6)

managerGroup.addMarksStudent('Никита', 1, 6)
managerGroup.addMarksStudent('Никита', 2, 8)
managerGroup.addMarksStudent('Никита', 3, 3)

managerGroup.addMarksStudent('Валера', 1, 7)
managerGroup.addMarksStudent('Валера', 2, 9)
managerGroup.addMarksStudent('Валера', 3, 12)

managerGroup.addMarksStudent('Роберт', 1, 6)
managerGroup.addMarksStudent('Роберт', 2, )
managerGroup.addMarksStudent('Роберт', 3, 3)

// // average marks student name
managerGroup.averageMarksStudentName('Роберт')

// // average marks grup lessons
managerGroup.averageMarksGrupLessons(1)

// // sort student name
managerGroup.sortStudentName()

// // sort student marks
managerGroup.sortStudentMarks()
