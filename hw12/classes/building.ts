export class Building {
    constructor(public foundationYear: number, public city: string) { }

    public getBuildingInfo() {
        console.log(`This building was found in ${this.foundationYear} in ${this.city}.`);
    }
}