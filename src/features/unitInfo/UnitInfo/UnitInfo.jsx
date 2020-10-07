import React from "react";
import { Form, Dropdown, Segment } from "semantic-ui-react";
const FACTTION = [
  { value: "cc", text: "Capellan Confederation" },
  { value: "dc", text: "Draconis Combine" },
  { value: "elh", text: "Eridani Light Horse" },
  { value: "fs", text: "Federated Suns" },
  { value: "fwl", text: "Free World League" },
  { value: "hr", text: "Hansen's Roughriders" },
  { value: "lc", text: "Lyran Commonwealth" },
  { value: "wd", text: "Wolf's Dragoons" },
];

const UnitInfo = () => {
  return (
    <Segment attached="bottom">
      <Form size="large">
        <Form.Field name="name" widht={6}>
          <label>Unit Name</label>
          <input placeholder="name" value="Black Widow Company" />
        </Form.Field>
        <Form.Field name="affilation" widht={6}>
          <label>Affilation</label>
          <Dropdown selection options={FACTTION} value="wd" />
        </Form.Field>
      </Form>
    </Segment>
  );
};

export default UnitInfo;
