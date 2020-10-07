import React from "react";
import TabBar from "./TabBar";
import { useState, useEffect } from "react";
export default function TabBarContainer({ tabs, ...otherProps }) {
  const [currentTab, setCurrentTab] = useState(null);
  useEffect(() => {
    setCurrentTab(tabs[0].name);
  }, [tabs]);
  const onTabClick = (name) => {
    setCurrentTab(name);
  };
  return (
    <TabBar
      {...otherProps}
      currentTab={currentTab}
      tabs={tabs}
      onTabClick={onTabClick}
    />
  );
}
