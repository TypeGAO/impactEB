//imports needed for victory charts 
import React from 'react';
import ReactDOM from 'react-dom'; 
import { VictoryChart, VictoryPolarAxis } from 'victory'
import { VictoryArea, VictoryAxis, VictoryTheme, VictoryLine } from 'victory'
const org_dashboard = () =>{
    return(
        <div>
            <h1>Organizational Dashboard</h1>
            <p>Filler Content...</p>
            <div>Victory Sample Area Chart</div>
             <div className='Chart'>
                <VictoryChart theme={VictoryTheme.material} data-testid="impact-chart">
                    <VictoryArea data={[1, 2, 3, 4]}/>
                    {/* <VictoryAxis/> */}
                </VictoryChart>

                {/* <VictoryChart polar data-testid="my-polar-chart">
                    <VictoryPolarAxis data={data}/>
                    <VictoryPolarAxis dependentAxis />
                    <VictoryArea data={data}/>
                </VictoryChart> */}
            </div> 
            {/* Added Fever Chart */}
            <div className='Chart' style={{background: "linear-gradient(-33deg, orange 33.33%, blue 33.33% 66.66%, red 66.66%"}}>
                <svg width={500} height={300}>
                <VictoryLine
                data-testid="fever-chart"
                standalone={false}
                width={500} height={300} padding={0}
                data={lineData}
                /></svg>
            </div>
        </div>
    ) 
}

//Sample Array Dataset for Victory Charts
const data = [
    { x: 1, y: 10 },
    { x: 2, y: 15 },
    { x: 3, y: 20 },
    { x: 4, y: 18 },
    { x: 5, y: 25 },
    { x: 6, y: 30 },
    { x: 7, y: 35 },
  ];

const lineData = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 6 }
  ]
export default org_dashboard;