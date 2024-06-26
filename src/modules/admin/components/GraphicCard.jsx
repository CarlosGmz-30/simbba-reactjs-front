import React, { useState, useEffect } from 'react';
import '../styles/GraphicCard.css'
import AxiosClient from '../../../config/http-client/axios-client';

import { Chart as ChartJS, defaults } from "chart.js/auto";

import { Line } from "react-chartjs-2";

import records from '../../../data/registros_bote.json'

defaults.maintainAspectRatio = false;
defaults.responsive = true;

export default function GraphicCard({ serialNumber, endpoint }) {
    const [chartData, setChartData] = useState(null);

    let title = "";

    switch (endpoint) {
        case "currentMonthRecords":
            title = "Este mes"

            break;
        case "currentDayRecords":
            title = "Este día"

            break;
        case "lastSevenDaysRecords":
            title = "Últimos 7 días"

            break;

        default:
            title = "Chart"
            break;
    }


    useEffect(() => {
        const getData = async () => {
            try {
                const response = await AxiosClient({
                    url: `/v1/record/${endpoint}/${serialNumber}`,
                    method: "GET"
                });
                
                //console.log("response.data: ", response.data)
                console.log("response: ", response);
                
                //const DATA = records;
                const DATA = response.data;
                
                //console.log("DATA: ", DATA);
                
                if (DATA) {
                    setChartData({
                        labels: DATA.map(item => {
                            const date = new Date(item.dateAndTime);
                            console.log("Fecha: ", date);
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
            <h3 className="title">{title}</h3>

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