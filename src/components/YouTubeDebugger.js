import React from 'react';

class YouTubeDebugger extends React.Component {

    constructor(){
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    handleBitrate = () => {
        this.setState(previousState => {
            return {
                settings: {
                    ...previousState.settings,
                    bitrate: 12
                }
            }
        })
    }

    handleRes = () => {
        this.setState(previousState => {
            return {
                settings: {
                    ...previousState.settings,
                    video:{
                        resolution: '720p'
                    }

                }
            }
        });
    }

    render(){
        return(
            <div>
                <button onClick={this.handleBitrate} className="bitrate">Bitrate</button>
                <button onClick={this.handleRes} className="resolution">Resolution</button>
            </div>
        )
    }

}

export default YouTubeDebugger;