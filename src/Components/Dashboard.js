import React from "react";

function Dashboard() {
    return (
        <div className="container py-4">
            <h1 className="mb-4 text-center text-success">📊 Dashboard</h1>

            {/* Stats Row */}
            <div className="row mb-4">
                <div className="col-md-4">
                    <div className="card shadow-sm p-3 text-center">
                        <h4>Total Users</h4>
                        <p className="fs-3 text-primary">1,250</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card shadow-sm p-3 text-center">
                        <h4>Active Sessions</h4>
                        <p className="fs-3 text-warning">87</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card shadow-sm p-3 text-center">
                        <h4>Messages</h4>
                        <p className="fs-3 text-danger">42</p>
                    </div>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="card shadow-sm p-4 mb-4">
                <h4 className="mb-3">📌 Recent Activity</h4>
                <ul className="list-group">
                    <li className="list-group-item">✅ User John signed up</li>
                    <li className="list-group-item">📩 New message from Sarah</li>
                    <li className="list-group-item">🔔 System maintenance scheduled</li>
                </ul>
            </div>

            {/* Quick Links */}
            <div className="card shadow-sm p-4">
                <h4 className="mb-3">⚡ Quick Actions</h4>
                <div className="d-flex gap-3 flex-wrap">
                    <button className="btn btn-primary">Add User</button>
                    <button className="btn btn-success">Generate Report</button>
                    <button className="btn btn-warning">View Logs</button>
                    <button className="btn btn-danger">Logout</button>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
