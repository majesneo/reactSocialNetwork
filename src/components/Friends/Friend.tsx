import React from 'react';
import { photosType } from '../../types/types';

type propsType = {
	name: string
	photos: photosType
	id: number
}

export const Friend: React.FC<propsType> = (props) => {
	return (
		<li>
			<figure>
				<img src={props.photos.small} alt=""></img>

			</figure>
			<div style={{ display: "flex" }} class="friendz-meta">
				<span style={{ right: "98%" }} class="status f-online"></span>
				<a href="time-line.html">{props.name}</a>
			</div>
		</li>
	);
}