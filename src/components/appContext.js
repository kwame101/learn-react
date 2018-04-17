import React from 'react';

// context api - a way to make something global to its children (providor, consumer)
const appContext = React.createContext();
export const { Provider, Consumer } = appContext;
