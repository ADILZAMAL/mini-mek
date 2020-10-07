import React from "react";
import { Menu } from "semantic-ui-react";
import ToggleDisplay from "react-toggle-display";
import Tab from "./Tab";
export default function TabBar({
  tabs,
  currentTab,
  onTabClick,
  ...otherProps
}) {
  const tabPanels = tabs.map((tab) => {
    const { name, component: TabComponent } = tab;
    return (
      <ToggleDisplay show={name === currentTab} key={name}>
        <TabComponent />
      </ToggleDisplay>
    );
  });
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
      {tabPanels}
    </div>
  );
}
