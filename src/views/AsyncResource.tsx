import { createSignal, createResource } from "solid-js";

const fetchUser = async (id: string | number) =>
  (await fetch(`https://swapi.dev/api/people/${id}/`)).json();

const AsyncResource = () => {
  const [userId, setUserId] = createSignal();
  // const [user] = createSignal();
  const [user] = createResource(userId as unknown as string, fetchUser);

  return (
    <>
      <input
        type="number"
        min="1"
        placeholder="Enter Numeric Id"
        onInput={(e) => setUserId(e.currentTarget.value)}
      />
      <span>{user.loading && "Loading..."}</span>
      <div>
        <pre>{JSON.stringify(user(), null, 2)}</pre>
      </div>
    </>
  );
};

export default AsyncResource;