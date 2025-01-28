import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Home = () => {
  const [wallpapers, setWallpapers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWallpapers = async () => {
      try {
        const response = await axios.get('https://ali-ke-wallpapers.onrender.com/wallpapers');
        setWallpapers(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching wallpapers:', error);
      }
    };

    fetchWallpapers();
  }, []);

  return (
    <div>
     <div className='header'>
<button>
    Ali's wallpapers
</button></div>
     


      {loading ? (
        <div className="content">
          <div className=""></div>
        </div>
      ) : (
        <div className="content wallpaper-container">
          {wallpapers.map((wallpaper, index) => (
            <div
              key={index}
              className="wallpaper-item img"
            >
              <img
                src={`https://ali-ke-wallpapers.onrender.com${wallpaper.imagePath}`}
                alt={`Wallpaper ${index + 1}`}
                className=""
              />
              <div className="">
                <span className="">
                  Wallpaper {index+1}
                </span>
                <a
                  href={`https://ali-ke-wallpapers.onrender.com${wallpaper.imagePath}`}
                  download={`Wallpaper_${index + 1}`}
                  className="download-btn"
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
