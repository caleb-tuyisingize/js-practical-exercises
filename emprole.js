function findEmployeesRole(name = "") {
    let employees = [ {firstName: "Dipper", lastName: "Pines", role: "Boss"}, 
        {firstName: "Monyger", lastName: "Mines", role: "Employee"},
        {firstName: "Ruger", lastName: "Ways", role: "Secutiy"},
        {firstName: "Minor", lastName: "Dosite", role: "Secretary"}
    ];
    const splitted = name.split(" ");
    if(splitted.length > 1 && splitted.length <=2){
    name = name.toLowerCase();
    
    const [first, last]=name.split(" ");
    let employesArr = employees.find(ele => ele.firstName.toLowerCase() === first && ele.lastName.toLowerCase() === last ? ele.role : "");
    if(employesArr === undefined){
        return "Does not work here!";
    }else{
        return employesArr.role;
        
    }
    
}else if(splitted.length === 1){
     name = name.toLowerCase();
     let employesArr = employees.find(ele => ele.firstName.toLowerCase() === name || ele.lastName.toLowerCase() === name ? ele.role : "");
 if(employesArr === undefined){
    return "Does not work here!";
 }else{
     return employesArr.role;

 }
}else{
    return "Incorrect name intered";
}
}
console.log(findEmployeesRole("Samuel Some Nah"));




/*
function findEmployeesRole(name) {
    name = name.toLowerCase();
  let employees = [ 
    {firstName: "Dipper", lastName: "Pines", role: "Boss"}, 
    {firstName: "doe", lastName: "Docile", role: "secretary"},
    {firstName: "joe", lastName: "caleb", role: "security"}
  ]
 let employesArr = employees.find(ele => ele.firstName.toLowerCase() === name || ele.lastName.toLowerCase() === name ? ele.role : "");
 if(employesArr === undefined){
    return "Does not work here!";
 }else{
     return employesArr.role;

 }
 
}
console.log(findEmployeesRole("sam"));
*/