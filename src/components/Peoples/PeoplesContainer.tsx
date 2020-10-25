import { useSelector } from 'react-redux';
import React from 'react';
import Preloader from '../Preloader/Preloader';
import { Peoples } from './Peoples';
import { getIsFetching } from '../../redux/peoples-selector';


type PeoplesContainerType = {

}

export const PeoplesContainer: React.FC<PeoplesContainerType> = (props) => {

    const isFetching = useSelector(getIsFetching)

    return <>
        {isFetching ? <Preloader /> : null}
        <Peoples />
    </>
}