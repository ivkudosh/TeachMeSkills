<p align='right'>< TeachMeSkills /></p>
<h1 align='center'>Functions</h1>

## Complete exercise

## 1. Задания оформляются в одном файле **`index.ts`**, который находится в **`hw5`** папке. Для разделения заданий между собой используйте комментарии:

```javascript
// Task 1
function getSum(lastNumber) {
  //...
}
console.log(getSum(40));

// Task 2
//...
```

## 2. После объявления функции её нужно вызвать хотя бы один раз, а сли функция что-либо возвращает, то вывести результат её вызова в терминал.

## 3. Работа оформляется в отдельной ветке **`hw5`** и отправляется преподавателю на проверку в форме Pull Request-а.

### NORMAL level

#### Task 1 💻

- Написать функцию **getSum**, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем.

> Если передадим число 100 то, надо вычислить сумму чисел от 0 до 100 (должно получится 5050)

#### Task 2 💻

- Напишите функцию которая в качестве аргумента принимает в себя сумму кредита который хочет получить клиент и верните результат переплаты по кредиту:

- процентная ставка в год — 17%,
- количество лет — 5.

> Мы пишем функцию для хорошего банка, поэтому сумма кредита не увеличивается (не использовать в качестве суммы кредита внешнюю переменную).

#### Task 3 💻

- Написать функцию **trimString** которая в качестве аргумента принимает три параметра:

- строку
- значение от
- значение по

- После вызова функция должна вернуть переданную строку обрезанную по значениям от и по

#### Task 4 💻

- Написать функцию **getSumNumbers**, которая будет принимать число и вычислять сумму цифр из которых состоит число.

> Для 2021 это будет 5.

#### Task 5 💻

- Написать функцию **`getSum`** которая принимает два целых числа a и b, которые могут быть положительными или отрицательными, найти сумму всех чисел между ними, включая их, и вернуть ее. Если два числа равны, верните a или b.

```
    getSum(1, 0) === 1   // 1 + 0 = 1
    getSum(1, 2) === 3   // 1 + 2 = 3
    getSum(0, 1) === 1   // 0 + 1 = 1
    getSum(1, 1) === 1   // 1 Since both are same
    getSum(-1, 0) === -1 // -1 + 0 = -1
    getSum(-1, 2) === 2  // -1 + 0 + 1 + 2 = 2
```

#### Task 6 💻

- Напишите функцию **fooboo** которая принимает в качестве аргумента три параметра:

- булевое значение
- функцию **foo** которая выводит в консоль свое имя
- функцию **boo** которая выводит в консоль свое имя

> Если переданное булевое значение **true** запускаем функцию **foo** иначе **boo**

### ADVANCED level

#### Task 1 👨‍🏫

- Реализуйте функцию, который принимает 3 целочисленных значения a, b, c. Функция должна возвращать **true**, если треугольник можно построить со сторонами заданной длины, и **false** в любом другом случае.

#### Task 2 👨‍🏫

- Ваша задача - разбить плитку шоколада заданного размера n x m на маленькие квадраты. Каждый квадрат имеет размер 1x1 и не может быть разбит. Реализуйте функцию, которая будет возвращать минимальное количество необходимых надломов.

- Например, если вам дается плитка шоколада размером 2 x 1, вы можете разделить ее на отдельные квадраты всего за один надлом, но для размера 3 x 1 вы должны сделать два надлома.

- Если входные данные недействительны, вы должны вернуть 0 (поскольку надломы не требуются, если у нас нет шоколада для разделения). Ввод всегда будет неотрицательным целым числом.

#### Task 3 👨‍🏫

- Напишите самовызывающуюся функцию подсчёта факторила числа: число должно передаваться как параметр функции
