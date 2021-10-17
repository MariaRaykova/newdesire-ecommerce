
import {useRef, useEffect} from "react";
import "./index.scss"
const Photo = () => {
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const stripRef = useRef(null);
 
  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        console.error("error:", err);
      });
  };
  const paintToCanvas = () => {
    let video = videoRef.current;
    let photo = photoRef.current;
    let ctx = photo.getContext("2d");

    const width = 320;
    const height = 240;
    photo.width = width;
    photo.height = height;

    return setInterval(() => {
      ctx.drawImage(video, 0, 0, width, height);
    }, 200);
  };

  const takePhoto = () => {
    let photo = photoRef.current;
    let strip = stripRef.current;

    const data = photo.toDataURL("image/jpeg");
    console.warn(data);
    const link = document.createElement("a");
    link.href = data;
    link.setAttribute("download", "myWebcam");
    link.innerHTML = `<img src='${data}' alt='thumbnail'/>`;
    strip.insertBefore(link, strip.firstChild);
  };
  return (

      <div className="container">
      <button onClick={() => takePhoto()}>Take a photo</button>
      <canvas ref={photoRef} className="photo" />
      <div className="photo-booth">
          <div ref={stripRef} className="strip" />
      
      </div>
      <div className="webcam-video">
        <video
          onCanPlay={() => paintToCanvas()}
          ref={videoRef}
          className="player"
        />
     </div>
     <button onClick={() => close()}>Close</button>
      
     <h1>Contacts: </h1>
     <div>
        <div>email: nd@gmail.com</div>
        <div>tel: +359 88 888 888</div>
     </div>
     </div>
  );
};
export default Photo;