export const getRandomNameGitHub = () => {
    const names: string[] = ['Ilya', 'Roma', 'Ivan', "Vasiliy", "Jack", "Pasha", "Artur", "Andrei", "David", "Peter", "Alex", "Yan", "Vlad", "Vadim"];
    const randName = Math.floor(Math.random() * names.length);
    const nameValue = names[randName];
    return nameValue;
};
