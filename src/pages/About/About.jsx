import styles from './About.module.scss';

const About = () => {
  return (
    <>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.text}>
        Welcome to <span>P H O L X</span>, where passion meets innovation.
        Founded in 5, we have dedicated ourselves to delivering exceptional
        products/services that make a difference. Our mission is simple: to
        empower our community by providing reliable, high-quality solutions
        tailored to your needs. At <span>P H O L X</span>, we believe that great
        ideas stem from collaboration and creativity. Our diverse and talented
        team brings together expertise from various fields, working together to
        create products that inspire and transform. We take pride in our
        commitment to quality, integrity, and continuous improvement. Why Choose
        Us? Quality First: We use the finest materials and cutting-edge
        technology to ensure superior performance. Customer-Centric Approach:
        Your satisfaction is at the heart of everything we do. Innovation: We
        stay ahead of the curve, constantly evolving to meet the ever-changing
        demands of our industry. We’re more than just a company—we’re a
        community. Whether you’re a long-time supporter or discovering us for
        the first time, we welcome you to join our journey. Let’s shape the
        future together. Thank you for being part of our story.{' '}
        <span>P H O L X</span> Team
      </p>
    </>
  );
};

export default About;
