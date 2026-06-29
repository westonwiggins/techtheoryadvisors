import React from "react";

export default function App() {
  return (
    <div style={styles.page}>
      <div style={styles.overlay}>
        <div style={styles.container}>

          <div style={styles.hero}>
            <h1 style={styles.h1}>Is Your Business at Risk?</h1>
            <p style={styles.p}>
              Get a <strong>Free IT Security Check</strong> and uncover hidden risks that could
              lead to downtime, ransomware, or data loss.
            </p>

            <a href="#form" style={styles.button}>
              Get My Free Assessment
            </a>

            <div style={styles.trust}>
              Local IT Security • No obligation • Takes 10–15 minutes
            </div>
          </div>

          <section style={styles.section}>
            <h2>What You'll Get</h2>
            <ul style={styles.list}>
              <li>✅ Identify security gaps across your systems</li>
              <li>✅ Clear, non-technical explanation of risks</li>
              <li>✅ Simple action plan to secure your business</li>
            </ul>
          </section>

          <section style={styles.section}>
            <h2>Common Risks We Find</h2>
            <ul style={styles.list}>
              <li>⚠️ No MFA on email or admin accounts</li>
              <li>⚠️ Backups that fail or aren’t tested</li>
              <li>⚠️ Exposed remote access or outdated systems</li>
            </ul>
          </section>

          <div id="form" style={styles.formBox}>
            <h2>Request Your Free Security Check</h2>

            <form action="https://formspree.io/f/mnjryrka" method="POST">

              <input type="text" name="_gotcha" style={{ display: "none" }} />

              <input style={styles.input} type="text" name="name" placeholder="Full Name" required />
              <input style={styles.input} type="text" name="business" placeholder="Business Name" required minLength={3} />
              <input style={styles.input} type="email" name="email" placeholder="Email Address" required />

              <input
                style={styles.input}
                type="text"
                name="employees"
                placeholder="How many employees does your business have?"
                required
              />

              <button style={styles.button} type="submit">
                Get My Free Assessment
              </button>
            </form>

            <p style={styles.smallText}>
              We’ll review your setup and follow up within 24 hours.
            </p>
          </div>

          <section style={styles.section}>
            <h2>Why Tech Theory Advisors</h2>
            <p>
              We help small businesses identify and fix hidden IT security risks before they
              turn into expensive problems. Clear insights. Practical solutions. Real
              protection.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh",
    backgroundImage: "url('/background.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
    minHeight: "100vh",
  },

  container: {
    maxWidth: "900px",
    margin: "auto",
    padding: "40px 20px",
    color: "white",
  },

  hero: {
    textAlign: "center",
    padding: "60px 20px",
  },

  h1: {
    fontSize: "40px",
    marginBottom: "10px",
  },

  p: {
    fontSize: "18px",
    lineHeight: 1.6,
  },

  button: {
    display: "inline-block",
    background: "#0f766e",
    color: "white",
    padding: "15px 25px",
    fontSize: "18px",
    textDecoration: "none",
    borderRadius: "6px",
    marginTop: "20px",
    border: "none",
    cursor: "pointer",
  },

  trust: {
    fontSize: "14px",
    marginTop: "10px",
    opacity: 0.9,
  },

  section: {
    marginTop: "50px",
  },

  list: {
    paddingLeft: "20px",
    fontSize: "18px",
  },

  formBox: {
    background: "white",
    color: "black",
    padding: "30px",
    borderRadius: "10px",
    marginTop: "40px",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    fontSize: "16px",
  },

  smallText: {
    fontSize: "14px",
    marginTop: "10px",
  },
};
