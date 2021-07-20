module.exports = function (){
    this.fname = 'Nandini';
    this.lname = 'Chouhan';
    this.fullName = () => {
        return this.fname+" "+this.lname;
       
    }
    this.age = 21;
    this.company = 'TFT'
}