const HelloWorld = require("../src/HelloWorld.js");

test("HelloWorld.greetWorld() equals Hello, world!", () => {
    expect(HelloWorld.greetWorld()).toBe("Hello, world!");
});