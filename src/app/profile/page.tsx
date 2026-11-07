"use client";

import Link from "next/link";
import { useState } from "react";

export default function Profile() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main>
      <nav className="navbar">
        <h2>ScholarMate</h2>

        <div>
          <Link href="/">Home</Link>
          <Link href="/scholarships">Scholarships</Link>
          <Link href="/profile">Profile</Link>
        </div>
      </nav>

      <section className="profile-page">
        <h1>Student Profile</h1>
        <p>Enter your details to find suitable scholarships.</p>

        <form
          className="profile-form"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" required />

          <label>College Name</label>
          <input type="text" placeholder="Enter your college" required />

          <label>Engineering Branch</label>
          <select required defaultValue="">
            <option value="" disabled>Select Branch</option>
            <option>CSE</option>
            <option>CSBS</option>
            <option>ISE</option>
            <option>ECE</option>
            <option>EEE</option>
            <option>Mechanical</option>
            <option>Civil</option>
            <option>Other</option>
          </select>

          <label>Year of Study</label>
          <select required defaultValue="">
            <option value="" disabled>Select Year</option>
            <option>1st Year</option>
            <option>2nd Year</option>
            <option>3rd Year</option>
            <option>4th Year</option>
          </select>

          <label>CGPA</label>
          <input
            type="number"
            placeholder="Enter your CGPA"
            min="0"
            max="10"
            step="0.01"
            required
          />

          <label>Annual Family Income</label>
          <select required defaultValue="">
            <option value="" disabled>Select Income Range</option>
            <option>Below ₹1 Lakh</option>
            <option>₹1–2.5 Lakhs</option>
            <option>₹2.5–5 Lakhs</option>
            <option>Above ₹5 Lakhs</option>
          </select>

          <label>Category</label>
          <select required defaultValue="">
            <option value="" disabled>Select Category</option>
            <option>General</option>
            <option>OBC</option>
            <option>SC</option>
            <option>ST</option>
            <option>Other</option>
          </select>

          <button type="submit">Save Profile</button>

          {submitted && (
            <p className="success-message">
              Profile submitted successfully!
            </p>
          )}
        </form>
      </section>
    </main>
  );
}