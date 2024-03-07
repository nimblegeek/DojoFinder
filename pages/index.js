// At the top of your index.js file
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// Function to fetch data from your API endpoint
async function fetchData() {
  const res = await fetch("http://localhost:3000/api/data");
  if (!res.ok) {
    // Handle errors, e.g., by returning an empty array or logging an error
    console.error("Failed to fetch data:", res.statusText);
    return [];
  }
  const data = await res.json();
  return data;
}
export async function getServerSideProps(context) {
  const data = await fetchData();
  console.log(data); // Check what data looks like
  return {
    props: { data },
  };
}

// Update your Home component to accept props
const Home = ({ data }) => {
  return (
    <div className={styles.container}>
      {/* Existing code... */}

      {/* Add a new section to display the data */}
      <section>
        <h2>Dojo List</h2>
        {Array.isArray(data) ? (
          <ul>
            {data.map((dojo, index) => (
              <li key={index}>
                {dojo.name} - {dojo.location}
              </li>
            ))}
          </ul>
        ) : (
          <p>No dojos found or there was an error fetching the dojos.</p>
        )}
      </section>

      {/* Existing code... */}
    </div>
  );
};

export default Home;
