import { For, Suspense, SuspenseList } from "solid-js";

interface IDetails {
  name: string
}
const ProfileDetails = (props: { user?: IDetails }) => <h1>{props.user?.name}</h1>;

interface IArray {
  id: number,
  text: string
}
const ProfileTimeline = (props: { posts: IArray[] | undefined }) => (
  <ul>
    <For each={props.posts}>{(post) => <li>{post.text}</li>}</For>
  </ul>
);

const ProfileTrivia = (props: { trivia: IArray[] | undefined }) => (
  <>
    <h2>Fun Facts</h2>
    <ul>
      <For each={props.trivia}>{(fact) => <li>{fact.text}</li>}</For>
    </ul>
  </>
);

export interface IPage {
  user?: IDetails | undefined,
  posts: IArray[] | undefined,
  trivia: IArray[] | undefined
}
const ProfilePage = (props: IPage) => (
  <>
    <ProfileDetails user={props.user} />
    <Suspense fallback={<h2>Loading posts...</h2>}>
      <ProfileTimeline posts={props.posts} />
    </Suspense>
    <Suspense fallback={<h2>Loading fun facts...</h2>}>
      <ProfileTrivia trivia={props.trivia} />
    </Suspense>
  </>
);

export default ProfilePage;