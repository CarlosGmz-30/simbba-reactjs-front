import React, { useState, useEffect } from 'react';
import '../styles/GraphicCard.css'
import AxiosClient from '../../../config/http-client/axios-client';

import { Chart as ChartJS, defaults } from "chart.js/auto";

import { Line } from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

export default function GraphicCard({ serialNumber, endpoint }) {
    const [chartData, setChartData] = useState(null);
    

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await AxiosClient({
                    url: `/v1/record/${endpoint}/${serialNumber}`,
                    method: "GET"
                });
                //console.log("response.data: ", response.data)
                console.log("response: ", response);
                const DATA = response.data;
                //console.log("DATA: ", DATA);
                if (DATA) {
                    setChartData({
                        labels: DATA.map(item => {
                            const date = new Date(item.dateAndTime);
                            console.log("Fecha: ",date);
                            console.log("Distancia: ", item.distance);

                            return date.toLocaleDateString('en-US', {
                                day: '2-digit',
                                month: 'short',
                                year: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit',
                                hour12: false
                            });
                        }),
                        datasets: [
                            {
                                label: 'Distance',
                                data: DATA.map(item => item.distance),
                                backgroundColor: '#064FF0',
                                borderColor: '#064FF0',
                                borderWidth: 1,
                                pointBackgroundColor: 'black',
                                pointRadius: 1.5
                            },
                        ],
                    });
                }
            } catch (error) {
                console.error(error);
            }
        };

        getData();
    }, [serialNumber, endpoint]);

    return (
        <div className="graphicCard">
            {
                chartData &&

                <Line
                    data={chartData}
                    options={{
                        elements: {
                            line: {
                                tension: 0.3
                            }
                        }
                    }}
                />}
        </div>
    );
}