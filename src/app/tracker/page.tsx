"use client";

import { useState } from "react";

export default function TrackerPage() {
  const [showForm, setShowForm] = useState(false);
  const [applications, setApplications] = useState<any[]>([]);

  const [name, setName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [status, setStatus] = useState("Not Started");

  function addApplication(e: React.FormEvent) {
    e.preventDefault();

    setApplications([
      ...applications,
      {
        id: Date.now(),
        name,
        deadline,
        status,
      },
    ]);

    setName("");
    setDeadline("");
    setStatus("Not Started");
    setShowForm(false);
  }

  function deleteApplication(id: number) {
    setApplications(applications.filter((app) => app.id !== id));
  }

  return (
    <main className="tracker-page">
      <h1>My Application Tracker</h1>
      <p>Track your scholarship applications and deadlines.</p>

      <button
        className="primary-btn"
        onClick={() => setShowForm(!showForm)}
      >
        + Add Application
      </button>

      {showForm && (
        <form onSubmit={addApplication} className="tracker-form">
          <input
            type="text"
            placeholder="Scholarship Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>Not Started</option>
            <option>In Progress</option>
            <option>Submitted</option>
          </select>

          <button type="submit" className="primary-btn">
            Save Application
          </button>
        </form>
      )}

      <div className="application-list">
        {applications.map((app) => (
          <div className="application-card" key={app.id}>
            <h3>{app.name}</h3>
            <p>Deadline: {app.deadline}</p>

            <select
              value={app.status}
              onChange={(e) =>
                setApplications(
                  applications.map((item) =>
                    item.id === app.id
                      ? { ...item, status: e.target.value }
                      : item
                  )
                )
              }
            >
              <option>Not Started</option>
              <option>In Progress</option>
              <option>Submitted</option>
            </select>

            <button onClick={() => deleteApplication(app.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}