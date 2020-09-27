
import React from 'react';

import pofileReducer, {setStatusProf} from "./profile-reducer";


it('add status', () => {

    let initialState = {
        status: ""
    };
    let action = setStatusProf("STATUS");
    let newState = pofileReducer(initialState, action);
    expect(newState.status).toBe("STATUS");
});




