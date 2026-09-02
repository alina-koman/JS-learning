import UserList from "./UserList.tsx";
import {Suspense} from "react";
import Loader from "./Loader.tsx";

function App() {

  return (
    <div>
        <Suspense fallback={<Loader />}>
            <UserList />
        </Suspense>
    </div>
  )
}

export default App
