class ComedyChallenge implements Challenge {
    generateDescription() {
        let description = document.querySelector("p#Description");

        enum desc1 {
            "a comedy routine about ",
            "a roast about ",
            "a parody commercial about ",
            "a parody trailer about "
        }
        enum desc2 {
            "love.",
            "sex.",
            "crime.",
            "school.",
            "a popular TV series.",
            "Drag Race.",
            "Past Drag Race Contestants.",
            "comedy."
        }

        description!.innerHTML = "The queens will participate in " + desc1[randomNumber(0, 3)] + desc2[randomNumber(0, 7)];
    }

    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getComedy();

        sortPerformances(currentCast);
    }
}

function comedyChallenge(): void {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");

    let challenge = new ComedyChallenge();
    challenge.generateDescription();
    challenge.rankPerformances();

    challengeScreen.createButton("Proceed", "queensPerformances()", "button1");
    comedyChallengeCounter++;
    isDesignChallenge = false;
    episodeChallenges.push("Comedy");
}

class DanceChallenge implements Challenge {
    generateDescription() {
        let description = document.querySelector("p#Description");

        enum desc1 {
            "the history of disco.",
            "RuPaul's biography.",
            "rival dance clubs.",
            "Drag Race."
        }

        description!.innerHTML = "The queens will participate in a dance number about " + desc1[randomNumber(0, 3)];
    }

    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getDance();

        sortPerformances(currentCast);
    }
}

function danceChallenge(): void {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");

    let challenge = new DanceChallenge();
    challenge.generateDescription();
    challenge.rankPerformances();

    challengeScreen.createButton("Proceed", "queensPerformances()", "button1");
    danceChallengeCounter++;
    isDesignChallenge = false;
    episodeChallenges.push("Dance");
}

class DesignChallenge implements Challenge {
    generateDescription() {
        let description = document.querySelector("p#Description");

        enum desc1 {
            "trash.",
            "random items.",
            "dollar store items.",
            "a specific color scheme.",
            "items inspired by past Drag Race contestants.",
            "bags.",
            "wigs.",
            "winter items.",
            "summer items."
        }
        if (currentCast.length == 6 && makeoverCounter == false && team == false) {
            description!.innerHTML = "It's the makeover challenge! The queens will make everyday people their drag sisters!"
        }
        else
            description!.innerHTML = "The queens will do outfits with " + desc1[randomNumber(0, 8)];
    }

    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getDesign();

        sortPerformances(currentCast);
    }
}

function designChallenge(): void {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");

    let challenge = new DesignChallenge();
    challenge.generateDescription();
    challenge.rankPerformances();

    challengeScreen.createButton("Proceed", "queensPerformances()", "button1");
    designChallengeCounter++;
    isDesignChallenge = true;
    if (currentCast.length == 6 && makeoverCounter == false && team == false) {
        episodeChallenges.push("Makeover");
        makeoverCounter = true;
    }
    else
        episodeChallenges.push("Design");
}

class ImprovChallenge implements Challenge {
    generateDescription() {
        let description = document.querySelector("p#Description");

        enum desc1 {
            "political debate.",
            "celebrity interview.",
            "modern morning TV show.",
            "late-night TV show.",
            "new Bossy Rossy episode.",
            "suggestive kids TV show."
        }

        description!.innerHTML = "The queens will improvise in a " + desc1[randomNumber(0, 5)];
    }

    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getImprov();

        sortPerformances(currentCast);
    }
}

function improvChallenge(): void {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");

    let challenge = new ImprovChallenge();
    challenge.generateDescription();
    challenge.rankPerformances();

    challengeScreen.createButton("Proceed", "queensPerformances()", "button1");
    improvChallengeCounter++;
    isDesignChallenge = false;
    episodeChallenges.push("Improv");
}

//TODO: team challenges here

//SPECIAL CHALLENGES:
class SnatchGame implements Challenge {
    generateDescription() {
        let description = document.querySelector("p#Description");

        description!.innerHTML = "Today's challenge is... SNATCH GAME!! The queens will do funny celebrity impersonations!";
    }

    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getSnatch();
    }
}

function snatchGame(): void {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");

    let challenge = new SnatchGame();
    challenge.generateDescription();
    challenge.rankPerformances();

    challengeScreen.createButton("Proceed", "queensPerformances()", "button1");
    isDesignChallenge = false;
    episodeChallenges.push("Snatch");
}

class Rusical implements Challenge {
    generateDescription() {
        let description = document.querySelector("p#Description");

        enum desc {
            "social media.",
            "a pop celebrity.",
            "a political figure.",
            "past Drag Race contestans.",
            "cancel culture.",
            "RuPaul's music carreer."
        }

        description!.innerHTML = "Today's challenge is... THE RUSICAL!! The queens will do a musical about " + desc[randomNumber(0, 5)];
    }

    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getRusical();
    }
}

function rusical(): void {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");

    let challenge = new Rusical();
    challenge.generateDescription();
    challenge.rankPerformances();

    challengeScreen.createButton("Proceed", "queensPerformances()", "button1");
    isDesignChallenge = false;
    episodeChallenges.push("Rusical");
}

