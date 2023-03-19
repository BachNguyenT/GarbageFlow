import React, {useRef, useEffect, useState } from 'react';
import { getImgFromArr } from 'array-to-image';

function App() {
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const [hasPhoto, setHasPhoto] = useState(false);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: {width: 1920, height: 1080}
      })
      .then((stream) => {
        let video = videoRef.current; 
        video.srcObject = stream;   
        video.play(); 
      })
    
      .catch((err) => {
        console.log(err)
      })
  }
  const takePhoto = () => {
    const width = 300;
    const height = width/(16/9);

    let video = videoRef.current;
    let photo = photoRef.current;

    photoRef.width = width;
    photo.height = height;

    let ctx = photo.getContext('2d');
    ctx.drawImage(video, 0, 0, width, height);
    let data = ctx.getImageData(10, 20, width, height);
    setHasPhoto(true);
    
    const img = getImgFromArr(data);
    console.log(img);
  }

  const closePhoto = () => {
    let photo = photoRef.current;
    let ctx = photo.getContext('2d');
    ctx.clearRect(0, 0, photo.width, photo.height);
    setHasPhoto(false);
  }
  useEffect(() => {
    getVideo();
  }, [videoRef]);


  return (
    <div className="App">
      <div className="camera">
        <video ref={videoRef}></video>
        <button onClick={takePhoto}>SNAP!</button>
      </div>
      <div className={"result " + (hasPhoto ? 'hasPhoto' : '')}>
        <canvas ref={photoRef}></canvas>
        <button onClick={closePhoto}>CLOSE!</button>
      </div>
    </div>
  );

}
export default App;
