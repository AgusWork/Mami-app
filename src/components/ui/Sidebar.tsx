import React from 'react';

interface SidebarProps {
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  return (
    <div style={{ position: 'fixed', top: 0, right: 0, width: '300px', height: '100%', background: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', zIndex: 1000 }}>
      <button onClick={onClose}>Close Sidebar</button>
      <div>
        <h2>Sidebar</h2>
        <p>This is a sidebar modal content.</p>
      </div>
    </div>
  );
};
