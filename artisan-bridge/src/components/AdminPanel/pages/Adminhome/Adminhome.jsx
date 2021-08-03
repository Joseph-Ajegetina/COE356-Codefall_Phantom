import React from 'react'
import "./Adminhome.scss"
import Chart from '../../../ActiveuserChart/chart'
import { userData } from '../../../../dummydata'
import Widgetsm from '../../../Widgetsm/Widgetsm'
import Widgetlg from '../../../Widgetlg/Widgetlg'
export default function home() {
    return (
        <div className="adminHome">
            <Chart data={userData} title="Active User Details" grid dataKey="Active"/>
            <div className="homeWidget">
            <Widgetsm/>
            <Widgetlg/>
            </div>
        </div>
    )
}
