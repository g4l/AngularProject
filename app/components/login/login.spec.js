describe("Authorization Service Tests", function() {
    var authorizationService, $httpBackend;

    $$beforeEach(inject(function (_$httpBackend_, _authorizationService_) {
        authorizationService = _authorizationService_;
        $httpBackend = _$httpBackend_;
    }));

    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });
});