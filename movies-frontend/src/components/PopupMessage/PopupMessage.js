function PopupWithForm(props) {
    return (
        <div className={`popup  ${props.isOpen && 'popup_opened'}`}>
            <div className={`form form_type_${props.name}`}>
                <button className="popup__close" type="button" aria-label="close" onClick={props.onClose}></button>
                {props.logo}
                <h3 className={`form__title form__title_type_${props.name}`}>{props.title}</h3>
            </div>
        </div>
    )
}

export default PopupWithForm;