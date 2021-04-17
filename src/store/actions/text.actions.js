import axios from "axios";
export const CLEAN_TEXT = "CLEAN_TEXT";
export const INSERT_TEXT = "INSERT_TEXT";
export const SET_TEXT_LIST = "SET_TEXT_LIST";
export const ERROR_TEXT = "ERROR_TEXT";

export function addText(text) {
    return (dispatch) => {
        dispatch({
            type: INSERT_TEXT,
            payload: text
        })
    }
}

export function revert(text, currentList) {
    return (dispatch) => {
        axios.get(`${process.env.API_URL}/iecho?text=${text}`)
            .then(res => {
                const { text, palindrome, error } = res.data;

                if (error) throw new Error();

                if (currentList.length > 2 && currentList.length !== 0) currentList.splice(0, 1);

                currentList = currentList.reverse();

                const list = [...currentList, { text, palindrome }];

                dispatch({
                    type: SET_TEXT_LIST,
                    payload: list.reverse()
                });
                dispatch({
                    type: CLEAN_TEXT,
                })
            }).catch(error => {
                dispatch({
                    type: ERROR_TEXT,
                    payload: error.message,
                });
            })
    }
}