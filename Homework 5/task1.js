function Working(country){
    country = country;
    this.getCountry =function(){
        return country;
    }
    this.setCountry = function(value){
        country = value;
    } 
    this.toString = function(){
        var info = '';
        info += this.getCountry();
        return info;
    }  
}
function Worker(name, speciality, age, experience, salary, gender, placeOfWork, EmplYear, DismYear, DismReason,country){
    Working.call(this,country);
    name = name;
    speciality = speciality;
    age = age;
    experience = experience;
    salary = salary;
    gender = gender;
    placeOfWork = placeOfWork;
    EmplYear = EmplYear;
    DismYear = DismYear;
    DismReason = DismReason;
    this.getName =function(){
        return name;
    }
    this.setName = function(value){
        name = value;
    }
    this.getSpeciality = function(){
        return speciality;
    }
    this.setSpeciality = function(value){
        speciality = value;
    }
    this.getAge = function(){
        return age;
    }
    this.setAge = function(value){
        age = value;
    }
 
    this.setExperience = function(value){
        experience = value;
    }
    this.getExperience = function(){
        return experience;
    }
    this.getSalary = function(){
        return salary;
    }
    this.setSalary = function(value){
        salary = value;
    }
    this.getGender = function(){
        return gender;
    }
    this.setGender = function(value){
        gender = value;
    }
    this.setPlaceOfWork = function(value){
        placeOfWork = value;
    }
    this.getPlaceOfWork = function(){
        return placeOfWork;
    }
    this.setEmplYear = function(value){
        EmplYear = value;
    }
    this.getEmplYear = function(){
        return EmplYear;
    }
    this.setDismYear = function(value){
        DismYear = value;
    }
    this.getDismYear = function(){
        return DismYear;
    }
    this.setDismReason = function(value){
        DismReason = value;
    }
    this.getDismReason = function(){
        return DismReason;
    }
    this.getInfo = function(){
        return this.toString() + " " + this.getName() + " " + this.getAge() + " " + this.getGender();
    }
}
function Enterprise(company, position,country){
    Working.call(this,country);
    company = company;
    position = position;
    this.setCompany = function(value){
        company = value
    }
    this.setPosition = function(value){
        position = value;
    }
    this.getPosition = function(){
        return position;
    }
    this.getCompany = function(){
        return company;
    }
    this.getInfo = function(){
        return this.toString() + ' ' + this.getCompany() + ' ' + this.getPosition();
    }
}
function showInfo(){
    alert("Created");
}
var country = new Working('USA');
var worker = new Worker('','',19,2,'2000','Male','CompanyName','2017','','','USA');
worker.setName('Alex');
worker.setSpeciality('Driver');
console.log(worker.getInfo());
var company = new Enterprise('CompanyName','New York','USA');
console.log(company.getInfo());