import React from "react";
import renderer from 'react-test-renderer';
import Button from "./Button";
import {data} from "./Button.mock";

test('Renders without error', () => {
  const component = renderer.create(
    <Button {...data} />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});