import './MoreMoves.css';

function MoreMoves(props) {
  return (
    <div className={`moreMoves ${!props.visible && 'moreMoves_hiden_true'}`}>
      <button className='moreMoves__button' type="button" onClick={props.handleClick}>Ещё</button>
    </div>
  );
}

export default MoreMoves;