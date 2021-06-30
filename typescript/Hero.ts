class Queen {
    public _name: string;
    public _actingStat: number;
    public _comedyStat: number;
    public _danceStat: number;
    public _designStat: number;
    public _improvStat: number;
    public _runwayStat: number;
    public _lipsyncStat: number;

    public trackRecord: Array<string> = [];
    public runwayScore: number = 0;
    public lipsyncScore: number = 0;
    public performanceScore: number = 0;
    public finaleScore: number = 0;
    public winCount: number = 0;
    public favoritism: number = 0;
    public unfavoritism: number = 0;

    public lipstick: Queen;
    public votes: number = 0;

    constructor(name: string, acting: number, comedy: number, dance: number, design: number, improv: number, runway: number, lipsync: number) {
        this._name = name;
        this._actingStat = acting;
        this._comedyStat = comedy;
        this._danceStat = dance;
        this._designStat = design;
        this._improvStat = improv;
        this._runwayStat = runway;
        this._lipsyncStat = lipsync;
    }

    private _calculateScores(min: number, max: number, stat: number = 0): number {
        let score = randomNumber(min, max);

        return score - stat;
    }

    public getName(): string {
        return this._name;
    }
    public getLipSyncStat(): number {
        return this._lipsyncStat;
    }

    public getActing(): void {
        this.performanceScore = this._calculateScores(15, 35, this._actingStat);
    }
    public getComedy(): void {
        this.performanceScore = this._calculateScores(15, 35, this._comedyStat);
    }
    public getDance(): void {
        this.performanceScore = this._calculateScores(15, 35, this._danceStat);
    }
    public getDesign(): void {
        this.performanceScore = this._calculateScores(15, 35, this._designStat);
    }
    public getImprov(): void {
        this.performanceScore = this._calculateScores(15, 35, this._improvStat);
    }
    //special 'gets':
    public getSnatch(): void {
        this.performanceScore = this._calculateScores(25, 45, this._improvStat + this._comedyStat);
    }
    public getRusical(): void {
        this.performanceScore = this._calculateScores(25, 45, this._danceStat + this._lipsyncStat);
    }
    public getBall(): void {
        this.performanceScore = this._calculateScores(25, 45, this._designStat + this._runwayStat);
    }
    public getRumix(): void {
        this.performanceScore = this._calculateScores(25, 45, this._danceStat + this._improvStat);
    }
    public getTalentShow(): void {
        this.performanceScore = this._calculateScores(40, 70, this._actingStat + this._comedyStat + this._danceStat + this._designStat + this._improvStat + this._lipsyncStat);
    }
    public getFinale():void {
        this.finaleScore = this.favoritism - this.unfavoritism;
    }

    public getRunway(): void {
        this.runwayScore = this._calculateScores(12, 35, this._runwayStat);
    }
    public getLipsync(): void {
        this.lipsyncScore = this._calculateScores(0, this._lipsyncStat, this.unfavoritism) + this.favoritism;
    }
    public getASLipsync(): void {
        this.lipsyncScore = this._calculateScores(0, this._lipsyncStat);
    }
    public addToTrackRecord(placement: string): void {
        this.trackRecord.push(placement);
    }
}

//QUEENS:

//SEASON 1:

let broccoli = new Queen("Broccoli", 1, 1, 1, 1, 1, 1, 1);
let dynasty = new Queen("Dynasty", 1, 1, 1, 1, 1, 1, 1);
let everest = new Queen("Everest", 1, 1, 1, 1, 1, 1, 1);
let galaxy = new Queen("Galaxy", 1, 1, 1, 1, 1, 1, 1);
let hamster = new Queen("Hamsterpants", 1, 1, 1, 1, 1, 1, 1);
let hora = new Queen("Hora", 1, 1, 1, 1, 1, 1, 1);
let monica = new Queen("Monica", 1, 1, 1, 1, 1, 1, 1);
let peachy = new Queen("Peachy", 1, 1, 1, 1, 1, 1, 1);
let persian = new Queen("Persian", 1, 1, 1, 1, 1, 1, 1);
let sora = new Queen("Sora", 1, 1, 1, 1, 1, 1, 1);
let tiffany = new Queen("Tiffany", 1, 1, 1, 1, 1, 1, 1);
let yvette = new Queen("Yvette", 1, 1, 1, 1, 1, 1, 1);
let us_season1 = [broccoli, dynasty, everest, galaxy, hamster, hora, monica, peachy, persian, sora, tiffany, yvette];

