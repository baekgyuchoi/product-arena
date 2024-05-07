'use client'
import { BarChart } from '@mui/x-charts';

interface ComparisonArticleBarChartProps {
    labels: string[],
    scores_1: number[], 
    scores_2: number[],
    product_1_name: string,
    product_2_name: string
}





const ComparisonArticleBarChart: React.FC<ComparisonArticleBarChartProps> = async (props) => {
    const labels = props.labels
    const scores_1 = props.scores_1
    const scores_2 = props.scores_2

  
    return (
       
        <div className='w-full'>
            <div className='hidden lg:block w-full'>
                <BarChart
                yAxis={[{ scaleType: 'band', data: labels }]}
                xAxis={[{ scaleType: 'linear', max:5, tickInterval: [1,2,3,4,5]}]}
                series={[
                    { type: 'bar', label: props.product_1_name, data: scores_1 },
                    { type: 'bar', label: props.product_2_name, data: scores_2 },
                ]}
                height={300}
                layout='horizontal'
                margin={{ top: 50, right: 200, bottom: 50, left: 300 }}
                className=''
                />
            </div>
            <div className='w-full lg:hidden'>
                <BarChart
                    yAxis={[{ scaleType: 'band', data: labels }]}
                    xAxis={[{ scaleType: 'linear', max:5, tickInterval: [1,2,3,4,5]}]}
                    series={[
                        { type: 'bar', label: props.product_1_name, data: scores_1 },
                        { type: 'bar', label: props.product_2_name, data: scores_2 },
                    ]}
                    height={300}
                    layout='horizontal'
                    margin={{ top: 80, right: 20, bottom: 50, left: 150 }}
                    className=''
                />
            </div>
        </div>    
       
            
    );
};

export default ComparisonArticleBarChart;