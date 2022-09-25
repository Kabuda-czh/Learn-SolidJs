/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import AsyncResource from "./views/AsyncResource"
import { lazy, Suspense } from 'solid-js';
import SuspenseList from './views/SuspenseList/Main';
import Transition from './views/Transition/Main';
import CountingComponent from './views/CountingComponent/Main';
import SimpleTodos from './views/SimpleTodos/Main';

const Greeting = lazy(async () => {
  await new Promise(r => setTimeout(r, 5000))
  return import("./views/Suspense/SuspenseGreeting")
})

render(() => (
  <>
    <App />

    <hr />

    <AsyncResource />

    <hr />

    <h1>Welcome</h1>
    <Suspense fallback={<p>Loading...</p>}>
      <Greeting name="KBD" />
    </Suspense>

    <hr />

    <SuspenseList />

    <hr />

    <Transition />

    <hr />

    <CountingComponent />

    <hr />

    <SimpleTodos />

  </>
), document.getElementById('root') as HTMLElement);
