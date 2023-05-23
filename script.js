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


let students = [];

function makeStudent(name, age) {
    return {
        name: name,
        age: age,
        marks: []
    };
}

function studentManagement(students) {
    let grupStudent = students.slice(0);

    return {
        addStudent: function(name, age) {
            students.push(makeStudent(name, age));

            console.log('Студенты добавлен в группу: ', makeStudent(name, age))
        },

        removeStudent: function(name) {
            let index = grupStudent.findIndex(function(item) {
                return item.name === name;
            });

            if (index !== -1) {
                students.splice(index, 1);
            }

            console.log('Убрали студента из группы: ', name)
        },

        addMarksStudent: function(name, lessons, marks) {
            let addMarks = grupStudent.find(function(item) { 
               return item.name === name;
            });

            if (addMarks.marks.length === 0) {
                addMarks.marks.push(null);
                delete addMarks.marks[0];
            }

            if(addMarks) {
                addMarks.marks.push(marks)
            }

            console.log('Оценки студентов за занятие:' , name, 'Лекция: ', lessons, 'Оценка: ', marks)
        },

        averageMarksStudentName: function() {
            let averageMarks = grupStudent.map(function(student) {
                return {
                    name: student.name,
                    averag: student.marks.reduce(function(sum, num) { 
                    return sum + num
                    }) / (student.marks.length - 1)
                    };
                });

            console.log('Средняя оценка cтудента за все лекции: ', averageMarks);
        },

        averageMarksGrupLessons: function() {
            let arrMarks = grupStudent.map(function(item) {
                if (item.marks.indexOf(item.marks[1])) {
                    return item.marks[1]
                }
            });

            let result = arrMarks.reduce(function(sum, marks) {
                return sum + marks
            }) / grupStudent.length;

            console.log('Лекция № 1 средняя оценка группы: ', result);
        },   
        
        sortStudentName: function() {
            let sortName = grupStudent.map(function(item) { 
                return item.name
            });

            sortName.sort()

            console.log('Сортировка студентов по имени: ', sortName)
        },

        sortStudentMarks: function() {
            let sortMarks = grupStudent.map(function(student) {
                return {
                    name: student.name,
                    averag: student.marks.reduce(function(sum, num) { 
                     return sum + num
                    }) / (student.marks.length - 1)
                    };
                });
                
                sortMarks.sort(function(a, b) {
                return b.averag - a.averag});

            console.log('Сортированный список студентов по оценкам: ', sortMarks);
        }
    };
}

// add student
studentManagement(students).addStudent('Валера', 19);
studentManagement(students).addStudent('Никита', 22);
studentManagement(students).addStudent('Аня', 20);
studentManagement(students).addStudent('Альберт', 21);
studentManagement(students).addStudent('Юля', 23);

// remove student
studentManagement(students).removeStudent('Альберт');

// add marks and lessons
studentManagement(students).addMarksStudent('Юля', 1, 10)
studentManagement(students).addMarksStudent('Юля', 2, 8)
studentManagement(students).addMarksStudent('Юля', 3, 11)

studentManagement(students).addMarksStudent('Аня', 1, 8)
studentManagement(students).addMarksStudent('Аня', 2, 11)
studentManagement(students).addMarksStudent('Аня', 3, 6)

studentManagement(students).addMarksStudent('Никита', 1, 6)
studentManagement(students).addMarksStudent('Никита', 2, 8)
studentManagement(students).addMarksStudent('Никита', 3, 3)

studentManagement(students).addMarksStudent('Валера', 1, 7)
studentManagement(students).addMarksStudent('Валера', 2, 9)
studentManagement(students).addMarksStudent('Валера', 3, 12)

// average marks student name
studentManagement(students).averageMarksStudentName()

// average marks grup lessons
studentManagement(students).averageMarksGrupLessons()

// sort student name
studentManagement(students).sortStudentName()

// sort student marks
studentManagement(students).sortStudentMarks()




