import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <nav className="navbar">
        <h2>ScholarMate</h2>

        <div>
          <Link href="/">Home</Link>
          <Link href="/scholarships">Scholarships</Link>
          <Link href="/about">About</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/tracker">Tracker</Link>
          <Link href="/location">Location</Link>
        </div>
      </nav>

      {/* Welcome Section */}
      <section className="hero">
        <h1>
          Find the Right Scholarship
          <br />
          <span>Build Your Future</span>
        </h1>

        <p>
          Discover scholarships designed for Karnataka
          engineering students. Find opportunities,
          check eligibility and track deadlines easily.
        </p>

        <Link href="/scholarships" className="button">
          Explore Scholarships →
        </Link>
      </section>

      {/* Categories */}
      <section className="categories">
        <h2>Explore Categories</h2>

        <div className="category-list">
          <div>Government Scholarships</div>
          <div>Merit-Based Scholarships</div>
          <div>Need-Based Scholarships</div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <h3>ScholarMate Karnataka</h3>
        <p>Making scholarship discovery easier for students.</p>
      </footer>
    </main>
  );
}