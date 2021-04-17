import {
    CLEAN_TEXT,
    INSERT_TEXT,
    SET_TEXT_LIST,
    ERROR_TEXT
} from "../actions/text.actions";

const initialState = {
    textInserted: "",
    list: []
}

const text = (state = initialState, action) => {
    switch (action.type) {
        case CLEAN_TEXT:
            return {
                ...state,
                textInserted: "",
            }

        case INSERT_TEXT:
            return {
                ...state,
                textInserted: action.payload,
            }

        case SET_TEXT_LIST:
            return {
                ...state,
                list: action.payload,
            }

        case ERROR_TEXT:
            return {
                ...state,
                error: true,
                data: action.payload
            }

        default:
            return state;
    }
};

export default text;

