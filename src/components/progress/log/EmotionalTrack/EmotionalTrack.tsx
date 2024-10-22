import React from 'react';
import Face from "../../../icon/progress/Face/Face.tsx";

interface EmotionalTrackProps {
    state: 'happy' | 'neutral'| 'sad';
}

const EmotionalTrack: React.FC<EmotionalTrackProps> = ({ state }) => {
    return (
        <div>
            <Face state={state} />
        </div>
    );
};

export default EmotionalTrack;