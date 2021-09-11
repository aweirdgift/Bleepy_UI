$.validator.addMethod("hasNumber", function(value, element) {
    return this.optional( element ) || value.match(/[0-9]/g);
}, 'Please include atleast one number.');