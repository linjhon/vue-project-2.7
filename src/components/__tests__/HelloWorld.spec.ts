import { mount } from "@cypress/vue";
import HelloWorld from "../HelloWorld.vue";

describe("HelloWorld", () => {
  it("playground", () => {
    mount(HelloWorld as any, { propsData: { msg: "Hello Cypress" } });
  });

  it("renders properly", () => {
    mount(HelloWorld as any, { propsData: { msg: "Hello Cypress" } });
    cy.get("h1").should("contain", "Hello Cypress");
  });
});
