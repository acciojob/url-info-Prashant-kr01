//your JS code here. If required.
// let currenturl = window.location.href;
// let urlLength = currenturl.length;

// alert(`length of the URL is: ${currenturl}`);
cy.visit(baseUrl);
cy.on("window:alert", (str) => {
    const expectedAlerts = [
        `The length of the URL is: ${window.location.href.length}`,
        `The length of the URL is: ${window.location.href.length - 1}`
    ];
    expect(expectedAlerts).to.include(str);
});