import './Preloader.css';


function Preloader(props) {
  return (
    <div className={`preloader ${props.isOpen && 'preloader_opened'}`} >
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  );
}

export default Preloader;