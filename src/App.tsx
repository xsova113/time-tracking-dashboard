import axios from "axios";
import { useEffect, useState } from "react";
import { IData } from "../type.ts";
import { ProfileCard } from "./components/profile-card.tsx";
import { ActivityCard } from "./components/activity-card.tsx";

function App() {
  const [data, setData] = useState<IData[]>();

  const fetchData = () =>
    axios
      .get("data.json")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center gap-6 bg-[#0f1424] py-20 text-white md:h-full md:flex-row">
      <ProfileCard />
      <div className="md:grid-cols grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((item) => (
          <ActivityCard
            key={item.title}
            title={item.title}
            timeframes={item.timeframes}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
