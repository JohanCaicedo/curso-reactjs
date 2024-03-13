
import React from "react";


function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(() => {
      const localStorageItem = localStorage.getItem(itemName);
      if (!localStorageItem) {
        const initialItem = initialValue;
        localStorage.setItem(itemName, JSON.stringify(initialItem));
        return initialItem;
      } else {
        return JSON.parse(localStorageItem);
      }
    });
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
  
    return [item, saveItem];
  }

  export {useLocalStorage};