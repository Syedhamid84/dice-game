import React from "react";
import { useState } from "react";
import dicebackground from "../assets/dicebg6.jpg";
import dice1 from "../assets/dice1.png";
import dice2 from "../assets/dice2.png";
import dice3 from "../assets/dice3.png";
import dice4 from "../assets/dice4.png";
import dice5 from "../assets/dice5.png";
import dice6 from "../assets/dice6.png";

const DiceDesign = () => {
    const [showModal, setshowModal] = useState(false);
    const [player1Name, setplayer1Name] = useState("Player 1");
    const [player2Name, setplayer2Name] = useState("Player 2");

    const EditNamesHandle = () => {
        setshowModal(true);
    };
    const HandleCloseModal = () => {
        setshowModal(false);
    };
    const HandleSaveNames = () => {
        setplayer1Name(
            document.getElementById("player1InputName").value || "player 1"
        );
        setplayer2Name(
            document.getElementById("player2InputName").value || "player 2"
        );
        if (player1Name === player2Name) {
            alert("Don't enter Same name");
        }
        else {
            setshowModal(false);

        }

    };
    const getImageSource = (diceNumber) => {
        switch (diceNumber) {
            case 1:
                return dice1;
            case 2:
                return dice2;
            case 3:
                return dice3;
            case 4:
                return dice4;
            case 5:
                return dice5;
            case 6:
                return dice6;
            default:
                return null;
        }
    };
    // const EditNamesHandle2 = () => {
    //     prompt("enter first name");
    // }
    const RollDiceHandle = () => {
        setTimeout(function () {
            var randomNumber1 = Math.floor(Math.random() * 6) + 1;
            var randomNumber2 = Math.floor(Math.random() * 6) + 1;

            document
                .querySelector(".img1")
                .setAttribute("src", getImageSource(randomNumber1));
            document
                .querySelector(".img2")
                .setAttribute("src", getImageSource(randomNumber2));

            if (randomNumber1 === randomNumber2) {
                document.querySelector("h1").innerHTML = "DRAW!";
            } else if (randomNumber1 > randomNumber2) {
                document.querySelector("h1").innerHTML = player1Name + "    " + "WINS!";
            } else {
                document.querySelector("h1").innerHTML = player2Name + "   " + "WINS!";
            }
        }, 2500);
    };

    return (
        <div
            style={{ backgroundImage: `url(${dicebackground})`, backgroundSize: "cover", }}
            className=" flex flex-col items-center gap-4 pt-4 relative h-[100vh] " >
            <h1 className="font-bold text-4xl text-rose-900">DICE GAME</h1>
            <p className="font-bold text-4xl mt-4 text-rose-900">Let's Play</p>

            <div className="flex gap-32  mt-10 p-4">
                <div className="flex flex-col gap-2 ">
                    <p className="text-center text-xl text-rose-800">{player1Name} </p>
                    <img src={dice6} alt="" className="img1" />
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-center text-xl text-rose-800">{player2Name} </p>

                    <img src={dice6} alt="" className="img2" />
                </div>
            </div>

            <button
                onClick={RollDiceHandle}
                className="px-5 py-3 border-2 hover:border-red-500 hover:text-white hover:bg-black mt-4 rounded-xl text-lg "
            >
                Roll the Dice
            </button>
            <button
                onClick={EditNamesHandle}
                className="px-5 py-3 border-2 hover:border-red-500 hover:text-white hover:bg-black rounded-xl text-lg"
            >
                Edit Names
            </button>
            {
                showModal && (
                    <div className="flex flex-col gap-2 justify-center border border-gray bg-white rounded-lg p-8 mb-2 absolute top-2 right-12">
                        <p>Change Player 1 name</p>
                        <input
                            id="player1InputName"
                            type="text"
                            name="player1"
                            defaultValue={player1Name}
                            className="w-full border  border-black"
                        />
                        <p>Change Player 2 name</p>
                        <input
                            id="player2InputName"
                            type="text"
                            name="player1"
                            defaultValue={player2Name}
                            className="w-full border  border-black"
                        />
                        <div className="flex gap-4 justify-between ">
                            <button
                                onClick={HandleSaveNames}
                                className="w-full  px-4 py-2  border border-black mt-4 rounded-lg text-md text-white bg-blue-500"
                            >
                                OK
                            </button>
                            <button
                                onClick={HandleCloseModal}
                                className="w-full px-4 py-2 border border-black mt-4 rounded-lg text-md text-white bg-red-500"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )
            }
        </div >
    );
};
export default DiceDesign;
