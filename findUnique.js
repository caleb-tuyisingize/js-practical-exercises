function findUniq(arr) {
  const normalize = (str) => [...new Set(str.toLowerCase().replace(/\s+/g, ""))].sort().join("");
  const mapped = arr.map(normalize);
  const counts = mapped.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  },{});

  const uniqueVal = Object.keys(counts).find(keys => counts[keys] === 1);
  return arr[mapped.indexOf(uniqueVal)];

}
console.log(findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]));
