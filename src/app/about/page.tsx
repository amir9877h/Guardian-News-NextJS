import React from "react";
import Image from "next/image";
import styles from "./about.module.scss";

const AboutPage = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.heroSection}>
        <h1 className="font-bold">About Guardian News</h1>
        <p className={styles.tagline}>Delivering Truth, Empowering Minds</p>
      </div>

      <section className={styles.missionSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/news-team.jpg" // You'll need to add this image to your public folder
            alt="Our News Team"
            width={600}
            height={400}
            className={styles.sectionImage}
          />
        </div>
        <div className={styles.content}>
          <h2>Our Mission</h2>
          <p>
            Guardian News is dedicated to delivering accurate, timely, and
            comprehensive news coverage to our readers worldwide. We believe in
            the power of information to transform lives and communities.
          </p>
        </div>
      </section>

      <section className={styles.featuresSection}>
        <h2>What We Offer</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <Image
              src="/real-time.jpg" // Add this image
              alt="Real-time Updates"
              width={200}
              height={200}
              className={styles.featureIcon}
            />
            <h3>Real-time Updates</h3>
            <p>Stay informed with breaking news and live coverage</p>
          </div>
          <div className={styles.featureCard}>
            <Image
              src="/categories.jpg" // Add this image
              alt="Diverse Categories"
              width={200}
              height={200}
              className={styles.featureIcon}
            />
            <h3>Diverse Categories</h3>
            <p>From politics to technology, we cover it all</p>
          </div>
          <div className={styles.featureCard}>
            <Image
              src="/global.jpg" // Add this image
              alt="Global Coverage"
              width={200}
              height={200}
              className={styles.featureIcon}
            />
            <h3>Global Coverage</h3>
            <p>News from every corner of the world</p>
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <h2>Our Values</h2>
        <div className={styles.valuesList}>
          <div className={styles.valueItem}>
            <h3>Accuracy</h3>
            <p>We verify facts thoroughly before publishing</p>
          </div>
          <div className={styles.valueItem}>
            <h3>Integrity</h3>
            <p>Committed to honest and ethical journalism</p>
          </div>
          <div className={styles.valueItem}>
            <h3>Accessibility</h3>
            <p>Making news accessible to everyone, everywhere</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
