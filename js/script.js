function saveToTable(){
    //get DOM Id from html
    const nameId = "name";
    const ageId = "age";
    const genderId = "gender"
    const dateOfBirthId = "dateOfBirth";

    //table render
    const tableId = "table";

    let name = document.getElementById(nameId).value;
    let age = document.getElementById(ageId).value;
    let gender = document.getElementById(genderId).value;
    let dateOfBirth = document.getElementById(dateOfBirthId).value;

    let table = document.getElementById(tableId);

    const member = {
        name: name.trim(),
        age: age.trim(),
        gender: gender.trim(),
        dateOfBirth: dateOfBirth.trim()
    };

    console.log(member);

    let row = table.insertRow();
    let index = table.rows.length;
    row.insertCell(0).innerHTML = index - 2;
    row.insertCell(1).innerHTML = member.name;
    row.insertCell(2).innerHTML = member.age;
    row.insertCell(3).innerHTML = member.gender;
    row.insertCell(4).innerHTML = member.dateOfBirth;
}