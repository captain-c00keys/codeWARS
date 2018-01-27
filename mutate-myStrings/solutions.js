function mutateMyStrings(stringOne, stringTwo){
    let one = stringOne.split('');
    let two = stringTwo.split('');
    let mutateString = stringOne.concat('\n');
    for (let i = 0; i < one.length; i++){
      if(one[i] !== two[i]) {
      one[i] = two[i];
      mutateString = mutateString.concat(`${one.join('')}\n`);
      }
  }
  return mutateString;
  }