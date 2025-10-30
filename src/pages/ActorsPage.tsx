import { useEffect, useState } from "react";
import { Person } from "../models/Person";
import api from "../api/InternalApi";
import { Endpoints } from "../api/Endpoints";
import PersonCard from "../components/PersonCard";

export default function ActorsPage() {
  const [actors, setActors] = useState<Person[]>([]);
  useEffect(() => {
    api
      .get(Endpoints.getAllPersons())
      .then((response) => setActors(response.data))
      .catch((error) => console.error(error));
    document.title = "pralora - Actors";
  }, []);

  return (
    <div className="cast-info">
      <div className="page-header">All Actors</div>
      <div className="row p-3 g-4">
        {actors.map((actor) => (
          <PersonCard key={actor.tmdbId} personDetails={actor} />
        ))}
      </div>
    </div>
  );
}
