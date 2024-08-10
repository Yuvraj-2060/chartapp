import React from 'react';
import {Line} from 'react-chartjs-2';
import style from '../styles/ChartDisplay.module.css';

const ChartDisplay = () => {
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sun'],
        datasets: [
            {
                label : 'USD',
                data: [62000, 62500, 63000, 64000, 63500, 63179.71],
                fill: true,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75,192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                display: true
            },
            y: {
                display: true,
            },
        },
    };

    return (
        <div className={styles.chartContainer}>
            <Line data={data} options={options} />
        </div>
    );
};

export default ChartDisplay;