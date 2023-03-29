class Random {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() { }

    public static getRandomName() {
        const names: string[] = ['Ilya', 'Roma', 'Ivan', "Vasiliy", "Jack", "Pasha", "Artur", "Andrei", "David", "Peter", "Alex", "Yan", "Vlad", "Vadim"];
        const randName = Math.floor(Math.random() * names.length);
        const nameValue = names[randName];
        return nameValue;
    }

    public static getRandomJob() {
        const jobs: string[] = ['QA', 'Developer', 'DevOps', "PM", "CEO", "Administrator", "BA", "Owner", "BI", "HR", "Lead", "Tester", "Director"];
        const randJob = Math.floor(Math.random() * jobs.length);
        const jobValue = jobs[randJob];
        return jobValue;
    }

    public static getRandomInRange(max: number, min = 1) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

export { Random };