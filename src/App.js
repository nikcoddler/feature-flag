import { FeatureFlag, FeatureFlagProvider } from "./context/FeatureFlag";
import { useContext } from "react";

const Example = () => {
  return (
    <>
      <Feature feature="isGooglepayEnabled" value={true}>
        Google
      </Feature>
      <Feature feature="isApplePayEnabled" value={false}>
        Apple
      </Feature>
    </>
  );
};

const Feature = ({ feature, children, value }) => {
  const { features } = useContext(FeatureFlag);

  return features[feature] === value ? children : null;
};

function App() {
  return (
    <FeatureFlagProvider>
      <Example />
    </FeatureFlagProvider>
  );
}

export default App;
