class Team extends Queen {
    public QueenA: Queen;
    public QueenB: Queen;
    public QueenC: Queen;
    public QueenD: Queen

    public name: string;

    public lipsyncQueen: Queen;

    constructor (QueenA: Queen, QueenB: Queen, QueenC: Queen, QueenD: Queen) {
        let Name: string;


    @@ -20,17 +18,17 @@ class Team extends Queen {
            Name = "Team Mrs. " + QueenA._name.split(" ")[0] + " Davis";
        else if (QueenD == kasha)
            Name = "Team Mrs. " + QueenA._name.split(" ")[0] + " Davis";
        else if ((QueenA || QueenB || QueenC || QueenD) == latrice && ((QueenA && QueenB && QueenC && QueenD) == manila))
            Name = "Team Latrila";
        else if ((QueenA || QueenB || QueenC || QueenD) == yara && ((QueenA && QueenB && QueenC && QueenD) == alexis))
            Name = "Team Yarlexis";
        else if ((QueenA || QueenB || QueenC || QueenD) == chad && ((QueenA && QueenB && QueenC && QueenD) == shannel))
            Name = "Team Shad";
        else if ((QueenA || QueenB || QueenC || QueenD) == ninaf && ((QueenA && QueenB && QueenC && QueenD) == tammie))
            Name = "Team Brown Flowers";
        else if ((QueenA || QueenB || QueenC || QueenD) == raven && ((QueenA && QueenB && QueenC && QueenD) == jujubee))
            Name = "Team Rujubee";
        else if ((QueenA || QueenB || QueenC || QueenD) == mimi && ((QueenA && QueenB && QueenC && QueenD) == pandora))
            Name = "Team Mandora";
        else if (QueenA._name.split(' ')[0].length == 3 && QueenB._name.split(' ')[0].length > 3)
            Name = "Team " + QueenA._name.split(' ')[0] + QueenB._name.split(' ')[0].slice(QueenB._name.split(' ')[0].length - 4, QueenB._name.split(' ')[0].length);
    @@ -41,12 +39,12 @@ class Team extends Queen {
        else 
            Name = "Team " + QueenA._name.split(' ')[0].slice(0, 4) + QueenB._name.split(' ')[0].slice(QueenB._name.split(' ')[0].length - 4, QueenB._name.split(' ')[0].length)

        super(Name, ((QueenA._actingStat + QueenB._actingStat) / 4), 
        ((QueenA._comedyStat + QueenB._comedyStat) / 4), 
        ((QueenA._danceStat + QueenB._danceStat) / 4), 
        ((QueenA._designStat + QueenB._designStat) / 4), 
        ((QueenA._improvStat + QueenB._improvStat) / 4), 
        ((QueenA._runwayStat + QueenB._runwayStat) / 4), 0);
        this.QueenA = QueenA;
        this.QueenB = QueenB;
    }