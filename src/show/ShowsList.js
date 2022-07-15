import { useEffect, useState } from "react";
import { fetchData } from "../API";
import ShowDetail from "./ShowsDetails";

function List() {
  const [state, setState] = useState([]);
  const [showDetail, setShowDetail] = useState({});
  const [flag, setFlag] = useState(false);

  async function loadData() {
    const res = await fetchData();
    if (res) {
      setState(res);
    }
  }
  useEffect(() => {
    loadData();
  }, []);

  function addShowDetail(e) {
    setShowDetail(e);
    setFlag(true);
  }
  function removeDetail() {
    setShowDetail({});
    setFlag(false);
  }

  return (
    <div className="container mt-4">
      <header className="App-header">Total Shows ({state.length})</header>
      {flag ? (
        <ShowDetail removeDetail={removeDetail} showDetail={showDetail} />
      ) : (
        <ul className="list-group">
          {state.map((e) => {
            return (
              <li key={e.show.id} className="list-group-item">
                <div>
                  <span>{e.show.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                  <span onClick={() => addShowDetail(e)}>view</span>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default List;
