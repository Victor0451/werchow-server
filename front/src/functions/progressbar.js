import React from 'react';
import ProgressBar from 'react-progressbar.js'


const ProgressBar = () => {

    let Circle = ProgressBar.Circle;
    var options = {
        strokeWidth: 2
    };

    // For demo purposes so the container has some dimensions.
    // Otherwise progress bar won't be shown
    var containerStyle = {
        width: '200px',
        height: '200px'
    };
    return (

        <div>
            <Circle
                progress={this.state.progress}
                text={'test'}
                options={options}
                initialAnimate={true}
                containerStyle={containerStyle}
                containerClassName={'.progressbar'} />

        </div>
    );
};

export default ProgressBar;
