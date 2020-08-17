import React from 'react';
import video from './videos/video.mp4'
import engsub from './subs/subtitles.en.vtt'
import vietsub from './subs/subtitles.vn.vtt'
import './App.css';
import ReactPlayer from "react-player"

function App() {
    return (
        <div>
            <ReactPlayer
                controls
                playing
                url={video}
                muted={true}
                config={{
                    file: {
                        tracks: [
                            {kind: 'subtitles', src: engsub, srcLang: 'english', default: true},
                            {kind: 'subtitles', src: vietsub, srcLang: 'vietnam'},
                        ]
                    }
                }}
            />
        </div>
    )
}

export default App
