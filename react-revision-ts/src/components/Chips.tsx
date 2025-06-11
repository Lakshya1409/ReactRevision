import { useState } from "react";

type ChipsData = {
  id: number;
  text: string;
};

const Chips = () => {
  const [chipsInput, setChipsInput] = useState("");
  const [chipsData, setChipsData] = useState<ChipsData[]>([]);
  const handleEnter = (e: { key: string }) => {
    if (e.key === "Enter") {
      if (chipsInput.trim()) {
        const newData = {
          id: Date.now(),
          text: chipsInput,
        };
        setChipsData((prev) => [...prev, newData]);
        setChipsInput("");
      }
    }
  };

  const handleRemove = (id: number) => {
    setChipsData((prev) => prev.filter((data) => data.id !== id));
  };

  return (
    <main>
      <h1 className="text-4xl text-center font-serif">CHIPS</h1>
      <div className="flex flex-col gap-6 items-center justify-center mt-10">
        <input
          type="text"
          className="border-2 h-9 border-red-400 p-2"
          onChange={(e) => setChipsInput(e.target.value)}
          placeholder="enter data"
          value={chipsInput}
          onKeyDown={handleEnter}
        />
        <div className="flex gap-3">
          {chipsData &&
            chipsData.map((item) => {
              return (
                <div
                  key={item.id}
                  className="bg-amber-200 gap-2 p-3 flex justify-center rounded-2xl items-center"
                >
                  <span>{item.text}</span>
                  <button onClick={() => handleRemove(item.id)}>X</button>
                </div>
              );
            })}
        </div>
      </div>
    </main>
  );
};

export default Chips;
