var locationStrategies = selenium.browserbot.locationStrategies;
return locationStrategies['xpath'].call(this, "//input[@id=//label[contains(.,'" + locator + "')]/@for]", inDocument, inWindow) || null;
