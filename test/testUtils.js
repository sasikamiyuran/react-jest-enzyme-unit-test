import checkPropTypes from "check-prop-types";

/**
 * Return node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper - Enzyme ShallowWrapper
 * @param {string} val - Value of the data-test attribute for search
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, confirmingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    confirmingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
