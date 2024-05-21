import { GlobalProvider } from "./context/GlobalState";
import Balance from "./components/Balance";
import TransactionForm from "./components/transactions/TransactionForm";
import TransactionList from "./components/transactions/TransactionList";
import IncomeExpenses from "./components/transactions/IncomeExpenses";
import ExpenseChart from "./components/transactions/ExpenseChart";

function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-900 text-white w-screen flex justify-center items-center sm:flex-wrap md:flex-wrap">
        <div className="container mx-auto w-3/6">
          <div className="bg-slate-800 p-10 rounded-lg flex sm:justify-center sm:flex-wrap md:flex-wrap gap-x-2">
            <div>
              <h1 className="text-4xl font-bold">Contabilizador</h1>
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div className="flex flex-col flex-1">
              <ExpenseChart/>
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}
export default App;
