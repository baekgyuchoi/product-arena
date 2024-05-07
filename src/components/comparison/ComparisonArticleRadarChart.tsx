'use client'
import React from 'react';
import prisma from '@/src/app/helper/db';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);



export const options = {
    scales: {
        r: {
            max: 5,
            min: 0,
            ticks: {
                stepSize: 1
            }
        }
    }
};
 

interface ComparisonArticleRadarChartProps {
  data: string
}





const ComparisonArticleRadarChart: React.FC<ComparisonArticleRadarChartProps> = async (props) => {
    const data = JSON.parse(props.data)
    return (
        <div className='lg:px-8 w-full flex items-center justify-center'>
            <div className='w-1/3'>
                
                <Radar data={data} options={options} updateMode='resize'/>
            </div>
        </div>
    );
};

export default ComparisonArticleRadarChart;