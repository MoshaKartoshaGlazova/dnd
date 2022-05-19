import React, { useEffect, useState } from "react";
import { replacer } from "../../utils";
import View from "./View";

const SearchList = ({ search, state, setState }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/compendium?name=" + search, {
      mode: "cors",
      method: "GET",
      dataType: "json",
    })
      .then((response) => {
        if (response.ok) {
          console.log(response);
          return response.json();
        }
        throw response;
      })
      .then((result) => {
        console.log(result);
        setData(result);
      })
      .catch(console.error);
  }, [search]);
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
  const transformDescription = replacer(state);
  return data.map((action) => (
    <View
      key={action.Id}
      action={{...action, description: transformDescription(action.description)}}
      addItem={onAdd(action)}
      onDelete={onDelete(action)}
      alreadyExist={state[action.type]?.includes(action) ?? false}
    />
  ));
};

export default SearchList;
