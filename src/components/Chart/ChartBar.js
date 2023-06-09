import './ChartBar.css';

const ChartBar = (props) => {
    let barFillHeight = '0%';

    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return (
        <div className='chart-bar'>
            <div className='chart-bar__value' style={{color: props.value > 0 ? '#5a1a95' : '#888'}}>${Math.round(props.value)}</div>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={{'--fill': barFillHeight}}></div>
            </div>
            <div className='chart-bar__label'>{props.label}</div>
        </div>
    )
}

export default ChartBar;