var student = {
    name: 'Do Viet',
    age: '15',
    address: 'Vo Gia Cu',
  }
  function studentInfo ( name, age, address ){
    var result = name + " - " + age + " - " + address
    return result
  }
  console.log( studentInfo ( student.name, student.age, student.address) )