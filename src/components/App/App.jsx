import FriendList from "../FriendList/FriendList";
import Profile from "../Profile/Profile";
import Statistics from "../Statistics/Statistics";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import transactions from "../../data/transactions.json";
import friends from "../../data/friends.json";
import data from "../../data/data.json";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="main-contianer">
        <FriendList friends={friends} />
        <Profile />
        <Statistics title="Upload stats" data={data} />
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
};
export default App;
