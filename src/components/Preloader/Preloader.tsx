import preloader from './../../assets/Spinner-1s-200px.svg'
import React from 'react';

type propsType = {}

let Preloader: React.FC<propsType> = (props) => {
    return (
        <img src={preloader} />
    );
}
export default Preloader;


