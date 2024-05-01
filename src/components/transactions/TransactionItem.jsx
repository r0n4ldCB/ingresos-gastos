import { useGlobalState } from "../../context/GlobalState";

export function TransactionItem({ recor_transaction }) {
  const { deleteTransaction } = useGlobalState();
  return (
    <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
      <p className="text-sm">{recor_transaction.description}</p>
      <div>
        <span>${recor_transaction.amount}</span>
        <button onClick={() => deleteTransaction(recor_transaction.id)}>
          ❌
        </button>
      </div>
    </li>
  );
}
export default TransactionItem;
