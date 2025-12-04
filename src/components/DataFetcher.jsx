import { useEffect, useState } from "react";
import axios from "axios";

function DataFetcher() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDog = async () => {
    try {
      setIsLoading(true);
      setError(null);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );

      setData(response.data);
    } catch (err) {
      setError(err.message || "Сталася помилка запиту");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <section>
      <h2>Dogs</h2>

      <button type="button" onClick={fetchDog}>
        Показати іншого песика
      </button>

      {isLoading && (
        <div style={{
          marginTop: "20px",
          padding: "20px",
          textAlign: "center"
        }}>
          <div style={{
            display: "inline-block",
            width: "40px",
            height: "40px",
            border: "4px solid rgba(102, 126, 234, 0.2)",
            borderTop: "4px solid #667eea",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
            marginBottom: "12px"
          }}></div>
          <p style={{
            color: "#667eea",
            fontSize: "16px",
            fontWeight: "500",
            margin: "0"
          }}>Завантаження даних...</p>
        </div>
      )}

      {error && (
        <div style={{
          marginTop: "20px",
          padding: "16px",
          background: "linear-gradient(135deg, rgba(255, 87, 87, 0.1) 0%, rgba(255, 59, 59, 0.1) 100%)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 87, 87, 0.3)"
        }}>
          <p style={{
            color: "#ff5757",
            margin: "0",
            fontWeight: "500"
          }}>Помилка: {error}</p>
        </div>
      )}

      {!isLoading && !error && data && (
        <article>
          <img
            src={data.message}
            alt="Dog"
            style={{
              width: "100%",
              maxWidth: "400px",
              height: "auto",
              borderRadius: "20px",
              marginTop: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.25), 0 0 0 3px rgba(255,255,255,0.5)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              objectFit: "cover",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.02)";
              e.target.style.boxShadow = "0 15px 40px rgba(0,0,0,0.3), 0 0 0 3px rgba(255,255,255,0.5)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 10px 30px rgba(0,0,0,0.25), 0 0 0 3px rgba(255,255,255,0.5)";
            }}
          />
        </article>
      )}
    </section>
  );
}

export default DataFetcher;
