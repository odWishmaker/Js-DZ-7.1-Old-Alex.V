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
            return groupStudent.push(makeStudent(name, age));
        },

        removeStudent: function(name) {
            let index = groupStudent.findIndex(function(item) {
                return item.name === name;
            });

            if (index !== -1) {
                groupStudent.splice(index, 1);
            }
            return groupStudent
        },

        addMarksStudent: function(name, lessons, marks) {
            groupStudent.forEach(function(item) {
                if(item.name === name) {
                    item.marks[lessons - 1] = marks 
                } else {
                    item.marks[lessons - 1] = item.marks[lessons - 1] || null;
                }
             });
 
            console.log('Оценки студентов за занятие:' , name, 'Лекция: ', lessons, 'Оценка: ', marks)
        },

        averageMarksStudentName: function(name) {
            return groupStudent.reduce(function(sum, student) {
                if (student.name === name) {
                    return student.marks.reduce(function(sum, mark) {
                       return mark ? sum + mark : sum 
                    }, 0) / student.marks.length
                } 
                return sum;
            }, 0)
        },

        averageMarksGrupLessons: function(lessons) {
            return groupStudent.reduce(function(sum, student) {
                return student.marks[lessons - 1] ? sum + student.marks[lessons - 1] : sum;
            }, 0) / groupStudent.length;
        },

        sortStudentName: function() {
            return sortName = groupStudent.sort(function(a, b) {
                if(a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
            })
        },

        sortStudentMarks: function() {
            let sortMarks = groupStudent.map(function(student) {
                return {
                    name: student.name,
                    age: student.age,
                    averag: student.marks.reduce(function(sum, num) { 
                        return num ?  sum + num : sum
                    }) / student.marks.length
                    };
                });
                
                sortMarks.sort(function(a, b) {
                return b.averag - a.averag});
            return sortMarks
        }
    };
}

let managerGroup = studentManagement(group)

// add student
console.log('Студенты добавлен в группу: ', managerGroup.addStudent('Роберт', 21))

// remove student
console.log(managerGroup.removeStudent('Альберт'))

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
console.log('Средняя оценка студента по имени: ', managerGroup.averageMarksStudentName('Роберт'))

// // average marks grup lessons
console.log('Средняя оценка группы за занятие: ', managerGroup.averageMarksGrupLessons(1))

// // sort student name
console.log('Сортировка студентов по имени: ', managerGroup.sortStudentName())

// // sort student marks
console.log('Сортированный список студентов по оценкам: ', managerGroup.sortStudentMarks())