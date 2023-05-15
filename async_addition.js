function slowAddition(n1, n2) {
    return new Promise(resolve => {
      setTimeout(() => resolve(n1 + n2), 2000);
    });
  }
  async function increaseSalary(base, increase) {
    const newSalary = await slowAddition(base, increase);
    console.log(`New salary: ${newSalary}`);
    return newSalary;
  }
  
  increaseSalary(1000, 200); // => [object Promise]
// After 2 seconds logs "New salary 1200"

// increaseSalary(1000, 200).then(salary => {
//     salary; // => 1200
//   });

//nesting aync operation-- 
//await increaseSalary(baseSalary, increase) is called 3 times for each salary in the array. Each time JavaScript waits 2 seconds until the sum is calculated
async function increaseSalaries(baseSalaries, increase) {
    let newSalaries = [];
    for (let baseSalary of baseSalaries) {
      newSalaries.push(await increaseSalary(baseSalary, increase));
    }
    console.log(`New salaries: ${newSalaries}`);
    return newSalaries;
  }
  
  increaseSalaries([950, 800, 1000], 100);

  //parellal async
  async function increaseSalaries(baseSalaries, increase) {
    let salariesPromises = [];
    for (let baseSalary of baseSalaries) {
      salariesPromises.push(
        increaseSalary(baseSalary, increase)
      );
    }
    const newSalaries = await Promise.all(salariesPromises);
    console.log(`New salaries: ${newSalaries}`);
    return newSalaries;
  }
  
  increaseSalaries([950, 800, 1000], 100);

  async function fetchMovies() {
    const response = await fetch('https://api.example.com/movies');
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }
    const movies = await response.json();
    return movies;
  }