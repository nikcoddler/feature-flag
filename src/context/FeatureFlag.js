const { createContext, useState } = require("react");

export const FeatureFlag = createContext({});

export const FeatureFlagProvider = ({ children }) => {
  const [features, setFeatures] = useState({
    isGooglepayEnabled: true,
    isApplePayEnabled: false,
  });
  return (
    <FeatureFlag.Provider value={{ features }}>{children}</FeatureFlag.Provider>
  );
};
