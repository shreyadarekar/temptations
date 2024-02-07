import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./UserCookbooks.css";
import { getCookbooks } from "../../store/cookbooks";

function UserCookbooks() {
  const dispatch = useDispatch();

  const cookbookEntries = useSelector((state) => state.cookbook.entries);
  const cookbooks = Object.values(cookbookEntries);
  const [isLoading, setIsLoading] = useState(true);
  const [shouldFetch, setShouldFetch] = useState(true);

  useEffect(() => {
    if (shouldFetch) {
      setIsLoading(true);
      dispatch(getCookbooks()).then(() => {
        setShouldFetch(false);
        setIsLoading(false);
      });
    }

    () => {
      setShouldFetch(true);
    };
  }, [dispatch, shouldFetch]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>My Cookbooks</h1>
      {cookbooks.map((cookbook, i) => (
        <div key={i}>{cookbook.title}</div>
      ))}
    </div>
  );
}

export default UserCookbooks;
