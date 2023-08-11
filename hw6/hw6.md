<p align='right'>< TeachMeSkills /></p>
<h1 align='center'>Objects</h1>

## Complete exercise

## 1. Задания оформляются в одном файле **`index.ts`**, который находится в **`hw6`** папке (кроме 7-го задания, где файлы конфигурации находятся в корне проекта). Для разделения заданий между собой используйте комментарии:

```javascript
// Task 1
const newObject = {
    heart: "smart",
    brain: "fool"
}
//...

// Task 2
//...
```

## 2. Создать скрипт **`hw6:test`**, который будет запускать ваш код в файле **`index.ts`**.

## 3. Работа оформляется в отдельной ветке **`hw6`** и отправляется преподавателю на проверку в форме Pull Request-а.

### NORMAL level

#### Task 1 💻

Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта. 

#### Task 2 🖥

Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль **true**

#### Task 3 🖥

Дан обьект:

```javascript
    const student = {
        name: 'John',
        age: 19,
        isHappy: true
    }
```

C помощью цикла **for in** вывести в консоль сначала все ключи, потом значения ключей обьекта. 

#### Task 4 🖥

Дан обьект:

```javascript
const colors = {
    'ru pum pu ru rum': {
        red: 'reddish',
        green: 'greenish',
        blue: 'blueish'
    },
};
```

Вывести в консоль слово красный и синий, обращаясь к ключам объекта.

#### Task 5 🖥

Дан обьект:

```javascript
    let salaries = {
        andrey: 500,
        sveta: 413,
        anton: 987,
        andrey: 664,
        alexandra: 199
    }
```
Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную.

#### Task 6 🖥

Дан обьект:

```javascript
    let building = {
        foundation: 1997,
        country: 'USA',
        city: 'New Jersey',
        generalInfo: //..,
        getDescriptionTextLength: //..,
    }
``` 
Допишите два пропущенных метода: `generalInfo()` обращается к ключам этого же объекта и возвращает строку в формате `This building was found in <foundation> year in <country>, <city>`;
`getDescriptionTextLength()` выводит в консоль длину возвращаемой методом `generalInfo()` строки.

#### Task 7 🖥

Установите любой Code Formatter (Eslint или Prettier), если ещё не устанавливали его, и добавьте config файл для него в корень вашего проекта. 


### ADVANCED level

#### Task 1 👨‍🏫

Даны два одинаковых обьекта. Сравните их так чтобы они были равны

```javascript
    let student1 = {
        name: 'Polina',
        age: 27,
    }

    let student2 = {
        name: 'Polina',
        age: 27,
    }
```

#### Task 2 🖥

Дан объект cat. Склонируйте его 2 способами, и подтвердите, что при изменении поля в 1ом объекте, это же поле не меняется во втором объекте. Объекты должны быть описаны с помощью типа или интерфейса

```javascript
const cat = {
      name: 'Vitaliy',
      age: 30,
   }
```