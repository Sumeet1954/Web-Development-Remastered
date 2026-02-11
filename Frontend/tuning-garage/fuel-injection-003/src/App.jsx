import { useState } from "react";
import Nav from "./Nav";
import Card from "./Card";

const App = () => {
  const songs = [
    {
      imgsrc:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      songName: "Blinding Lights",
      artistName: "The Weeknd",
      active: true,
    },
    {
      imgsrc:
        "https://images.unsplash.com/photo-1706533646123-50d0365a62ea?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      songName: "Shape of You",
      artistName: "Ed Sheeran",
      active: false,
    },
    {
      imgsrc:
        "https://images.unsplash.com/photo-1668890538504-877e118c5750?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      songName: "Levitating",
      artistName: "Dua Lipa",
      active: false,
    },
    {
      imgsrc:
        "https://plus.unsplash.com/premium_photo-1681682667768-5474c577738f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      songName: "Peaches",
      artistName: "Justin Bieber",
      active: false,
    },
    {
      imgsrc:
        "https://plus.unsplash.com/premium_photo-1681682667779-760c3aaefde8?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      songName: "Stay",
      artistName: "The Kid LAROI & Justin Bieber",
      active: false,
    },
  ];

  const [realSong, setRealSong] = useState(songs);

  return (
    <main>
      <Nav data={realSong} />

      <div className="card-main">
        {realSong.map((obj, index) => (
          <Card key={index} data={obj} setRealSong={setRealSong} cardNo={index} />
        ))}
      </div>
    </main>
  );
};

export default App;
