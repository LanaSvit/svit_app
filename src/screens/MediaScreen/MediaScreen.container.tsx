import * as React from 'react';
import { FC } from 'react';
import MediaScreen from './MediaScreen';

const MediaScreenContainer: FC = () => {

// TODO: take mediaList from BE  
const mediaList = [{author: 'Svitlana H.', title: "Why Matrix: Revolution is fucking awesome", label: "Sci-Fi"},
{author: 'Svitlana H.', title: "Delving Deeper into Il vangelo secondo Matteo by Pasolini", label: "Philosophy"},
{author: 'Svitlana H.', title: "Alfred Hitchcock On Mastering Cinematic Tension", label: "Horror"}

];

return ( 
<MediaScreen mediaList={mediaList}/>
);
}

export default MediaScreenContainer;
