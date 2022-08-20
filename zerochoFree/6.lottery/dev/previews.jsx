import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import LotteryHooks from "../LotteryHooks";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/LotteryHooks">
                <LotteryHooks/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;