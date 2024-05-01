import { useGlobalState } from "../../context/GlobalState";
import {TransactionItem} from "./TransactionItem";


function TransactionList() {
  const { transactions } = useGlobalState();

  if (transactions.length === 0) {
    return (
      <div className="bg-zinc-900 p-4 my-2">
        <div className="h-full flex items-center justify-center w-full flex-col">
          <h1 className="text-xl font-bold my-2">
            There are no transactions yet
          </h1>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-zinc-900 p-4">
      <h3 className="text-slate-300 text-xl my-2 font-bold text-center">Historial</h3>
      <ul>
        
      {transactions.map((rec_transaction) => (
        <TransactionItem rec_transaction={rec_transaction} key={rec_transaction.id} />
      ))}
      </ul>
      </div>
    </>
  );
}

export default TransactionList;
