import { useQuery, gql } from "@apollo/client";
import React from "react";
import DestinationCard from "./components/DestinationCard";
import DestinationCardSkeletonGroup from "./components/DestinationCardSkeletonGroup";

const DESTINATIONS = gql`
query DestinationList {
  destinations {
    id
    location
    country
    locationLink
    preview {
      url(transformation: {image: {}, document: {output: {format: webp}}})
    }
  }
}`;

function App() {
  const { loading, error, data } = useQuery(DESTINATIONS);
  if (loading) return <DestinationCardSkeletonGroup/>;
  if (error) return <h1 className="text-2xl font-bold text-gray-600 mx-auto">Yikes... Error fetching data. Sana hindi all... 🥲</h1>;
  return (
    <div className="bg-gray-100">
      <main className="container mx-auto py-16 px-4 min-h-screen">
        <h1 className="text-6xl text-blue-600 font-black text-center">Travel Bucket List</h1>
        <p className="italic text-gray-600 font-thin text-center">sana all... </p>
        <div className="mt-24 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {data.destinations.map(destination => {
            return(
              <React.Fragment key={destination.id}>
                <DestinationCard 
                  location={destination.location}
                  locationLink={destination.locationLink}
                  country={destination.country}
                  preview={destination.preview.url}
                />
              </React.Fragment>
            )
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
