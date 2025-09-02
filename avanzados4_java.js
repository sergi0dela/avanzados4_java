function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === text) {
        return i;
      }
    }
    return -1;
  }
  
  const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
  ];
  
  console.log(findArrayIndex(mainCharacters, "Leia"));
  console.log(findArrayIndex(mainCharacters, "Rey"));
  console.log(findArrayIndex(mainCharacters, "Darth Vader"));
  
  function removeItem(array, text) {
    const index = findArrayIndex(array, text);
    if (index !== -1) {
      array.splice(index, 1);
    }
    return array;
  }
  
  const charactersAfterRemoval1 = removeItem(mainCharacters, "Han Solo");
  console.log(charactersAfterRemoval1);
  
  const charactersAfterRemoval2 = removeItem(charactersAfterRemoval1, "Luke");
  console.log(charactersAfterRemoval2);
  
  const charactersAfterRemoval3 = removeItem(charactersAfterRemoval2, "Pikachu");
  console.log(charactersAfterRemoval3);