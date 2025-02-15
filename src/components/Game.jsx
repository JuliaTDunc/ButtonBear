import Bear from "./Bear";
import Button from "./Button";
import "./styles/game.css";

const Game = () => {
    return (
        <div className="game-container">
            <div className="mall">
                <Bear />
                <Button />
            </div>
        </div>
    );
};

export default Game;
