export const routes = {
  home: 'home',
  testredux: 'testredux',
  modeltesting: 'modeltesting',
  modeltestingconf: 'modeltestingconf',
}

export type ModelRoute ={
  route: string,
  group: string,
  content: string,
}
export const modelRoutes = {
  home : {route:'home', group: 'Home', content: 'Home'},
  azuresetting: {route: 'azuresetting', group: 'Settings', content: 'Azure Site Settings'},
  playground: {route: 'playground', group: 'Playgournd', content: 'Playground'}
 
}

