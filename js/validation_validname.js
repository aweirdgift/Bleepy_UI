$.validator.addMethod( "validname", function( value, element ) {
    return this.optional( element ) || /^[a-z+ ]+$/i.test( value );
}, "Please input valid name" );