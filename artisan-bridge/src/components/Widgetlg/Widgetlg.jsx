import "./Widgetlg.scss"

export default function Widgetsm() {
    const Button = ({type}) => {
        return <button className={"widgetlgButton " + type}  type>{type}</button>
    }
    return (
        <div className="Widgetlg">
           <h5 className="widgetsmTitle">Latest Transactions</h5>
           <table className="widgetlgTable">
               <tr className="widgetlgTr">
                   <th className="widgetlgTh">User</th>
                   <th className="widgetlgTh">Date</th>
                   <th className="widgetlgTh">Status</th>
               </tr>
               <tr className="widgetlgTr">
                   <td className="widgetlgUser">
                       <img src="images/artisan1.jpg" alt="" className="widgetlgImg" />
                       <span className="widgetlgName">Drake Atom</span>
                   </td>
                   <td className="widgetlgDate">1st August 2021</td>
                   <td className="widgetlgStatus"><Button type="Approved"/></td>
               </tr> <tr className="widgetlgTr">
                   <td className="widgetlgUser">
                       <img src="images/artisan1.jpg" alt="" className="widgetlgImg" />
                       <span className="widgetlgName">Drake Atom</span>
                   </td>
                   <td className="widgetlgDate">1st August 2021</td>
                   <td className="widgetlgStatus"><Button type="Declined"/></td>
               </tr> <tr className="widgetlgTr">
                   <td className="widgetlgUser">
                       <img src="images/artisan1.jpg" alt="" className="widgetlgImg" />
                       <span className="widgetlgName">Drake Atom</span>
                   </td>
                   <td className="widgetlgDate">1st August 2021</td>
                   <td className="widgetlgStatus"><Button type="Pending"/></td>
               </tr>
           </table>
        </div>
    )
}
