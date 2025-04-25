import React from 'react';

function SkillsPreview({ resumeInfo }) {
  const renderStars = (rating) => {
    const stars = [];
    const maxStars = 5;
    const fillColor = resumeInfo?.ThemeColor || '#ff5733';

    for (let i = 1; i <= maxStars; i++) {
      stars.push(
        <span
          key={i}
          style={{
            color: i <= rating ? fillColor : '#ccc',
            fontSize: '14px',
            marginLeft: '2px',
          }}
        >
          ★
        </span>
      );
    }

    return stars;
  };

  return (
    <div style={{ marginTop: '24px', marginBottom: '24px' }}>
      <h2
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '14px',
          marginBottom: '8px',
          color: resumeInfo?.ThemeColor || '#ff5733',
        }}
      >
        Skills
      </h2>
      <hr style={{
       borderTop: `2px solid ${resumeInfo?.ThemeColor || '#ff5733'}`,
       marginBottom: '12px',
      }} />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px',
          marginTop: '16px',
        }}
      >
        {resumeInfo?.skills?.map((skill, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: '12px' }}>{skill.name}</span>
            <div>{renderStars(skill.rating)}</div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsPreview;
