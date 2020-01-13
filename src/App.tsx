import { observer } from "mobx-react";
import React, { FC, useEffect } from "react";
import { store, User } from "./store";

const Age: FC<{ age?: User["age"]; onClick: () => void }> = observer(
  ({ age, onClick }) => {
    console.count("age");
    const handleOnClick = () => {
      onClick();
    };
    return <p onClick={handleOnClick}>{age?.value || 0}</p>;
  }
);
const Name: FC<{ name?: User["name"] }> = observer(({ name }) => {
  console.count("name");
  return <p>{name?.value || ""}</p>;
});
const ViewUser: FC<{ user?: User; onClick: () => void }> = observer(
  ({ user, onClick }) => {
    console.count("user");
    const { name, age } = user || {};
    return (
      <div>
        <Name name={name} />
        <Age age={age} onClick={onClick} />
      </div>
    );
  }
);

const App: React.FC = observer(() => {
  const { increase, init, reset, user } = store;
  console.count("app");
  useEffect(() => {
    init();
  }, [init]);
  return (
    <div>
      <ViewUser user={user} onClick={increase} />
      <button onClick={() => reset()}>init</button>
    </div>
  );
});

export default App;
