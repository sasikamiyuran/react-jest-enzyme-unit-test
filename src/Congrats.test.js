import React from "react";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import EnzymenAdapter from "enzyme-adapter-react-16";
import checkPropTypes from "check-prop-types";

import { findByTestAttr, checkProps } from "../test/testUtils";
import Congrats from "./Congrats";

Enzyme.configure({ adapter: new EnzymenAdapter() });

const defaultProps = { success: false };

/**
 * Factory function to create a ShallowWrapper for the Congratz Component.
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

test("should render without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test("should renders no text when `success` prop is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

test("should renders no-empty congratz message when `success` prop is true", () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, "congrats-message");
  expect(message.text().length).not.toBe(0);
});

test("should does not throw warning with expected props", () => {
  const expectedProps = { success: false };
  //   const propError = checkPropTypes(
  //     Congrats.propTypes,
  //     expectedProps,
  //     "prop",
  //     Congrats.name
  //   );
  //   expect(propError).toBeUndefined();
  checkProps(Congrats, expectedProps);
});
