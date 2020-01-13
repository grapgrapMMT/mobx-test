import { observer } from "mobx-react";
import React, { FC, useEffect } from "react";
import { store, User } from "./store";

const Age: FC<{ user?: User; onClick: () => void }> = observer(
  ({ user, onClick }) => {
    console.count("age");
    const handleOnClick = () => {
      onClick();
    };
    return <p onClick={handleOnClick}>{user?.age ?? 1}</p>;
  }
);
const Name: FC<{ user?: User }> = observer(({ user }) => {
  console.count("name");
  return <p>{user?.name ?? ""}</p>;
});
const ViewUser: FC<{ user?: User; onClick: () => void }> = observer(
  ({ user, onClick }) => {
    console.count("user");
    return (
      <div>
        <Name user={user} />
        <Age user={user} onClick={onClick} />
      </div>
    );
  }
);

const App: React.FC = observer(() => {
  const { increase, init, user } = store;
  console.count("app");
  useEffect(() => {
    init();
  }, [init]);
  return <ViewUser user={user} onClick={increase} />;
});

export default App;
