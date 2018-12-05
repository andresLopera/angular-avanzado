ng add @ngrx/store

/reducers => /store
 / global
  / actions
  / reducer
  / state 

/global
global.state.ts
global.reducer.ts

/ root 
 / index.ts
 / root.state.ts

global.actions.ts
global.reducer.ts

app.module.ts

items-api.service.ts

app.component.html
app.component.ts


ng add @ngrx/effects

items.actions
items.reducer

index.ts
root.state.ts

items-container.ts
items-container.html

app.effects => items/items.effects

items.effects.ts

npm i @ngrx/store-devtools --save
app.module.ts
# https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en
