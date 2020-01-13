import { observer } from "mobx-react";
import React, { FC, useEffect } from "react";
import { store, User } from "./store";

const Age: FC<{ age: number; onClick: () => void }> = observer(
  ({ age, onClick }) => {
    console.count("age");
    const handleOnClick = () => {
      onClick();
    };
    return <p onClick={handleOnClick}>{age}</p>;
  }
);
const Name: FC<{ name: string }> = observer(({ name }) => {
  console.count("name");
  return <p>{name}</p>;
});
const ViewUser: FC<{ user?: User; onClick: () => void }> = observer(
  ({ user, onClick }) => {
    const { name, age } = user || {};
    console.count("user");
    return (
      <div>
        <Name name={name || ""} />
        <Age age={age || 0} onClick={onClick} />
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
