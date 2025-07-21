function permutations(string) {
    const result = new Set();

    function solvo(current, remaining){
        if(remaining.length === 0){
            result.add(current);
            return;
        }

        for(let i = 0; i < remaining.length; i++){
            const nextValue = current + remaining[i];
            const restValue = remaining.slice(0,i) + remaining.slice(i+1);
            solvo(nextValue,restValue);
        }

    }
    solvo("",string);
	return Array.from(result);
}
console.log(permutations('aabb'));