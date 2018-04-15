// Running inside the a CI build system
if(process.env.CI && process.env.TRAVIS_PULL_REQUEST !== 'false'){
    // GitHub merge request, no PR
    // CI only test cases
    describe('Amino credential', () => {
        it('should have the credential setted up already in place', () => {
            if(!process.env.AMINO_EMAIL){
                throw new Error('Missing Amino credential - AMINO_EMAIL');
            }

            if(!process.env.AMINO_PASSWORD){
                throw new Error('Missing Amino credential - AMINO_PASSWORD');
            }
        });
    });    
}else{
    describe.skip();
}