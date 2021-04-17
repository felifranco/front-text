import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addText, revert } from "../store/actions/text.actions";

const Header = () => {

    const dispatch = useDispatch();

    const {
        list,
        textInserted
    } = useSelector(({ text }) => text);

    const handleSubmit = () => {
        dispatch(revert(textInserted, list))
    }

    const handleChange = (e) => {
        dispatch(addText(e.target.value));
    }

    return (
        <div className={"bg-danger"}>
            <div className={"container-md w-50 pt-4 pb-4"}>
                <div className={"row"}>
                    <div className={"col"}>
                        <input type="text" className={"form-control"} id="text" placeholder="Insert Text" value={textInserted} onChange={handleChange} />
                    </div>
                    <div className={"col"}>
                        <button type="button" className={"btn btn-primary"} onClick={handleSubmit}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;