class Ball implements Challenge {
    generateDescription() {
        let description = document.querySelector("p#Description");

        enum desc1 {
            "Executive realness, ",
            "Party night, ",
            "Summer, ",
            "Elegant, ",
            "Sweet 16, ",
            "Black and white, ",
            "Winter, "
        }
        enum desc2 {
            "Antique, ",
            "Rainbown, ",
            "Rich, ",
            "Space, ",
            "Wild, ",
            "Water, "
        }
        enum desc3 {
            "Ice queen.",
            "Futuristic.",
            "Fire.",
            "Princess.",
            "Jewels.",
            "Flowers"
        }

        description!.innerHTML = "Today's challenge is... THE BALL! The queens will bring three looks to the runway! The themes are: " + desc1[randomNumber(0, 6)] + desc2[randomNumber(0, 5)] + desc3[randomNumber(0, 5)];
    }

    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getBall();
    }
}

function ball(): void {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");

    let challenge = new Ball();
    challenge.generateDescription();
    challenge.rankPerformances();

    challengeScreen.createButton("Proceed", "queensPerformances()", "button1");
    isDesignChallenge = true;
    ballCounter = true;
    episodeChallenges.push("Ball");
}

class Rumix implements Challenge {
    generateDescription() {
        let description = document.querySelector("p#Description");

        enum desc1 {
            "one of RuPaul's singles!",
            "an original song!"
        }

        description!.innerHTML = "Today's challenge is... the rumix! The queens will make a verse and a coreography for " + desc1[randomNumber(0, 1)];
    }

    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getRumix();
    }
}

function rumix(): void {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");

    let challenge = new Rumix();
    challenge.generateDescription();
    challenge.rankPerformances();

    challengeScreen.createButton("Proceed", "queensPerformances()", "button1");
    isDesignChallenge = false;
    episodeChallenges.push("Rumix");
}

class TalentShow implements Challenge {
    generateDescription() {
        let description = document.querySelector("p#Description");

        description!.innerHTML = "In this first challenge, the queens will prove themselves in a talent show, where they bring all they've got!";
    }

    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getTalentShow();
    }
}

function talentshow(): void {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");

    let challenge = new TalentShow();
    challenge.generateDescription();
    challenge.rankPerformances();

    challengeScreen.createButton("Proceed", "queensPerformances()", "button1");
    isDesignChallenge = true;
    episodeChallenges.push("Talent");
}

//performance:
function queensPerformances(): void {
    //remove description button:
    let button1 = document.querySelector("button#button1");
    button1!.remove();

    let performanceScreen = new Scene();
    performanceScreen.createHorizontalLine();
    performanceScreen.createBigText("Queens' performances...");

    performanceScreen.createBold("", "excellent");
    performanceScreen.createBold("", "good");
    performanceScreen.createBold("", "ok");
    performanceScreen.createBold("", "bad");
    performanceScreen.createBold("", "horrible");

    let excellent = document.querySelector("b#excellent");
    let good = document.querySelector("b#good");
    let ok = document.querySelector("b#ok");
    let bad = document.querySelector("b#bad");
    let horrible = document.querySelector("b#horrible");

    for (let i = 0; i < currentCast.length; i++) {
        if (currentCast[i].performanceScore < 6)
            excellent!.innerHTML += currentCast[i].getName() + ", ";
        else if (currentCast[i].performanceScore >= 6 && currentCast[i].performanceScore < 16)
            good!.innerHTML += currentCast[i].getName() + ", ";
        else if (currentCast[i].performanceScore >= 16 && currentCast[i].performanceScore < 26)
            ok!.innerHTML += currentCast[i].getName() + ", ";
        else if (currentCast[i].performanceScore >= 26 && currentCast[i].performanceScore < 31)
            bad!.innerHTML += currentCast[i].getName() + ", ";
        else if (currentCast[i].performanceScore >= 31 && currentCast[i].performanceScore < 36)
            horrible!.innerHTML += currentCast[i].getName() + ", ";
    }
    
    if (excellent!.innerHTML != '')
        excellent!.innerHTML += "slayed the challenge!";
    if (good!.innerHTML != '')
        good!.innerHTML += "did great!";
    if (ok!.innerHTML != '')
        ok!.innerHTML += "did ok.";
    if (bad!.innerHTML != '')
        bad!.innerHTML += "did bad...";
    if (horrible!.innerHTML != '')
        horrible!.innerHTML += "flopped the challenge...";

    if (isDesignChallenge)
        performanceScreen.createButton("Proceed", "judging()");
    else
        performanceScreen.createButton("Proceed", "runway()", "button2");
}

//runway:

function runway(): void {
    let runwayScreen = new Scene();
    let button2 = document.querySelector("button#button2");
    button2!.remove();
    runwayScreen.createHeader("Runway!");

    enum desc {
        "feathers.",
        "fascinator.",
        "pink.",
        "purple.",
        "caftan.",
        "trains.",
        "yellow.",
        "white.",
        "black.",
        "ugly dress.",
        "naughty.",
        "crazy sexy cool.",
        "country.",
        "phoenix.",
        "silver.",
        "2 in 1.",
        "surprise!",
        "gold.",
        "blue.",
        "fish",
        "butch.",
        "amazon"
    }

    runwayScreen.createParagraph("The queens will bring it to the runway!");