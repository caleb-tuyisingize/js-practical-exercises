function findRoutes(routes) {
  return routes.map((a)=> [...new Set(a)]);
}
var routes1 = findRoutes([["MNL", "TAG"], ["CEB", "TAC"], ["TAG", "CEB"], ["TAC", "BOR"]]);
console.log(findRoutes(routes1));