//SEASON 2:
let annie = new Queen("Annie", 1, 1, 1, 1, 1, 1, 1);
let colton = new Queen("Colton", 1, 1, 1, 1, 1, 1, 1);
let crystal = new Queen("Crystal", 1, 1, 1, 1, 1, 1, 1);
let doge = new Queen("doge", 1, 1, 1, 1, 1, 1, 1);
let femme = new Queen("Femme", 1, 1, 1, 1, 1, 1, 1);
let geo = new Queen("Geo", 1, 1, 1, 1, 1, 1, 1);
let highlicious = new Queen("Highlicious", 1, 1, 1, 1, 1, 1, 1);
let leo = new Queen("Leo", 1, 1, 1, 1, 1, 1, 1);
let lilly = new Queen("Lilly", 1, 1, 1, 1, 1, 1, 1);
let luca = new Queen("Luca", 1, 1, 1, 1, 1, 1, 1);
let quiche = new Queen("Quiche", 1, 1, 1, 1, 1, 1, 1);
let tripp = new Queen("Tripp", 1, 1, 1, 1, 1, 1, 1);
let vee = new Queen("Vee", 1, 1, 1, 1, 1, 1, 1);
let zoey = new Queen("Zoey", 1, 1, 1, 1, 1, 1, 1);
let us_season2 = [annie, colton, crystal, doge, femme, geo, highlicious, leo, lilly, luca, quiche, tripp, vee, zoey];

//SEASON 3:
let alex = new Queen("Alex", 1, 1, 1, 1, 1, 1, 1);
let ana = new Queen("Ana", 1, 1, 1, 1, 1, 1, 1);
let andrei = new Queen("Andrei", 1, 1, 1, 1, 1, 1, 1);
let astatine = new Queen("Astatine", 1, 1, 1, 1, 1, 1, 1);
let brenna = new Queen("Brenna", 1, 1, 1, 1, 1, 1, 1);
let cub = new Queen("Cubic", 1, 1, 1, 1, 1, 1, 1);
let lukey = new Queen("Lukey", 1, 1, 1, 1, 1, 1, 1);
let roan = new Queen("roan", 1, 1, 1, 1, 1, 1, 1);
let sprinkle = new Queen("Sprinkle", 1, 1, 1, 1, 1, 1, 1);
let safari = new Queen("Safari", 1, 1, 1, 1, 1, 1, 1);
let wendy = new Queen("Wendy", 1, 1, 1, 1, 1, 1, 1);
let us_season3 = [alex, ana, andrei, astatine, brenna, cub, lukey, roan, sprinkle, safari, wendy];

//ALL STARS 1:
let allstars_1 = [leo, femme, yvette, luca, crystal, persian, hora, vee];

//all possible queens:
let allQueens: Array<Queen> = [
broccoli, dynasty, everest, galaxy, hamster, hora, monica, peachy, persian, sora, tiffany, yvette,
annie, colton, crystal, doge, femme, geo, high, leo, lilly, luca, quiche, tripp, vee, zoey,
alex, ana, andrei, astatine, brenna, cub, lukey, roan, sprinkle, safari, wendy
].sort((a, b) => a.getName().toLowerCase().localeCompare(b.getName().toLowerCase()));

let allQueensCopy: Array<Queen> = [];