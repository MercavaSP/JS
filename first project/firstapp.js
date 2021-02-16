function myFirstApp(name, age) { 
  alert(`Привет, меня зовут ${name} и это моя первая программа`);
  
  function showSkills() { 
    let skills = ['html', 'css', 'js']
    for (let i = 0; i < skills.length; i++) {
      document.write(`Я владею ${skills[i]}! ${'</br>'}` );
    }
  }

  function checkAge() {
    if (age < 18) {
      alert('слишком рано для разработки');
    } else {
      alert('Супер возраст для разработки');
    }
    }

  function calcPow(num) { 
    console.log(Math.pow(num,2));
   } 
   

   showSkills();
   checkAge();
   calcPow(4);
}
myFirstApp(name, age);