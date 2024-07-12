

const fakePic = "https://thispersondoesnotexist.com/";

function realPic() {
    const id = Math.floor((Math.random() * 6 + 1) * 10000);
    return `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`;
}

function game() {
    const imageCon = document.getElementById("images");
    const resultCon = document.getElementById("result");
    const streakCon = document.getElementById("streak")
    let streak = 0;

    function draw() {
        imageCon.innerHTML = "";
        resultCon.innerHTML = "";

        const again = document.createElement("button");
        again.textContent = "Play again!";
        again.onclick = draw;  // Corrected: assign the function reference, not call it immediately

        const rand = Math.random() > 0.5;
        const arr = [rand, !rand];

        for (const isReal of arr) {
            const img = document.createElement("img");
            img.src = isReal ? realPic() : fakePic;

            imageCon.appendChild(img);
            img.onclick = function (){
            resultCon.textContent = isReal
            ? "You are Correct(:"
            : "You are Incorrect:("

            streak = isReal ? streak + 1 : 0
            streakCon.innerHTML = "Streak: " + streak;

            space = document.createElement("space");
            space.innerHTML = "<br/>";
            resultCon.appendChild(space);
            resultCon.appendChild(again);
            }
        
        }
        
    }

    draw();
    }

game();
