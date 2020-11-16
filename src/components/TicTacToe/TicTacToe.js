import { useState } from 'react';
//import className from 'classnames';
import './TicTacToe.css'
function TicTacToe() {
    const [ currentPlayer, setcurrentPlayer] = useState(1);
    const [ board, setboard] = useState([
        [null,null,null],
        [null,null,null],
        [null,null,null]
    ]);
    //const [ win, setwin] = useState();

    function detecWin(board) {
        if (board[0][0] === board[0][1] && board[0][0] === board[0][2]) {
            return board[0][0];
        }/*
        if (board[1][0] === board[1][1] && board[1][0] === board[1][2]) {
            return board[1][0];
        }*/
        return null;
    }
    function detecNul(board) {
        return board.every(line => line.every(col => col !== null));
        
    }

    function handleClick(event){
        const { col , line} = event.target.dataset;
        if (win || board[col][line] !== null){
            return;
        }
        const cloneBoard = [...board];
        cloneBoard[line][col] = currentPlayer;
        /*const newBoard =board.map((l,i) =>{
            if (i === Number(line)) {
                return l.map((c,j) => j === Number(col ? currentPlayer : c);
            }
            return l;
        });*/
        setboard(cloneBoard);
        setcurrentPlayer(currentPlayer === 1 ? 2 : 1);
        detecWin(cloneBoard);
    }

    function handleRestart(){
        setcurrentPlayer(1);
        setboard([
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ]);
    }

    const winner =detecWin(board);
    const fulls = detecNul(board);
    const win = Boolean(winner);
    const full =Number(fulls)

    return (
    <div className="TicTacToe">
        {board.map((line,i) => (
            <div className="TicTacToe_line" key={i}>
                {line.map((col,j) => (
                    <button key={j} className="TicTacToe__cell" type="button" onClick={handleClick} data-col={j} data-line={i} > {col ? (col === 1 ? "X" : "O") : '\xa0'}</button>
                ))}
            </div>
        ))}
        {(!win && !full) && <div className="TicTacToe_line">Player: {currentPlayer}</div>}
        {(win)&& (
            <div className="TicTacToe_line">
                <div className="TicTacToe_line">Player {winner} win the game</div>
                <button type="button" onClick={handleRestart}>Restart</button>
            </div>
        )}
        {(full)&& (
            <div className="TicTacToe_line">
                <div className="TicTacToe_line">Drow</div>
                <button type="button" onClick={handleRestart}>Restart</button>
            </div>
        )}
    </div>);
}
export default TicTacToe;