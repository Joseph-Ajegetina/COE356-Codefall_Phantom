import React from 'react'
import "./chart.scss"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
export default function chart({title, data, dataKey, grid}) {
   
      
    return (
        <div className="chart">
           <h5 className="chartTitle">{title}</h5>
           <ResponsiveContainer width="100%" aspect={4 / 1}>
               <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd"/>
                <Line type="monotone" dataKey={dataKey} stroke="#5550bd"/>
                    <Tooltip/>
                    {grid && < CartesianGrid strokeDasharray="5 5"/>}
               </LineChart>

           </ResponsiveContainer>
        </div>
    )
}
