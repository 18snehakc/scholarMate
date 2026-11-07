"use client";

import { useState } from "react";

const districts: Record<string, string[]> = {
  Karnataka: [
    "Mysuru",
    "Dakshina Kannada",
    "Bengaluru",
    "Hassan",
    "Udupi",
    "Kodagu",
    "Shivamogga",
  ],
  Kerala: ["Kochi", "Thiruvananthapuram", "Kozhikode"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
};

export default function LocationPage() {
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [searched, setSearched] = useState(false);

  const scholarships = [
    {
      name: "National Scholarship",
      category: "Government",
      location: "All States",
      amount: "As per scheme",
    },
    {
      name: "State Government Scholarship",
      category: "State Government",
      location: state,
      amount: "As per eligibility",
    },
    {
      name: "Engineering Merit Scholarship",
      category: "Merit Based",
      location: "All States",
      amount: "As per scheme",
    },
  ];

  const results = scholarships.filter(
    (item) =>
      item.location === "All States" || item.location === state
  );

  return (
    <main className="location-page">
      <h1>Find Scholarships by Location</h1>

      <p>
        Discover scholarship opportunities available in your state
        and district.
      </p>

      <div className="location-box">
        <h2>Search Your Location</h2>

        <label>Select State</label>

        <select
          value={state}
          onChange={(e) => {
            setState(e.target.value);
            setDistrict("");
            setSearched(false);
          }}
        >
          <option value="">Choose State</option>
          {Object.keys(districts).map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <label>Select District</label>

        <select
          value={district}
          onChange={(e) => {
            setDistrict(e.target.value);
            setSearched(false);
          }}
          disabled={!state}
        >
          <option value="">Choose District</option>

          {state &&
            districts[state].map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
        </select>

        <button
          onClick={() => setSearched(true)}
          disabled={!state || !district}
        >
          Search Scholarships
        </button>
      </div>

      {searched && (
        <section className="location-results">
          <h2>Scholarships Available</h2>

          <p>
            Location: {district}, {state}
          </p>

          <div className="location-cards">
            {results.map((item, index) => (
              <div className="location-card" key={index}>
                <h3>{item.name}</h3>
                <p>Category: {item.category}</p>
                <p>Location: {item.location}</p>
                <p>Amount: {item.amount}</p>
              </div>
            ))}
          </div>

          <p className="demo-note">
            Note: These are sample scholarship records for demonstration.
            Check official scholarship portals for actual eligibility,
            amounts and application deadlines.
          </p>
        </section>
      )}
    </main>
  );
}