import React from "react";
import "./Records.scss";

export default function Records() {
  return (
    <div className="records">
      <div className="container">
        <div className="jumbotron">
          <div className="record-details">
            <strong> Activity</strong>
            <table class="table">
              <thead class="thead-inverse">
                <tr>
                  <th>#</th>
                  <th>Date</th>
                  <th>Service</th>
                  <th>Artisan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>20th June, 2021</td>
                  <td>Electrician</td>
                  <td>Kweku Manu</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>20th June, 2021</td>
                  <td>Electrician</td>
                  <td>Kweku Manu</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>20th June, 2021</td>
                  <td>Electrician</td>
                  <td>Kweku Manu</td>
                </tr>
              </tbody>
            </table>
            
        <nav>
            <ul class="pagination justify-content-center">
                <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
        </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
