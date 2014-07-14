describe("user should be able to visit home page", function () {

    var url = '';

    it("Then ", function() {

        browser.visit(url);

        //search for contract
        element(by.model('search.searchQuery')).sendKeys('disney');
        element.all(by.repeater('contract in search.contracts')).then(function (rows) {
            rows[0].click();
        });

        //contract is loaded
        expect(element(by.binding('contract.details.status')).getText()).toBe('ACTIVE');
    });

});
