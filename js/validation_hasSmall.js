$.validator.addMethod("hasSmall", function(value, element) {
    return this.optional( element ) || value.match(/[a-z]/g);
}, 'Please include atleast one small letter.');