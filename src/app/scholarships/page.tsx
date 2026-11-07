"use client";

import Link from "next/link";
import { useState } from "react";

const scholarships = [
  {
    name: "National Scholarship",
    category: "Government",
    amount: "As per scheme",
  },
  {
    name: "Karnataka SSP Scholarship",
    category: "Need Based",
    amount: "As per eligibility",
  },
  {
    name: "Engineering Merit Scholarship",
    category: "Merit Based",
    amount: "₹25,000 (Demo)",
  },
];

export default function Scholarships() {
  const [search, setSearch] = useState("");
  const [selectedScholarship, setSelectedScholarship] = useState<typeof scholarships[number] | null>(null);

  const filteredScholarships = scholarships.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <nav className="navbar">
        <h2>ScholarMate</h2>

        <div>
          <Link href="/">Home</Link>
          <Link href="/scholarships">Scholarships</Link>
        </div>
      </nav>

      <section className="scholarship-page">
        <h1>Explore Scholarships</h1>

        <p>Find scholarships that match your requirements.</p>

        <input
          className="search"
          type="text"
          placeholder="Search scholarships..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="scholarship-list">
          {filteredScholarships.length > 0 ? (
            filteredScholarships.map((item) => (
              <div className="scholarship-card" key={item.name}>
                <h2>{item.name}</h2>

                <p>Category: {item.category}</p>

                <p>Amount: {item.amount}</p>

                <button onClick={() => setSelectedScholarship(item)}>
  View Details
</button>
              </div>
            ))
          ) : (
            <p>No scholarships found.</p>
          )}
        </div>
      </section>

{selectedScholarship && (
  <div style={{
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    padding: "20px"
  }}>
    <div style={{
      background: "white",
      padding: "30px",
      borderRadius: "12px",
      maxWidth: "500px",
      width: "100%"
    }}>
      <h2>{selectedScholarship.name}</h2>

      <p><strong>Category:</strong> {selectedScholarship.category}</p>

      <p><strong>Amount:</strong> {selectedScholarship.amount}</p>

      <h3>Eligibility</h3>
      <p>Eligibility depends on the scholarship scheme, academic performance and family income.</p>

      <h3>Required Documents</h3>
      <ul>
        <li>Aadhaar Card</li>
        <li>College ID Card</li>
        <li>Previous Year Marks Card</li>
        <li>Income Certificate</li>
        <li>Bank Passbook</li>
      </ul>

      <button
        onClick={() => setSelectedScholarship(null)}
        className="button"
      >
        Close
      </button>
    </div>
  </div>
)}

</main>
  );
}