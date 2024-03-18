import userData from "../userData.json";
import Profile from "../profile/Profile";
import FriendList from "../friend-list/FriendList";
import friends from "../friends.json";
import TransactionHistory from "../transaction-history/TransactionHistory";
import items from "../transactions.json";

// import css from "./App.module.scss";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </>
  );
};

export default App;
