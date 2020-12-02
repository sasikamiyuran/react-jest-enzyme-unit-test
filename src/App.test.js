import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("should renders without error", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

test("should renders button", () => {});

test("should renders counter display", () => {});

test("should counter start at 0", () => {});

test("should clicking on button increments counter desplay", () => {});
