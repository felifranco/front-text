import React from "react";
import { useSelector } from 'react-redux'

const Body = () => {
    const {
        list,
    } = useSelector(({ text }) => text);

    return (
        <div className={"container-md mt-5"}>
            <div className={"card align-middle"}>
                <div className={"card-body"}>
                    <h5 className={"card-title"}>Results:</h5>
                    <div className={"container"}>
                        {list.map((item, index) => {
                            return (
                                <div className={"row p-3"} key={index}>
                                    <input type={"text"} className={"form-control"} id={"text"} disabled={true} value={item.text} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Body;