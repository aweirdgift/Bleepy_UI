$.validator.addMethod( "phonenumber", function( value, element ) {
    return this.optional( element ) || /09[0-9]{9}/g.test( value );
}, "Please input valid phone number" );