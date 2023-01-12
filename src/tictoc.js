import React, { useEffect,useState } from 'react';
import ReactDOM from 'react-dom';

const rowStyle = {
  'display': 'flex',
  'flex-wrap':'wrap'
}

const squareStyle = {
  'width':'60px',
  'height':'60px',
  'backgroundColor': '#ddd',
  'margin': '4px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '20px',
  'color': 'green'
}

const boardStyle = {
  'backgroundColor': '#eee',
  'width': '208px',
  'alignItems': 'center',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid'
}

const containerStyle = {
  'display': 'flex',
  'alignItems': 'center',
  'flexDirection': 'column'
}

const instructionsStyle = {
  'marginTop': '5px',
  'marginBottom': '5px',
  'fontWeight': 'bold',
  'fontSize': '16px',
}

const buttonStyle = {
  'marginTop': '15px',
  'marginBottom': '16px',
  'width': '80px',
  'height': '40px',
  'backgroundColor': '#8acaca',
  'color': 'white',
  'fontSize': '16px',
}

const init=["","","","","","","","",""]
function Square() {
const check={"0":[[0,1,2],[0,3,6],[0,4,8]],"1":[[0,1,2],[1,4,7]],"2":[[0,1,2],[2,4,6],[2,5,8]],
             "3":[[0,3,6],[3,4,5]],"4":[[0,4,8],[2,4,6],[1,4,7],[3,4,5]],"5":[[2,5,8],[3,4,5]],
             "6":[[0,3,6],[2,4,6],[6,7,8]],"7":[[1,4,7],[6,7,8]],"8":[[0,4,8],[6,7,8],[2,5,8]]
             }

     const[board,setBoard]=useState([...init])
     const[player,setPlayer]=useState('x')
     const[amm,setamm]=useState(-1)

      const change=(m)=>{
        if (board[m] !=="")
        return;
        setamm(m);
        setBoard((board)=>{
       return board.map((val,i)=>{
       if(i===m)
       return player;
       return val;
     })
     })
     setPlayer(player ==="x"? "o":"x")
     }
     console.log(board)


     const checkwin=()=>{
       if (amm<0) return;
       const checker=check[amm];
       const previousplayer=player==="x"?"o":"x";
       checker.forEach((arr)=>{
        if(board[arr[0]]===previousplayer && board[arr[1]]===previousplayer && board[arr[2]]===previousplayer){
          alert(`${previousplayer} won the game`);
          reset();
        }
         })

       console.log(check[amm],previousplayer)
     }

     useEffect(()=>{
       checkwin();
       },[board]);
      
      const  reset=()=>{
        setBoard([...init]);
        setPlayer("x");
        setamm(-1)
        }


  return (
    <>
    <div style={containerStyle} className="gameBoard">
    <div id="statusArea" className="status" style={instructionsStyle}>Next player: <span>{player}</span></div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>Winner: <span>None</span></div>
    <button style={buttonStyle} onClick={reset}>Reset</button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
    {board.map((mmm,m)=>{return <div  className="square"
      style={squareStyle} onClick={()=>change(m)}>{mmm}</div>})}
      </div>
       </div>
      </div>
    </>
  );
}

function Board() {
  
  return (
    <>
        <Square/>
    </>
  );
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);