import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create ShallowWrapper for the App Component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<App />);
};

/**
 * Return ShallowWrapper containing node(s) with the given data set value
 * @param {ShallowWrapper} wrapper
 * @param {string} val
 */
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test("should render without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("should renders button", () => {
  const wrapper = setup();
  const incrementButton = findByTestAttr(wrapper, "increment-button");
  expect(incrementButton.length).toBe(1);
});

test("should renders counter display", () => {
  const wrapper = setup();
  const counterDispaly = findByTestAttr(wrapper, "counter-display");
  expect(counterDispaly.length).toBe(1);
});

test("should counter start at 0", () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
});

test("should clicking on button increments counter desplay", () => {
  const wrapper = setup();

  //find the button
  const button = findByTestAttr(wrapper, "increment-button");

  //click the button
  button.simulate("click");

  //set increment count and test
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("1");
});

test("should display decrement button", () => {
  const wrapper = setup();
  const decrementButton = findByTestAttr(wrapper, "decrement-button");
  expect(decrementButton.length).toBe(1);
});

describe("clicking the decrement button and decrements desplay when state is greater than 0", () => {
  test("should decrement count when button on click", () => {
    const wrapper = setup();

    //find the buttons
    const incrementButton = findByTestAttr(wrapper, "increment-button");
    const decrementButton = findByTestAttr(wrapper, "decrement-button");

    //click button
    const count = findByTestAttr(wrapper, "count").text();
    incrementButton.simulate("click");
    decrementButton.simulate("click");

    //test the count is decremental
    expect(count).toBe("0");
  });
});

describe("Display error when count goes below 0", () => {
  test("should display error when count gose below 0", () => {
    const wrapper = setup();
    const errorDiv = findByTestAttr(wrapper, "error-message");

    // using enzyme's ".hasClass()" method
    // http://airbnb.io/enzyme/docs/api/ShallowWrapper/hasClass.html
    const errorHasHiddenClass = errorDiv.hasClass("hidden");
    // console.log(wrapper.debug());
    expect(errorHasHiddenClass).toBe(true);
  });
});

describe("Count is 0 and decrement is clicked", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();

    const button = findByTestAttr(wrapper, "decrement-button");
    button.simulate("click");
  });

  test("should display error message", () => {
    const errorDiv = findByTestAttr(wrapper, "error-message");
    const errorHassHiddenClass = errorDiv.hasClass("hidden");
    expect(errorHassHiddenClass).toBe(false);
  });

  test("should still counter is 0", () => {
    const count = findByTestAttr(wrapper, "count").text();
    expect(count).toBe("0");
  });

  test("should disapear error message when click increment button", () => {
    //find and click the increment button
    const incrButton = findByTestAttr(wrapper, "increment-button");
    incrButton.simulate("click");

    //check the class of the error message
    const errorDiv = findByTestAttr(wrapper, "error-message");
    const errorHasHiddenClass = errorDiv.hasClass("hidden");
    expect(errorHasHiddenClass).toBe(false);
  });
});
