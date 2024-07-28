var movenumber = 1;
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");
const results = document.getElementById("result");
const popup = document.getElementById("popup");
const moves = document.querySelectorAll(".box").forEach(function (item) {
  item.addEventListener("click", function (e) {
    const onClick = function () {
      if (movenumber === 1) {
        console.log(this.id);
        const boxid = document.getElementById(this.id);
        boxid.innerText = "X";
        movenumber++;
        console.log(movenumber);
      } else if (movenumber === 2) {
        console.log(this.id);
        const boxid = document.getElementById(this.id);
        boxid.innerText = "O";
        movenumber++;
        console.log(movenumber);
      } else if (movenumber === 3) {
        console.log(this.id);
        const boxid = document.getElementById(this.id);
        boxid.innerText = "X";
        movenumber++;
        console.log(movenumber);
      } else if (movenumber === 4) {
        console.log(this.id);
        const boxid = document.getElementById(this.id);
        boxid.innerText = "O";
        movenumber++;
        console.log(movenumber);
      } else if (movenumber === 5) {
        console.log(this.id);
        const boxid = document.getElementById(this.id);
        boxid.innerText = "X";
        movenumber++;
        console.log(movenumber);
        if (
          box1.innerText == box4.innerText &&
          box1.innerText == box7.innerText &&
          !box1.innerText == ""
        ) {
          if (box1.innerText === "X") {
            results.innerText = "X Won!";
            popup.classList.remove("hidden");
          } else {
            results.innerText = "O Won!";
            popup.classList.remove("hidden");
          }
        } else if (
          box2.innerText == box5.innerText &&
          box2.innerText == box8.innerText &&
          !box2.innerText == ""
        ) {
          console.log("win, 258");
          if (box2.innerText == "X") {
            results.innerText = "X Won!";
            popup.classList.remove("hidden");
          }
          if (box2.innerText == "O") {
            results.innerText = "O Won!";
            popup.classList.remove("hidden");
          }
        } else if (
          box3.innerText == box6.innerText &&
          box3.innerText == box9.innerText &&
          !box3.innerText == ""
        ) {
          console.log("win, 369");
          if (box3.innerText == "X") {
            results.innerText = "X Won!";
            popup.classList.remove("hidden");
          } else if (box3.innerText == "O") {
            results.innerText = "O Won!";
            popup.classList.remove("hidden");
          }
        } else if (
          box1.innerText == box2.innerText &&
          box1.innerText == box3.innerText &&
          !box1.innerText == ""
        ) {
          console.log("win, 123");
          if (box1.innerText == "X") {
            results.innerText = "X Won!";
            popup.classList.remove("hidden");
          } else if (box1.innerText == "O") {
            results.innerText = "O Won!";
            popup.classList.remove("hidden");
          }
        } else if (
          box4.innerText == box5.innerText &&
          box4.innerText == box6.innerText &&
          !box4.innerText == ""
        ) {
          console.log("win, 456");
          if (box4.innerText == "X") {
            results.innerText = "X Won!";
            popup.classList.remove("hidden");
          } else if (box4.innerText == "O") {
            results.innerText = "O Won!";
            popup.classList.remove("hidden");
          }
        } else if (
          box7.innerText == box8.innerText &&
          box7.innerText == box9.innerText &&
          !box7.innerText == ""
        ) {
          console.log("win, 789");
          if (box7.innerText == "X") {
            results.innerText = "X Won!";
            popup.classList.remove("hidden");
          } else if (box7.innerText == "O") {
            results.innerText = "O Won!";
            popup.classList.remove("hidden");
          }
        } else if (
          box1.innerText == box5.innerText &&
          box1.innerText == box9.innerText &&
          !box1.innerText == ""
        ) {
          console.log("win, 159");
          if (box1.innerText == "X") {
            results.innerText = "X Won!";
            popup.classList.remove("hidden");
          } else if (box1.innerText == "O") {
            results.innerText = "O Won!";
            popup.classList.remove("hidden");
          }
        } else if (
          box3.innerText == box5.innerText &&
          box3.innerText == box7.innerText &&
          !box3.innerText == ""
        ) {
          console.log("win, 357");
          if (box3.innerText == "X") {
            results.innerText = "X Won!";
            popup.classList.remove("hidden");
          } else if (box3.innerText == "O") {
            results.innerText = "O Won!";
            popup.classList.remove("hidden");
          }
        }
      } else if (movenumber === 6) {
        console.log(this.id);
        const boxid = document.getElementById(this.id);
        boxid.innerText = "O";
        movenumber++;
        console.log(movenumber);
        if (
          box1.innerText == box4.innerText &&
          box1.innerText == box7.innerText &&
          !box1.innerText == ""
        ) {
          if (box1.innerText === "X") {
            results.innerText = "X Won!";
            popup.classList.remove("hidden");
          } else {
            results.innerText = "O Won!";
            popup.classList.remove("hidden");
          }
        } else if (
          box2.innerText == box5.innerText &&
          box2.innerText == box8.innerText &&
          !box2.innerText == ""
        ) {
          console.log("win, 258");
          if (box2.innerText == "X") {
            results.innerText = "X Won!";
            popup.classList.remove("hidden");
          }
          if (box2.innerText == "O") {
            results.innerText = "O Won!";
            popup.classList.remove("hidden");
          }
        } else if (
          box3.innerText == box6.innerText &&
          box3.innerText == box9.innerText &&
          !box3.innerText == ""
        ) {
          console.log("win, 369");
          if (box3.innerText == "X") {
            results.innerText = "X Won!";
            popup.classList.remove("hidden");
          } else if (box3.innerText == "O") {
            results.innerText = "O Won!";
            popup.classList.remove("hidden");
          }
        } else if (
          box1.innerText == box2.innerText &&
          box1.innerText == box3.innerText &&
          !box1.innerText == ""
        ) {
          console.log("win, 123");
          if (box1.innerText == "X") {
            results.innerText = "X Won!";
            popup.classList.remove("hidden");
          } else if (box1.innerText == "O") {
            results.innerText = "O Won!";
            popup.classList.remove("hidden");
          }
        } else if (
          box4.innerText == box5.innerText &&
          box4.innerText == box6.innerText &&
          !box4.innerText == ""
        ) {
          console.log("win, 456");
          if (box4.innerText == "X") {
            results.innerText = "X Won!";
            popup.classList.remove("hidden");
          } else if (box4.innerText == "O") {
            results.innerText = "O Won!";
            popup.classList.remove("hidden");
          }
        } else if (
          box7.innerText == box8.innerText &&
          box7.innerText == box9.innerText &&
          !box7.innerText == ""
        ) {
          console.log("win, 789");
          if (box7.innerText == "X") {
            results.innerText = "X Won!";
            popup.classList.remove("hidden");
          } else if (box7.innerText == "O") {
            results.innerText = "O Won!";
            popup.classList.remove("hidden");
          }
        } else if (
          box1.innerText == box5.innerText &&
          box1.innerText == box9.innerText &&
          !box1.innerText == ""
        ) {
          console.log("win, 159");
          if (box1.innerText == "X") {
            results.innerText = "X Won!";
            popup.classList.remove("hidden");
          } else if (box1.innerText == "O") {
            results.innerText = "O Won!";
            popup.classList.remove("hidden");
          }
        } else if (
          box3.innerText == box5.innerText &&
          box3.innerText == box7.innerText &&
          !box3.innerText == ""
        ) {
          console.log("win, 357");
          if (box3.innerText == "X") {
            results.innerText = "X Won!";
            popup.classList.remove("hidden");
          } else if (box3.innerText == "O") {
            results.innerText = "O Won!";
            popup.classList.remove("hidden");
          }
        }
      } else if (movenumber === 7) {
        console.log(this.id);
        const boxid = document.getElementById(this.id);
        boxid.innerText = "X";
        movenumber++;
        console.log(movenumber);
        if (
          box1.innerText == box4.innerText &&
          box1.innerText == box7.innerText &&
          !box1.innerText == ""
        ) {
          if (box1.innerText === "X") {
            results.innerText = "X Won!";
            popup.classList.remove("hidden");
          } else {
            results.innerText = "O Won!";
            popup.classList.remove("hidden");
          }
        } else if (
          box2.innerText == box5.innerText &&
          box2.innerText == box8.innerText &&
          !box2.innerText == ""
        ) {
          console.log("win, 258");
          if (box2.innerText == "X") {
            results.innerText = "X Won!";
            popup.classList.remove("hidden");
          }
          if (box2.innerText == "O") {
            results.innerText = "O Won!";
            popup.classList.remove("hidden");
          }
        } else if (
          box3.innerText == box6.innerText &&
          box3.innerText == box9.innerText &&
          !box3.innerText == ""
        ) {
          console.log("win, 369");
          if (box3.innerText == "X") {
            results.innerText = "X Won!";
            popup.classList.remove("hidden");
          } else if (box3.innerText == "O") {
            results.innerText = "O Won!";
            popup.classList.remove("hidden");
          }
        } else if (
          box1.innerText == box2.innerText &&
          box1.innerText == box3.innerText &&
          !box1.innerText == ""
        ) {
          console.log("win, 123");
          if (box1.innerText == "X") {
            results.innerText = "X Won!";
            popup.classList.remove("hidden");
          } else if (box1.innerText == "O") {
            results.innerText = "O Won!";
            popup.classList.remove("hidden");
          }
        } else if (
          box4.innerText == box5.innerText &&
          box4.innerText == box6.innerText &&
          !box4.innerText == ""
        ) {
          console.log("win, 456");
          if (box4.innerText == "X") {
            results.innerText = "X Won!";
            popup.classList.remove("hidden");
          } else if (box4.innerText == "O") {
            results.innerText = "O Won!";
            popup.classList.remove("hidden");
          }
        } else if (
          box7.innerText == box8.innerText &&
          box7.innerText == box9.innerText &&
          !box7.innerText == ""
        ) {
          console.log("win, 789");
          if (box7.innerText == "X") {
            results.innerText = "X Won!";
            popup.classList.remove("hidden");
          } else if (box7.innerText == "O") {
            results.innerText = "O Won!";
            popup.classList.remove("hidden");
          }
        } else if (
          box1.innerText == box5.innerText &&
          box1.innerText == box9.innerText &&
          !box1.innerText == ""
        ) {
          console.log("win, 159");
          if (box1.innerText == "X") {
            results.innerText = "X Won!";
            popup.classList.remove("hidden");
          } else if (box1.innerText == "O") {
            results.innerText = "O Won!";
            popup.classList.remove("hidden");
          }
        } else if (
          box3.innerText == box5.innerText &&
          box3.innerText == box7.innerText &&
          !box3.innerText == ""
        ) {
          console.log("win, 357");
          if (box3.innerText == "X") {
            results.innerText = "X Won!";
            popup.classList.remove("hidden");
          } else if (box3.innerText == "O") {
            results.innerText = "O Won!";
            popup.classList.remove("hidden");
          }
        }
      } else if (movenumber === 8) {
        console.log(this.id);
        const boxid = document.getElementById(this.id);
        boxid.innerText = "O";
        movenumber++;
        console.log(movenumber);
        if (
          box1.innerText == box4.innerText &&
          box1.innerText == box7.innerText &&
          !box1.innerText == ""
        ) {
          if (box1.innerText === "X") {
            results.innerText = "X Won!";
            popup.classList.remove("hidden");
          } else {
            results.innerText = "O Won!";
            popup.classList.remove("hidden");
          }
        } else if (
          box2.innerText == box5.innerText &&
          box2.innerText == box8.innerText &&
          !box2.innerText == ""
        ) {
          console.log("win, 258");
          if (box2.innerText == "X") {
            results.innerText = "X Won!";
            popup.classList.remove("hidden");
          }
          if (box2.innerText == "O") {
            results.innerText = "O Won!";
            popup.classList.remove("hidden");
          }
        } else if (
          box3.innerText == box6.innerText &&
          box3.innerText == box9.innerText &&
          !box3.innerText == ""
        ) {
          console.log("win, 369");
          if (box3.innerText == "X") {
            results.innerText = "X Won!";
            popup.classList.remove("hidden");
          } else if (box3.innerText == "O") {
            results.innerText = "O Won!";
            popup.classList.remove("hidden");
          }
        } else if (
          box1.innerText == box2.innerText &&
          box1.innerText == box3.innerText &&
          !box1.innerText == ""
        ) {
          console.log("win, 123");
          if (box1.innerText == "X") {
            results.innerText = "X Won!";
            popup.classList.remove("hidden");
          } else if (box1.innerText == "O") {
            results.innerText = "O Won!";
            popup.classList.remove("hidden");
          }
        } else if (
          box4.innerText == box5.innerText &&
          box4.innerText == box6.innerText &&
          !box4.innerText == ""
        ) {
          console.log("win, 456");
          if (box4.innerText == "X") {
            results.innerText = "X Won!";
            popup.classList.remove("hidden");
          } else if (box4.innerText == "O") {
            results.innerText = "O Won!";
            popup.classList.remove("hidden");
          }
        } else if (
          box7.innerText == box8.innerText &&
          box7.innerText == box9.innerText &&
          !box7.innerText == ""
        ) {
          console.log("win, 789");
          if (box7.innerText == "X") {
            results.innerText = "X Won!";
            popup.classList.remove("hidden");
          } else if (box7.innerText == "O") {
            results.innerText = "O Won!";
            popup.classList.remove("hidden");
          }
        } else if (
          box1.innerText == box5.innerText &&
          box1.innerText == box9.innerText &&
          !box1.innerText == ""
        ) {
          console.log("win, 159");
          if (box1.innerText == "X") {
            results.innerText = "X Won!";
            popup.classList.remove("hidden");
          } else if (box1.innerText == "O") {
            results.innerText = "O Won!";
            popup.classList.remove("hidden");
          }
        } else if (
          box3.innerText == box5.innerText &&
          box3.innerText == box7.innerText &&
          !box3.innerText == ""
        ) {
          console.log("win, 357");
          if (box3.innerText == "X") {
            results.innerText = "X Won!";
            popup.classList.remove("hidden");
          } else if (box3.innerText == "O") {
            results.innerText = "O Won!";
            popup.classList.remove("hidden");
          }
        }
      } else if (movenumber === 9) {
        console.log(this.id);
        const boxid = document.getElementById(this.id);
        boxid.innerText = "X";
        movenumber++;
        console.log(movenumber);
        if (
          box1.innerText == box4.innerText &&
          box1.innerText == box7.innerText &&
          !box1.innerText == ""
        ) {
          if (box1.innerText === "X") {
            results.innerText = "X Won!";
            popup.classList.remove("hidden");
          } else {
            results.innerText = "O Won!";
            popup.classList.remove("hidden");
          }
        } else if (
          box2.innerText == box5.innerText &&
          box2.innerText == box8.innerText &&
          !box2.innerText == ""
        ) {
          console.log("win, 258");
          if (box2.innerText == "X") {
            results.innerText = "X Won!";
            popup.classList.remove("hidden");
          }
          if (box2.innerText == "O") {
            results.innerText = "O Won!";
            popup.classList.remove("hidden");
          }
        } else if (
          box3.innerText == box6.innerText &&
          box3.innerText == box9.innerText &&
          !box3.innerText == ""
        ) {
          console.log("win, 369");
          if (box3.innerText == "X") {
            results.innerText = "X Won!";
            popup.classList.remove("hidden");
          } else if (box3.innerText == "O") {
            results.innerText = "O Won!";
            popup.classList.remove("hidden");
          }
        } else if (
          box1.innerText == box2.innerText &&
          box1.innerText == box3.innerText &&
          !box1.innerText == ""
        ) {
          console.log("win, 123");
          if (box1.innerText == "X") {
            results.innerText = "X Won!";
            popup.classList.remove("hidden");
          } else if (box1.innerText == "O") {
            results.innerText = "O Won!";
            popup.classList.remove("hidden");
          }
        } else if (
          box4.innerText == box5.innerText &&
          box4.innerText == box6.innerText &&
          !box4.innerText == ""
        ) {
          console.log("win, 456");
          if (box4.innerText == "X") {
            results.innerText = "X Won!";
            popup.classList.remove("hidden");
          } else if (box4.innerText == "O") {
            results.innerText = "O Won!";
            popup.classList.remove("hidden");
          }
        } else if (
          box7.innerText == box8.innerText &&
          box7.innerText == box9.innerText &&
          !box7.innerText == ""
        ) {
          console.log("win, 789");
          if (box7.innerText == "X") {
            results.innerText = "X Won!";
            popup.classList.remove("hidden");
          } else if (box7.innerText == "O") {
            results.innerText = "O Won!";
            popup.classList.remove("hidden");
          }
        } else if (
          box1.innerText == box5.innerText &&
          box1.innerText == box9.innerText &&
          !box1.innerText == ""
        ) {
          console.log("win, 159");
          if (box1.innerText == "X") {
            results.innerText = "X Won!";
            popup.classList.remove("hidden");
          } else if (box1.innerText == "O") {
            results.innerText = "O Won!";
            popup.classList.remove("hidden");
          }
        } else if (
          box3.innerText == box5.innerText &&
          box3.innerText == box7.innerText &&
          !box3.innerText == ""
        ) {
          console.log("win, 357");
          if (box3.innerText == "X") {
            results.innerText = "X Won!";
            popup.classList.remove("hidden");
          } else if (box3.innerText == "O") {
            results.innerText = "O Won!";
            popup.classList.remove("hidden");
          }
        } else {
          results.innerText = "Tie";
        }
      }
    };
    document.getElementById("box1").onclick = onClick;
    document.getElementById("box2").onclick = onClick;
    document.getElementById("box3").onclick = onClick;
    document.getElementById("box4").onclick = onClick;
    document.getElementById("box5").onclick = onClick;
    document.getElementById("box6").onclick = onClick;
    document.getElementById("box7").onclick = onClick;
    document.getElementById("box8").onclick = onClick;
    document.getElementById("box9").onclick = onClick;
  });
});
