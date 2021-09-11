$.validator.addMethod("hasUpper", function(value, element) {
    return this.optional( element ) || value.match(/[A-Z]/g);
}, 'Please include atleast one capital letter.');