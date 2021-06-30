function lsSong(): void {
    let screen = new Scene();
    
    let song = randomNumber(0, lsSongs.length - 1)

    screen.createBold(`The lip-sync song is... ${lsSongs[song]}!`)

    lsSongs.splice(song, 1);
}

let allLsSongs: Array<string> = [
    "too Makeover the Judges",
    "too Makeover their Opponent",
    "too perform to 'I Wanna Go' by Britney Spears",
    "too design a Look Inspired by the Challenge",
    "too roast their Fellow Competitors",
    "too do a Puzzle",
    "too make a Fictional Server",
    "too compete in a Quiz about the Fandom Wikia",
    "too roast the Judges Panel"
    "too design Cakes and Desserts"
    "too Play Semantris"
    "too Survive a Vote from their Fellow Contestants"
    "too Submit 3 songs from 3 Specific Music Genre's"
    "too Play The Price is Right"
    "too Survive a Speed Test"
    "Survive Improv"
    "Guess poorly drawn Game Logo's"
]

let lsSongs = [...allLsSongs];
dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd