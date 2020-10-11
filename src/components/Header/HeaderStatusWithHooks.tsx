import React, { ChangeEvent, SetStateAction, useEffect, useState } from 'react';


type propsType = {
    status: string | null
    getStatusHeadThunkCreator: (id: number) => SetStateAction<string | null>
    updatedStatusHeadThunkCreator: (status: string) => void
    id: number | null
}


const HeaderStatusWithHooks: React.FC<propsType> = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => { setStatus(props.status); }, [props.status])

    useEffect(() => { setStatus(props.getStatusHeadThunkCreator(props.id!)); }, [])

    const activateEditMode = () => {
        setEditMode(true);
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updatedStatusHeadThunkCreator(status!);
    }

    return (
        <div>
            {!editMode &&
                <div><span onDoubleClick={activateEditMode}>{props.status ? props.status : "-----"}</span></div>}
            {editMode &&
                <div><input onChange={onStatusChange} onBlur={deactivateEditMode} value={status!} autoFocus={true} /></div>}
        </div>
    );
}
export default HeaderStatusWithHooks;