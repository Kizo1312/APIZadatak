import { useState, useEffect } from "react";

function NasaImage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Greška prilikom dohvata podataka:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data && (
        <div>
          <h1>{data.title}</h1>
          <img src={data.url} alt={data.title} />
          <p>{data.explanation}</p>
        </div>
      )}
    </div>
  );
}

export default NasaImage;
