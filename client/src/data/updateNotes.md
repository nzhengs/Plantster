Update: demo-ready-garden-ui
Update: totaHeight-fix
Update: saveable-layout

Update Goals (All)

1) Empty Grid
2) 4 x 6 Grid
3) Background Color on Grid
4) Count
5) Save all necessary info to top level
6) reset the default grid dimensions to current state values, keep defaults in the state definitions

In Process

- Creating 4 x 6 grid.

Update (dynamic-grid)
1) Add setState callback to handle functions for length and breadth
2) created pixelDimensions function that gets called from handle length and breadth


Update Notes (update 1 and 2)

1) Removed Static Grid Items
3) deep cloned this.state.layout and merged with layout from React Grid Layout to create a layout object that perserves the background color

