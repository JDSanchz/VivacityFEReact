import React, { useState } from 'react';

type UserInfo = {
  fullName: string;
  favoriteLanguages: string[];
  top3Hobbies: string[];
};

const MyPicture = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  const fetchUserInfo = async () => {
    const res = await fetch('http://localhost:3080/awesome/applicant');
    const data: UserInfo = await res.json();
    setUserInfo(data);
  };

  return (
    <div>
      <img 
        src="me.jpg" 
        alt="Jesus Del Barrio" 
        onClick={fetchUserInfo} 
      />
      {userInfo && (
        <div className="user-info">
          <p><strong>Full Name:</strong> {userInfo.fullName}</p>
          <p><strong>Favorite Languages:</strong> {userInfo.favoriteLanguages.join(", ")}</p>
          <p><strong>Top 3 Hobbies:</strong> {userInfo.top3Hobbies.join(", ")}</p>
        </div>
      )}
    </div>
  );
};

export default MyPicture;
