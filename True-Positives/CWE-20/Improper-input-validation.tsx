import React, { useEffect, useState } from 'react';

const Dashboard: React.FC = () => {
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    // Fake authentication check
    const role = 'admin'; // Hardcoded role for illustration purposes
    setUserRole(role);
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {userRole === 'admin' && <button>Admin Settings</button>} {/* Unauthorized access possible */}
    </div>
  );
};

export default Dashboard;
