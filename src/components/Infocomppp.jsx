import React from 'react';

const Infocomppp = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Our aim is to create innovative, efficient, and sustainable solutions that align with their surroundings, adding value and functionality to the environment.</h2>
      <div style={styles.contentContainer}>
        <div style={styles.serviceContainer}>
          <h3 style={styles.serviceTitle}>Architecture</h3>
          <p style={styles.serviceDescription}>
            We believe that the built environment and buildings we design should be a reflection of the aspirations and values of our clients.
          </p>
        </div>
        <div style={styles.serviceContainer}>
          <h3 style={styles.serviceTitle}>Civil Engineering</h3>
          <p style={styles.serviceDescription}>
            Our goal is to design functional, efficient, and sustainable buildings that contribute to the context of their surroundings.
          </p>
        </div>
        <div style={styles.serviceContainer}>
          <h3 style={styles.serviceTitle}>Survey</h3>
          <p style={styles.serviceDescription}>
            From the mountainous to the lower lying terrain, our surveying department is staffed by individuals who are fully capable.
          </p>
        </div>
        <div style={styles.serviceContainer}>
          <h3 style={styles.serviceTitle}>Transportation</h3>
          <p style={styles.serviceDescription}>
            We offer transportation related planning, RGW acquisition, studies, design, inspection, survey, and utility relocation services, and construction.
          </p>
        </div>
        <div style={styles.serviceContainer}>
          <h3 style={styles.serviceTitle}>Designer Led / Design Build</h3>
          <p style={styles.serviceDescription}>
            Our firm offers experience in Designer-Led/Design-Build, Construction Manager at Risk and are able to assist our clients.
          </p>
        </div>
      </div>
      <p style={styles.belief}>
        We believe that the built environment and buildings we design should be a reflection of the aspirations and values of our clients.
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '40px',
  },
  contentContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '40px',
  },
  serviceContainer: {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '5px',
  },
  serviceTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  serviceDescription: {
    fontSize: '16px',
    lineHeight: '1.5',
  },
  belief: {
    marginTop: '40px',
    fontSize: '16px',
    fontStyle: 'italic',
  },
};

export default Infocomppp;