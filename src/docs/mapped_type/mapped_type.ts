// mapped type
type OptionsFlag<Type> = {
  [Property in keyof Type]: boolean;
}

type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
}

type FeatureOptions = OptionsFlag<FeatureFlags>;
// type FeatureOptions = {
//   darkMode: boolean;
//   newUserProfile: boolean;
// }
