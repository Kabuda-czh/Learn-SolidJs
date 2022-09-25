import { Suspense } from "solid-js";

import fetchProfileData from "./Mock-api";
import ProfilePage from "./Profile";

const SuspenseList = () => {
  const { user, posts, trivia } = fetchProfileData();
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <ProfilePage user={user()} posts={posts()} trivia={trivia()} />
    </Suspense>
  );
};

export default SuspenseList