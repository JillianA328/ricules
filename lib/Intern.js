const Employee = require('./Employee.js')

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.schoolName = this.schoolName;
    }

    getSchool() {
        return this.schoolName

    }


    getRole() {
        return 'Intern'
    }
}

module.exports = Intern;