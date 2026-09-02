import {Suspense} from "react";
import Loader from "./Loader.tsx";
import UserList from "./UserList.tsx";

const Root = () => {
  return (
      <div>
          <Suspense fallback={<Loader />}>
              <UserList />
          </Suspense>
      </div>
  )
}

export default Root