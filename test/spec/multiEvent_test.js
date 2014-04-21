describe("multiEvent", function(){
    describe("multiEvent.my_method()", function(){
        it("should return 1", function(done){
            _use('multiEvent@latest', function(exports) {
                expect('my_method' in exports);
                done();
            });
        });
    });
});