import React from "react";
import { Menu } from "semantic-ui-react";
import Tab from "./Tab";
export default function TabBar({
  tabs,
  currentTab,
  onTabClick,
  ...otherProps
}) {
  return (
    <div>
      <Menu tabular attached="top" {...otherProps}>
        {tabs.map((tab) => {
          const { name, label } = tab;
          return (
            <Tab
              key={name}
              name={name}
              label={label}
              active={currentTab === name}
              onClick={onTabClick}
            />
          );
        })}
      </Menu>
    </div>
  );
}
