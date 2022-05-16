import React, { useEffect, useState } from "react";
import View from "./View";

const SearchList = ({ search, state, setState }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/compendium?name="+search,{mode:"no-cors"}).then((result)=>{
        console.log(result.json());
         setData(result.json());
        });
  }, [search, data]);
  const onAdd = (action) => () => {
    const { type } = action;
    const actions = state[type] ?? [];
    setState({ ...state, [type]: [...actions, action] });
  };
  const onDelete = (action) => () => {
    const { type } = action;
    const actions = state[type] ?? [];
    setState({
      ...state,
      [type]: actions.filter(({ id }) => id !== action.id),
    });
  };
  return data.map((action) => (
    <View
      key={action.Id}
      action={action}
      addItem={onAdd(action)}
      onDelete={onDelete(action)}
      alreadyExist={state[action.type]?.includes(action) ?? false}
    />
  ));
};

export default SearchList;
