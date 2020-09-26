import React, {useEffect, useState} from 'react';


const HeaderStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.getStatusThunkCreator(props.id));
        setStatus(props.status);
    }, [props.status],[props.id],[props.getStatusThunkCreator])


    const activateEditMode = () => {
        setEditMode(true);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updatedStatusThunkCreator(status);
    }

    return (
        <div>
            {!editMode &&
            <div><span onDoubleClick={activateEditMode}>{props.status || "-----"}</span></div>}
            {editMode &&
            <div><input onChange={onStatusChange} onBlur={deactivateEditMode} value={status} autoFocus={true}/></div>}
        </div>
    );
}
export default HeaderStatusWithHooks;