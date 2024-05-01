import { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

function TransactionForm() {
  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const miSubmit = (e) => {
    e.preventDefault();
    addTransaction({
        id: window.crypto.randomUUID(),
        description,
        amount: +amount,
    });
    setAmount(0);
    setDescription("")
  };

  return (
    <div>
      <form onSubmit={miSubmit}>
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Ingresa una descripcion"
          className="bg-zinc-600 text-white px-3 py-3 rounded-lg block mb-2 w-full"
          value={description}
        />
        <input
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          step={0.01}
          placeholder="00.00"
          className="bg-zinc-600 text-white px-3 py-3 rounded-lg block mb-2 w-full"
          value={amount}
        />
        <button 
        className="bg-indigo-700 text-white px-3 py-2 mb-2 block rounded-lg w-full disabled:opacity-50"
        disabled={!description || !amount}>
        Añade una Transaccion
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;
