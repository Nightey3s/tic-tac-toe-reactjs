/* Tutorial from: https://reactjs.org/tutorial/tutorial.html
 This tutorial teaches you how to create a simple tic-tac-toe game using React
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* Square Class */
//The Square component renders a single <button>
/*class Square extends React.Component {
  //a constructor to the class to initialize the state
//  constructor (props){
//    super(props);
//      this.state = {
//          value: null,
//      };
//    }
    
  render() {
    return (
            <button className="square"
            onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}*/

function Square(props) {
    return (
            <button className="square" onClick={props.onClick}>
            {props.value}
            </button>
            );
}

/* Board Class */
//Board renders 9 squares
class Board extends React.Component {
    //constructor for board - filled with nulls
    /* Should look as below when filled
     [
       'O', null, 'X',
       'X', 'X', 'O',
       'O', null, null,
     ]
     */
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }
    
    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares:squares,
            xIsNext: !this.state.xIsNext,
        });
    }
    
  renderSquare(i) {
    //return <Square />;
      return <Square
      value={this.state.squares[i]}
      onClick= {() => this.handleClick(i)}/>;
  }

  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

/* Game Class*/
//Game component renders a board with placeholder values
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
