import { type } from 'os';
import React, { useEffect, useState } from 'react';


type propsType = {
    status: string
    getStatusHeadThunkCreator: (id: number) => void
    updatedStatusHeadThunkCreator: (status: string) => void
}

type stateType = {

}


const HeaderStatusWithHooks: React.FC<propsType> = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])
    useEffect(() => { setStatus(props.getStatusHeadThunkCreator(props.id)); }, [])

    const activateEditMode = () => {
        setEditMode(true);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updatedStatusHeadThunkCreator(status);
    }

    return (
        <div>
            {!editMode &&
                <div><span onDoubleClick={activateEditMode}>{props.status || "-----"}</span></div>}
            {editMode &&
                <div><input onChange={onStatusChange} onBlur={deactivateEditMode} value={status} autoFocus={true} /></div>}
        </div>
    );
}
export default HeaderStatusWithHooks;